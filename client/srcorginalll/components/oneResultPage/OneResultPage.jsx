import React, { useEffect, useState } from 'react';
import { Image, Row, Col, Container, Button } from "react-bootstrap";
import "./OneResultPage.css" ;
import TestNavbar from "../freeTest/TestNavbar";

const OneResultPage = (props) => {
  const [situationNumber, setSituationNumber] = useState(props.location.situation.situationNo);
  const [situation, setSituation] = useState([]);
  const [questions, setQuestions] = useState([]);
  //const [userAnswer, setUserAnswer] = useState([]);
  const [testLength, setTestLength] = useState(null);
  const [fileNames, setFileNames] = useState([]);

  //let answer_in_storage = JSON.parse(window.localStorage.getItem('userAnswer'));

  // const getAnswer = (idx, answerNo) => {
  //   if (typeof Storage !== 'undefined') {
  //     //Code for localStorage/sessionStorage.
  //     if (localStorage.userAnswer) {
  //       let answer_in_storage = JSON.parse(window.localStorage.getItem('userAnswer'));
  //       setUserAnswer(answer_in_storage);
  //       let isAnswered_before = userAnswer.filter((el) => el.questionId === idx);
  //       if (isAnswered_before.length === 0) {
  //         let usr_answer = userAnswer.slice();
  //         usr_answer.push({ questionId: idx, answer: answerNo, situationId: situationNumber });
  //         let aa = usr_answer;
  //         setUserAnswer(aa);
  //         window.localStorage.setItem('userAnswer', JSON.stringify(userAnswer));
  //       } else {
  //         let usr_answer = userAnswer.slice();
  //         let changedAnswer = usr_answer.filter((el) => el.questionId !== idx);
  //         changedAnswer.push({ questionId: idx, answer: answerNo, situationId: situationNumber });
  //         setUserAnswer(changedAnswer);
  //         window.localStorage.setItem('userAnswer', JSON.stringify(userAnswer));
  //       }
  //       console.log(userAnswer);
  //     } else {
  //       localStorage.userAnswer = JSON.stringify([
  //         { questionId: idx, answer: answerNo, situationId: situationNumber }
  //       ]);
  //     }
  //   } else {
  //     //Sorry! No Web Storage support..
  //     alert('Sorry! No Web Storage support..');
  //   }
   //};


  useEffect(
    () => {
      const fetchSituation = () => {
        return fetch(`/api/tests/'equipment'/${props.location.situation.situationNo}`)
          .then((res) => res.json())
          .then((data) => data);
      };
      //console.log(fetchSituation());
      fetchSituation().then((gettingData) => {
        setSituation(gettingData);
      });

      const fetchQuestion = () => {
        return fetch(`/api/tests/question/'equipment'/${props.location.situation.situationNo}`)
          .then((res) => res.json())
          .then((data) => data);
      };
      //console.log(fetchQuestion());
      fetchQuestion().then((gettingQuestion) => {
        setQuestions(gettingQuestion);
      });
      // Total situation count
      const fetchSituationCount = () => {
        return fetch(`/api/tests/'equipment'`)
          .then((res) => res.json())
          .then((data) => data);
      };
      //console.log(fetchQuestion());
      fetchSituationCount().then((gettingTotal) => {
        let count = gettingTotal.length;
        setTestLength(count);
      });

      // Fetch file names
      const fetchFileNames = () => {
        return fetch(`/api/tests/filenames`)
          .then((res) => res.json())
          .then((data) => data);
      };

      fetchFileNames().then((data) => {
        setFileNames(data);
      })
    },
    [situationNumber]
  );

  return (
    <>
      <TestNavbar situationNo={situationNumber} testLength={testLength} />
      <Container className="free-test" align="center">
        <Row className="test-part">

          <Col xs={8} md={8}>
            {fileNames.filter((el) =>
              Number(el.situationNumber) === Number(situationNumber) && el.testName === 'test-1'
            ).map((img) => (
              <Image
                src={img.fileRelativePath} //{situation_img.image}
                rounded
                className="image-situation  my-2"
                key={img.situationNumber}
              />
            ))}
          </Col>
        </Row>
        <Col>
          <Row className="situation ">
            {situation.map((text, id) => (
              <h3 key={id}>{text.situation}</h3>
            ))}
          </Row>

          {questions.map((question, id) => (
            <Row key={question.questionId} xs={7}  >
              <Col
                className="questions"
                key={question.questionId}
              >
                <div>
                  <div >
                <h4 key={question.questionId}>{question.text}</h4>
                  </div>
                  <div className = "feedbackQuestion">
                    <p> {question.explanation === null ? `${question.answer}` : `${question.answer} ---> ${question.explanation}`} </p>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </Col>
      </Container>
    </>
  );
};

export default OneResultPage;
