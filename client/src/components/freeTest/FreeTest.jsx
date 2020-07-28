import React, { useEffect, useState } from 'react';
import { Image, Row, Col, Container } from "react-bootstrap";
import "./FreeTest.css";
import TestNavbar from "./TestNavbar";
import Player from "./Player";

const FreeTest = () => {
  const [situationNumber, setSituationNumber] = useState(1);
  const [situation, setSituation] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [userAnswer, setUserAnswer] = useState([]);
  const [testLength, setTestLength] = useState(null);
  const [fileNames, setFileNames] = useState([]);

  const getAnswer = (idx, answerNo) => {
    if (typeof Storage !== 'undefined') {
      //Code for localStorage/sessionStorage.
      if (localStorage.userAnswer) {
        let answer_in_storage = JSON.parse(window.localStorage.getItem('userAnswer'));
        setUserAnswer(answer_in_storage);
        let isAnswered_before = userAnswer.filter((el) => el.questionId === idx);
        if (isAnswered_before.length === 0) {
          let usr_answer = userAnswer.slice();
          usr_answer.push({ questionId: idx, answer: answerNo, situationId: situationNumber });
          setUserAnswer(usr_answer);
          window.localStorage.setItem('userAnswer', JSON.stringify(userAnswer));
        } else {
          let usr_answer = userAnswer.slice();
          let changedAnswer = usr_answer.filter((el) => el.questionId !== idx);
          changedAnswer.push({ questionId: idx, answer: answerNo, situationId: situationNumber });
          setUserAnswer(changedAnswer);
          window.localStorage.setItem('userAnswer', JSON.stringify(userAnswer));
        }
        console.log(userAnswer);
      } else {
        localStorage.userAnswer = JSON.stringify([
          { questionId: idx, answer: answerNo, situationId: situationNumber }
        ]);
      }
    } else {
      //Sorry! No Web Storage support..
      alert('Sorry! No Web Storage support..');
    }
  };

   const goToNext = () => (

     situationNumber < testLength ? setSituationNumber(situationNumber+1) : situationNumber
   )
   

  useEffect(() => {
      const fetchSituation = async () => {
        const res = await fetch(`/api/tests/'equipment'/${situationNumber}`);
        const data = await res.json();
        setSituation(data);
      };
      
      fetchSituation();

      const fetchQuestion = () => {
        return fetch(`/api/tests/question/'equipment'/${situationNumber}`)
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
    }, []
  );

  return (
    <>
      <TestNavbar situationNo={situationNumber} testLength={testLength} />
      <Container className="free-test">
        <Row className="test-part">
          <Col xs={1}></Col>
          <Col xs={8} md={9}>
            {fileNames.filter((el) =>
              Number(el.situationNumber) === Number(situationNumber) && el.testName === 'test-1'
            ).map((img) => (
              <Image
                src={img.fileRelativePath } //{situation_img.image}
                rounded
                className="image-situation  my-2"
                key={img.situationNumber}
              />
            ))}
          </Col>
          <Col xs={1} md={2}>
            <Image
              src="/assets/next2.jpeg"
              roundedCircle
              className="next-button"
              onClick={() => goToNext() }
            />
          </Col>
        </Row>
        <Col>
          <Row className="situation ml-3">
            {situation.map((text, id) => (
              <h3 key={id}>
                <Player url={"/assets/tests/test-1/1/- 2013_06_29_10_47_281--2.mp3"}/>
                {text.situation}
              
              </h3>
            ))}
          </Row>

          {questions.map((question) => (
            <Row key={question.questionId} className=" ml-3">
              <Col
                className="questions"
                xs={8}
                md={10}
                key={question.questionId}
              >
                <h4 key={question.questionId}>{question.text}</h4>
              </Col>
              <Col key={question.questionId + 1}>
                <div className="form-check form-check-inline check-box" xs={1}>
                  <input
                    className="form-check-input"
                    type="radio"
                    id={`inlineRadio${question.questionId}`}
                    value="option1"
                    onChange={() => getAnswer(question.questionId, 1)}
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline check-box" xs={1}>
                  <input
                    className="form-check-input"
                    type="radio"
                    id={`inlineRadio${question.questionId + 1}`}
                    value="option2"
                    onChange={() => getAnswer(question.questionId, 2)}
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    No
                  </label>
                </div>
              </Col>
            </Row>
          ))}
        </Col>
      </Container>
      <ul>
        {userAnswer.map((a) => (
          <li key={a.questionId}>
            {/* {a.questionId} --> {a.answer} */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FreeTest;
