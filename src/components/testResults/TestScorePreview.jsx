import React from 'react';
import Form from 'react-bootstrap/Form';

const TestScorePreview = ({result, handleStatusModalShow}) => {
  const changeStatusHandle = () => {
    handleStatusModalShow(result);
  };
  return (
    <div className="d-flex align-items-center">
      <div className="shadow mb-3 px-4 py-3 d-flex w-100 justify-content-between align-items-center">
        <div className="d-flex">
          <div>
            <p className="h3">{result.title}</p>
            <p className="mb-0">Grade Achieved: {result.score}%</p>
          </div>
        </div>

        <div className="d-flex">
          {result.user ?
            <a href="#" className="mb-0 mr-4">{result.user.username}</a>
            :
            <Form.Check
              type="switch"
              checked={result.public}
              label="Public"
              className="mr-4"
              id={result.id}
              onChange={changeStatusHandle}
            />
          }
          <div className="">
            <p className="mb-0 text-secondary text-right">{result.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestScorePreview;
