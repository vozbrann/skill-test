import api from '../../utils/api';
import {
  TEST_SET,
  TEST_START_LOADING,
  TEST_START_ERROR,
  SET_SELECTED_ANSWERS,
  TEST_SUBMIT_ERROR,
  TEST_SUBMIT_LOADING,
  TEST_CANCEL_LOADING,
  TEST_CANCEL_ERROR
} from '../actions/actionsTypes';

const testData = {
  id: "1",
  title: "HTML",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem culpa dicta est eveniet facere nemo porro qui repellLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem culpa dicta est eveniet facere nemo porro qui repellLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem culpa dicta est eveniet facere nemo porro qui repellLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem culpa dicta est eveniet facere nemo porro qui repellat vero.",
  duration: 60000,
  timeBetweenAttempts: 2592000000,
  questions: [
    {
      id: '1',
      text: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, eos est magnam mollitia quibusdam rem sit temporibus totam! Ab adipisci enim eveniet nesciunt numquam odit perferendis quae soluta unde velit?\n',
      code: '    <MainBlock onClick={onClick} className="p-3 pl-4" active={active} done={done}>\n' +
        '      <LineClamp className="mb-0" lines={1}><span className="mr-3">{index+1}.</span>{text}</LineClamp>\n' +
        '    </MainBlock>',
      type: 'radio',
      progLang: 'jsx',
      answers: [
        {
          id: '_sbn5k8mvjsxc',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          is_correct: '1',
        },
        {
          id: '_sbn5k8mvj',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit2222222222?',
          is_correct: '0',
        },
        {
          id: '_sban5k8mvjsxc',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          is_correct: '0',
        },
        {
          id: '_sbnxcv5k8mvj',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit2222222222?',
          is_correct: '0',
        },
      ],
    },
    {
      id: '2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      code: '<div id="root"><div class="App"><nav class="sc-AxirZ lkKdir navbar navbar-expand-lg navbar-light bg-light"><div class="container"><a class="font-weight-bold navbar-brand" href="/">Skill-test</a><button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button><div class="navbar-collapse collapse" id="basic-navbar-nav"><div class="mr-auto navbar-nav"><a href="/catalog" class="nav-link">Catalog</a><a href="/test/score" class="nav-link">My results</a><a href="/test/create" class="nav-link">Create test</a></div><div class="navbar-nav"><div class="dropdown nav-item"><a aria-haspopup="true" aria-expanded="false" href="#" class="dropdown-toggle nav-link" role="button"><img src="https://source.unsplash.com/random" class="sc-AxjAm iFXkSX rounded-circle"></a></div></div></div></div></nav><div><div class="container"><h1 class="my-3 text-center">Create new test</h1><form class="mb-3"><div class="mb-3 p-3"><div class="form-group"><label class="h3 form-label" style="border-bottom: 4px solid rgb(0, 151, 167);">Title</label><input required="" name="title" type="text" class="form-control" value=""></div><div class="form-group"><label class="h3 form-label">Description</label><textarea required="" name="description" rows="3" class="form-control"></textarea></div><div class="form-row"><div class="form-group col-md-6"><label class="h5 form-label">Duration (minutes)</label><input required="" name="time_interval" type="number" class="form-control" value="30"></div><div class="form-group col-md-6"><label class="h5 form-label">Days between attempts</label><input required="" name="time_between_attempts" type="number" class="form-control" value="30"></div></div></div><div class="mb-3"><h2 class="bg-info text-white p-3"><span>Questions:</span></h2><div class="border border-info shadow p-3 mb-3 rounded"><div class="d-flex justify-content-between align-items-center"><span class="h3 mb-0">Question 1</span><button type="button" class="btn d-flex align-items-center justify-content-center"><span class="material-icons text-danger h3 m-0">clear</span></button></div><div class="form-group"><label class="form-label">Question text:</label><input required="" name="text" type="text" class="form-control" value=""></div><div class="form-group"><label class="form-label">Code</label><textarea name="code" rows="3" class="form-control" style="white-space: pre-wrap;"></textarea></div><div class="form-row"><div class="form-group col-md-6"><label class="form-label">Question type</label><select name="type" class="form-control"><option value="0">Single answer</option><option value="1">Multiple answer</option></select></div><div class="form-group col-md-6"><label class="form-label">Programming language</label><select name="progLang" class="form-control"><option value="html">html</option><option value="css">css</option><option value="js">js</option><option value="jsx">jsx</option></select></div></div><h2 class="bg-warning text-white p-3">Answers:</h2><div><div class="border border-warning p-3 mb-3"><div class="d-flex justify-content-between align-items-center"><span class="h3 mb-0">Answer 1</span><button type="button" class="btn d-flex align-items-center justify-content-center"><span class="material-icons text-danger h3 m-0">clear</span></button></div><div class="form-group"><label class="form-label">Answer text</label><input required="" name="text" type="text" class="form-control" value=""></div><div class="form-group"><label class="form-label">Is correct</label><select required="" name="is_correct" class="form-control"><option value="0">False</option><option value="1">True</option></select></div></div></div><button type="button" class="btn btn-secondary">Add answer</button></div><button type="button" class="btn btn-secondary">Add question</button></div><button type="submit" class="btn btn-primary">Submit</button></form></div></div></div></div>',
      type: 'checkbox',
      progLang: 'html',
      answers: [
        {
          id: '_sbn5k8mvjsxc',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          is_correct: '1',
        },
        {
          id: '_sbn5k8mvj',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit2222222222?',
          is_correct: '0',
        },
      ],
    },
    {
      id: '3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, voluptate.',
      code: '<div id="root"><div class="App"><nav class="sc-AxirZ lkKdir navbar navbar-expand-lg navbar-light bg-light"><div class="container"><a class="font-weight-bold navbar-brand" href="/">Skill-test</a><button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button><div class="navbar-collapse collapse" id="basic-navbar-nav"><div class="mr-auto navbar-nav"><a href="/catalog" class="nav-link">Catalog</a><a href="/test/score" class="nav-link">My results</a><a href="/test/create" class="nav-link">Create test</a></div><div class="navbar-nav"><div class="dropdown nav-item"><a aria-haspopup="true" aria-expanded="false" href="#" class="dropdown-toggle nav-link" role="button"><img src="https://source.unsplash.com/random" class="sc-AxjAm iFXkSX rounded-circle"></a></div></div></div></div></nav><div><div class="container"><h1 class="my-3 text-center">Create new test</h1><form class="mb-3"><div class="mb-3 p-3"><div class="form-group"><label class="h3 form-label" style="border-bottom: 4px solid rgb(0, 151, 167);">Title</label><input required="" name="title" type="text" class="form-control" value=""></div><div class="form-group"><label class="h3 form-label">Description</label><textarea required="" name="description" rows="3" class="form-control"></textarea></div><div class="form-row"><div class="form-group col-md-6"><label class="h5 form-label">Duration (minutes)</label><input required="" name="time_interval" type="number" class="form-control" value="30"></div><div class="form-group col-md-6"><label class="h5 form-label">Days between attempts</label><input required="" name="time_between_attempts" type="number" class="form-control" value="30"></div></div></div><div class="mb-3"><h2 class="bg-info text-white p-3"><span>Questions:</span></h2><div class="border border-info shadow p-3 mb-3 rounded"><div class="d-flex justify-content-between align-items-center"><span class="h3 mb-0">Question 1</span><button type="button" class="btn d-flex align-items-center justify-content-center"><span class="material-icons text-danger h3 m-0">clear</span></button></div><div class="form-group"><label class="form-label">Question text:</label><input required="" name="text" type="text" class="form-control" value=""></div><div class="form-group"><label class="form-label">Code</label><textarea name="code" rows="3" class="form-control" style="white-space: pre-wrap;"></textarea></div><div class="form-row"><div class="form-group col-md-6"><label class="form-label">Question type</label><select name="type" class="form-control"><option value="0">Single answer</option><option value="1">Multiple answer</option></select></div><div class="form-group col-md-6"><label class="form-label">Programming language</label><select name="progLang" class="form-control"><option value="html">html</option><option value="css">css</option><option value="js">js</option><option value="jsx">jsx</option></select></div></div><h2 class="bg-warning text-white p-3">Answers:</h2><div><div class="border border-warning p-3 mb-3"><div class="d-flex justify-content-between align-items-center"><span class="h3 mb-0">Answer 1</span><button type="button" class="btn d-flex align-items-center justify-content-center"><span class="material-icons text-danger h3 m-0">clear</span></button></div><div class="form-group"><label class="form-label">Answer text</label><input required="" name="text" type="text" class="form-control" value=""></div><div class="form-group"><label class="form-label">Is correct</label><select required="" name="is_correct" class="form-control"><option value="0">False</option><option value="1">True</option></select></div></div></div><button type="button" class="btn btn-secondary">Add answer</button></div><button type="button" class="btn btn-secondary">Add question</button></div><button type="submit" class="btn btn-primary">Submit</button></form></div></div></div></div>',
      type: 'checkbox',
      progLang: 'html',
      answers: [
        {
          id: '_sbn5dfgk8mvj',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          is_correct: '1',
        },
        {
          id: '_sbn5k8mvj',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit2222222222?',
          is_correct: '0',
        },
      ],
    },
    {
      id: '4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, voluptate.',
      code: '<div id="root"><div class="App"><nav class="sc-AxirZ lkKdir navbar navbar-expand-lg navbar-light bg-light"><div class="container"><a class="font-weight-bold navbar-brand" href="/">Skill-test</a><button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button><div class="navbar-collapse collapse" id="basic-navbar-nav"><div class="mr-auto navbar-nav"><a href="/catalog" class="nav-link">Catalog</a><a href="/test/score" class="nav-link">My results</a><a href="/test/create" class="nav-link">Create test</a></div><div class="navbar-nav"><div class="dropdown nav-item"><a aria-haspopup="true" aria-expanded="false" href="#" class="dropdown-toggle nav-link" role="button"><img src="https://source.unsplash.com/random" class="sc-AxjAm iFXkSX rounded-circle"></a></div></div></div></div></nav><div><div class="container"><h1 class="my-3 text-center">Create new test</h1><form class="mb-3"><div class="mb-3 p-3"><div class="form-group"><label class="h3 form-label" style="border-bottom: 4px solid rgb(0, 151, 167);">Title</label><input required="" name="title" type="text" class="form-control" value=""></div><div class="form-group"><label class="h3 form-label">Description</label><textarea required="" name="description" rows="3" class="form-control"></textarea></div><div class="form-row"><div class="form-group col-md-6"><label class="h5 form-label">Duration (minutes)</label><input required="" name="time_interval" type="number" class="form-control" value="30"></div><div class="form-group col-md-6"><label class="h5 form-label">Days between attempts</label><input required="" name="time_between_attempts" type="number" class="form-control" value="30"></div></div></div><div class="mb-3"><h2 class="bg-info text-white p-3"><span>Questions:</span></h2><div class="border border-info shadow p-3 mb-3 rounded"><div class="d-flex justify-content-between align-items-center"><span class="h3 mb-0">Question 1</span><button type="button" class="btn d-flex align-items-center justify-content-center"><span class="material-icons text-danger h3 m-0">clear</span></button></div><div class="form-group"><label class="form-label">Question text:</label><input required="" name="text" type="text" class="form-control" value=""></div><div class="form-group"><label class="form-label">Code</label><textarea name="code" rows="3" class="form-control" style="white-space: pre-wrap;"></textarea></div><div class="form-row"><div class="form-group col-md-6"><label class="form-label">Question type</label><select name="type" class="form-control"><option value="0">Single answer</option><option value="1">Multiple answer</option></select></div><div class="form-group col-md-6"><label class="form-label">Programming language</label><select name="progLang" class="form-control"><option value="html">html</option><option value="css">css</option><option value="js">js</option><option value="jsx">jsx</option></select></div></div><h2 class="bg-warning text-white p-3">Answers:</h2><div><div class="border border-warning p-3 mb-3"><div class="d-flex justify-content-between align-items-center"><span class="h3 mb-0">Answer 1</span><button type="button" class="btn d-flex align-items-center justify-content-center"><span class="material-icons text-danger h3 m-0">clear</span></button></div><div class="form-group"><label class="form-label">Answer text</label><input required="" name="text" type="text" class="form-control" value=""></div><div class="form-group"><label class="form-label">Is correct</label><select required="" name="is_correct" class="form-control"><option value="0">False</option><option value="1">True</option></select></div></div></div><button type="button" class="btn btn-secondary">Add answer</button></div><button type="button" class="btn btn-secondary">Add question</button></div><button type="submit" class="btn btn-primary">Submit</button></form></div></div></div></div>',
      type: 'radio',
      progLang: 'html',
      answers: [
        {
          id: '_ssxzbn5k8mvj',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          is_correct: '1',
        },
        {
          id: '_sbn5k8mvj',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit2222222222?',
          is_correct: '0',
        },
      ],
    },
    {
      id: '5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, voluptate.',
      code: '<div id="root"><div class="App"><nav class="sc-AxirZ lkKdir navbar navbar-expand-lg navbar-light bg-light"><div class="container"><a class="font-weight-bold navbar-brand" href="/">Skill-test</a><button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button><div class="navbar-collapse collapse" id="basic-navbar-nav"><div class="mr-auto navbar-nav"><a href="/catalog" class="nav-link">Catalog</a><a href="/test/score" class="nav-link">My results</a><a href="/test/create" class="nav-link">Create test</a></div><div class="navbar-nav"><div class="dropdown nav-item"><a aria-haspopup="true" aria-expanded="false" href="#" class="dropdown-toggle nav-link" role="button"><img src="https://source.unsplash.com/random" class="sc-AxjAm iFXkSX rounded-circle"></a></div></div></div></div></nav><div><div class="container"><h1 class="my-3 text-center">Create new test</h1><form class="mb-3"><div class="mb-3 p-3"><div class="form-group"><label class="h3 form-label" style="border-bottom: 4px solid rgb(0, 151, 167);">Title</label><input required="" name="title" type="text" class="form-control" value=""></div><div class="form-group"><label class="h3 form-label">Description</label><textarea required="" name="description" rows="3" class="form-control"></textarea></div><div class="form-row"><div class="form-group col-md-6"><label class="h5 form-label">Duration (minutes)</label><input required="" name="time_interval" type="number" class="form-control" value="30"></div><div class="form-group col-md-6"><label class="h5 form-label">Days between attempts</label><input required="" name="time_between_attempts" type="number" class="form-control" value="30"></div></div></div><div class="mb-3"><h2 class="bg-info text-white p-3"><span>Questions:</span></h2><div class="border border-info shadow p-3 mb-3 rounded"><div class="d-flex justify-content-between align-items-center"><span class="h3 mb-0">Question 1</span><button type="button" class="btn d-flex align-items-center justify-content-center"><span class="material-icons text-danger h3 m-0">clear</span></button></div><div class="form-group"><label class="form-label">Question text:</label><input required="" name="text" type="text" class="form-control" value=""></div><div class="form-group"><label class="form-label">Code</label><textarea name="code" rows="3" class="form-control" style="white-space: pre-wrap;"></textarea></div><div class="form-row"><div class="form-group col-md-6"><label class="form-label">Question type</label><select name="type" class="form-control"><option value="0">Single answer</option><option value="1">Multiple answer</option></select></div><div class="form-group col-md-6"><label class="form-label">Programming language</label><select name="progLang" class="form-control"><option value="html">html</option><option value="css">css</option><option value="js">js</option><option value="jsx">jsx</option></select></div></div><h2 class="bg-warning text-white p-3">Answers:</h2><div><div class="border border-warning p-3 mb-3"><div class="d-flex justify-content-between align-items-center"><span class="h3 mb-0">Answer 1</span><button type="button" class="btn d-flex align-items-center justify-content-center"><span class="material-icons text-danger h3 m-0">clear</span></button></div><div class="form-group"><label class="form-label">Answer text</label><input required="" name="text" type="text" class="form-control" value=""></div><div class="form-group"><label class="form-label">Is correct</label><select required="" name="is_correct" class="form-control"><option value="0">False</option><option value="1">True</option></select></div></div></div><button type="button" class="btn btn-secondary">Add answer</button></div><button type="button" class="btn btn-secondary">Add question</button></div><button type="submit" class="btn btn-primary">Submit</button></form></div></div></div></div>',
      type: 'radio',
      progLang: 'html',
      answers: [
        {
          id: '_sbncsz5k8mvj',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          is_correct: '1',
        },
        {
          id: '_sbn5k8mvj',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit2222222222?',
          is_correct: '0',
        },
      ],
    },
  ]
};

const testSet = test => ({
  type: TEST_SET,
  payload: test
});

const testStartLoading = bool => ({
  type: TEST_START_LOADING,
  payload: bool
});

const testStartError = error => ({
  type: TEST_START_ERROR,
  payload: error
});

export const setSelectedAnswers = answers => {
  console.log(answers);
  return {
    type: SET_SELECTED_ANSWERS,
    payload: answers
  };
};

const testSubmitLoading = bool => ({
  type: TEST_SUBMIT_LOADING,
  payload: bool
});

const testSubmitError = error => ({
  type: TEST_SUBMIT_ERROR,
  payload: error
});

const testCancelLoading = bool => ({
  type: TEST_CANCEL_LOADING,
  payload: bool
});

const testCancelError = error => ({
  type: TEST_CANCEL_ERROR,
  payload: error
});

export const startTest = (test_id, history) => {
  return (dispatch, getState) => {
    dispatch(testStartLoading(true));
    api({
      method: 'post',
      url: `/start-test/?test_id=${test_id}`,
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem("access_token")}`
      },
    })
      .then((response1) => {
        api.get(`/full-test/?id=${response1.data.id}`, {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Token ${localStorage.getItem("access_token")}`
          },
        })
          .then((response) => {
            dispatch(testSet({...response.data, created_at: response1.data.created_at, test_taken_id: response1.data.id}));
            console.log(getState().test.test);
            history.push('/test');
          })
          .catch((error) => {
            testStartError('Something went wrong. Please try again');
          })
          .finally(() => {
            dispatch(testStartLoading(false));
          })
      })
      .catch((error) => {
        testStartError('Something went wrong. Please try again');
      })
      .finally(() => {
        dispatch(testStartLoading(false));
      })
  }
};

export const submitTest = (history) => {
  return (dispatch, getState) => {
    dispatch(testSubmitLoading(true));
    let ansArr = Object.keys(getState().test.selectedAnswers).reduce(function(res, v) {
      return res.concat(getState().test.selectedAnswers[v]);
    }, []);
    ansArr = ansArr.join(" ");
    api({
      method: 'post',
      url: `/submit-test/`,
      params: {
        test_taken_id: getState().test.test.test_taken_id,
        answers: ansArr
      },
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem("access_token")}`
      },
    })
      .then((response) => {
        history.push(`/result/${getState().test.test.test_taken_id}`);
        dispatch(testSet(null));
        dispatch(setSelectedAnswers({}));
        dispatch(testCancelLoading(false));
      })
      .catch((error) => {
        testSubmitError('Something went wrong. Please try again');
      })
      .finally(() => {
        dispatch(testSubmitLoading(false));
      })
  }
};

export const cancelTest = (history) => {
  return (dispatch, getState) => {
    dispatch(testCancelLoading(true));
    history.push(`/result/${getState().test.test.test_taken_id}`);
    dispatch(testSet(null));
    dispatch(setSelectedAnswers({}));
    dispatch(testCancelLoading(false));
  }
};
