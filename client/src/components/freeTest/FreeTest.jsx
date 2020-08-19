import React, { useEffect, useState } from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import "./FreeTest.css";
import TestNavbar from "./TestNavbar";
import Footer from "../home/Footer";

const FreeTest = (props) => {
  const [situationNumber, setSituationNumber] = useState(1);
  const [situation, setSituation] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [userAnswer, setUserAnswer] = useState([]);
  const [testLength, setTestLength] = useState(null);
  const [fileNames, setFileNames] = useState([]);
  const [test, setTest] = useState(localStorage.getItem("testN"));

  const getAnswer = (idx, answerNo) => {
    if (typeof Storage !== "undefined") {
      //Code for localStorage/sessionStorage.
      if (localStorage.userAnswer) {
        let answer_in_storage = JSON.parse(
          window.localStorage.getItem("userAnswer")
        );
        setUserAnswer(answer_in_storage);
        let isAnswered_before = answer_in_storage.filter(
          (el) => el.questionId === idx
        );
        if (isAnswered_before.length === 0) {
          let usr_answer = answer_in_storage.slice();
          usr_answer.push({
            questionId: idx,
            answer: answerNo,
            situationId: situationNumber,
          });
          let aa = usr_answer;
          setUserAnswer(aa);
          window.localStorage.setItem("userAnswer", JSON.stringify(usr_answer));
        } else {
          //let usr_answer = isAnswered_before.slice();
          let changedAnswer = answer_in_storage.filter((el) => el.questionId !== idx);
          changedAnswer.push({
            questionId: idx,
            answer: answerNo,
            situationId: situationNumber,
          });
          setUserAnswer(changedAnswer);
          window.localStorage.setItem("userAnswer", JSON.stringify(changedAnswer));
        }
        console.log(userAnswer);
      } else {
        localStorage.userAnswer = JSON.stringify([
          { questionId: idx, answer: answerNo, situationId: situationNumber },
        ]);
      }
    } else {
      //Sorry! No Web Storage support..
      alert("Sorry! No Web Storage support..");
    }
  };

  const goToNext = () =>
    situationNumber < testLength
      ? setSituationNumber(situationNumber + 1)
      : situationNumber;

  useEffect(() => {
    const fetchSituation = () => {
      return fetch(`/api/tests/'${test}'/${situationNumber}`)
        .then((res) => res.json())
        .then((data) => data);
    };
    //console.log(fetchSituation());
    fetchSituation().then((gettingData) => {
      setSituation(gettingData);
    });

    const fetchQuestion = () => {
      return fetch(`/api/tests/question/'${test}'/${situationNumber}`)
        .then((res) => res.json())
        .then((data) => data);
    };
    //console.log(fetchQuestion());
    fetchQuestion().then((gettingQuestion) => {
      setQuestions(gettingQuestion);
    });
    // Total situation count
    const fetchSituationCount = () => {
      return fetch(`/api/tests/'${test}'`)
        .then((res) => res.json())
        .then((data) => data);
    };
    //console.log(fetchQuestion());
    fetchSituationCount().then((gettingTotal) => {
      let count = gettingTotal.rows.length;
      setTestLength(count);
      window.localStorage.setItem("firstSituationId", gettingTotal.first);
    });

    // Fetch file names
    const fetchFileNames = () => {
      return fetch(`/api/tests/filenames`)
        .then((res) => res.json())
        .then((data) => data);
    };

    fetchFileNames().then((data) => {
      setFileNames(data);
    });
  }, [situationNumber]);

  return (
    <>
      <TestNavbar situationNo={situationNumber} testLength={testLength} />
      <Container className="free-test" align="center">
        <Row className="test-part">
          <Col xs={12}>
            {fileNames
              .filter(
                (el) =>
                  Number(el.situationNumber) === Number(situationNumber) &&
                  el.testName === test
              )
              .map((img) => (
                <div className="test-part ">
                  <Image
                    src={img.fileRelativePath} //{situation_img.image}
                    rounded
                    className="image-situation  mb-2"
                    key={img.situationNumber}
                  />
                </div>
              ))}
          </Col>
        </Row>
        <Row className="situation">
          {situation.map((text, id) => (
            <Col xs={12}>
              <h3 key={id}>{text.situation}</h3>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={{ span: 9, offset: 1 }} md={{ span: 7, offset: 3 }}>
            {questions.map((question, id) => (
              <Row className="question-part" key={question.questionId}>
                <Col xs={8} className="questions" key={question.questionId}>
                  <p key={question.questionId} className="questions-text">
                    {question.text}
                  </p>
                </Col>

                <Col
                  xs={2}
                  lg={1}
                  className="form-check form-check-inline check-box pl-1"
                >
                  <input
                    className="form-check-input cursor"
                    type="radio"
                    name={id}
                    id={`"inlineRadio${question.questionId}"`}
                    value="option1"
                    onChange={() => getAnswer(question.questionId, 1)}
                  />
                  <label className="form-check-label cursor" for={`"inlineRadio${question.questionId}"`}>
                    Yes
                  </label>
                </Col>
                <Col
                  xs={2}
                  lg={1}
                  className="form-check form-check-inline check-box pl-1"
                >
                  <input
                    className="form-check-input cursor"
                    type="radio"
                    name={id}
                    id={`"inlineRadio${question.questionId}1"`}
                    value="option2"
                    onChange={() => getAnswer(question.questionId, 2)}
                  />
                  <label className="form-check-label cursor" for={`"inlineRadio${question.questionId}1"`}>
                    No
                  </label>
                </Col>
              </Row>
            ))}
          </Col>
          <Col xs={2} md={2} className="next" onClick={() => goToNext()}>
            <Image src="/assets/nextt.png" className="next-image"></Image>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default FreeTest;
