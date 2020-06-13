import React from 'react';
import Form from 'react-bootstrap/Form';
import Skeleton from 'react-loading-skeleton';

const TestScorePreview = ({result, handleStatusModalShow}) => {
  const changeStatusHandle = () => {
    handleStatusModalShow(result);
  };
  return (
    <div className="d-flex align-items-center">
      <div
        className="shadow mb-3 px-4 py-3 d-flex w-100 justify-content-between align-items-center">
        <div className="d-flex">
          <div>
            <p className="h3">{result ? result.title : <Skeleton width={120}/>}</p>
            {result ? <p className="mb-0">Grade Achieved: {result.score}%</p> : <Skeleton width={180}/>}
          </div>
        </div>

        {result ?
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
          : <p><Skeleton width={200} height={20}/></p>}
      </div>
    </div>
  );
};

export default TestScorePreview;
