import React, {useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-jsx.min"

import {setSelectedAnswers} from '../../store/actions/testActions'
import {useDispatch, useSelector} from 'react-redux';

const Question = ({question, index}) => {
  const dispatch = useDispatch();
  const selectedAnswers = useSelector(state => state.test.selectedAnswers);

  useEffect(() => {
    Prism.highlightAll();
  }, [question]);

  const handleInput = (answerId) => {
    const {id, type} = question;
    let newAnswer;
    if (selectedAnswers && !!selectedAnswers[id] && selectedAnswers[id].includes(answerId)) {
      newAnswer = selectedAnswers[id].filter(el => el !== answerId);
    } else {
      if (type === "radio" || !selectedAnswers[id]) {
        newAnswer = [answerId];
      } else {
        newAnswer = [...selectedAnswers[id], answerId];
      }
    }
    dispatch(setSelectedAnswers({...selectedAnswers, [id]:newAnswer }))
  };

  return (
    <div className="p-5">
      <p className=""><span className="mr-2">{index + 1}.</span>{question.text}</p>
      <pre>
        <code className={"language-"+question.progLang}>{question.code}</code>
      </pre>
      <ul className="list-group">
        {question.answers.map(answer => (
          <label key={answer.id} className="list-group-item m-0">
            <Form.Check
              custom
              type={question.type}
              id={answer.id}
              onChange={() => handleInput(answer.id)}
              checked={!!selectedAnswers && !!selectedAnswers[question.id] && !!selectedAnswers[question.id].includes(answer.id)}
              label={answer.text}
            />
          </label>
        ))}
      </ul>
    </div>
  );
};

export default Question;
