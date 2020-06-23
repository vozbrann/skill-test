import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import { fetchUserList } from '../../store/actions/userActions';
import { useSelector, useDispatch } from 'react-redux'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const AllUsers = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.user.userList);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchUserList());
  }, []);

  return (
    <Container className="py-3">
      <h1 className="text-center">All users</h1>
      <Form className="mb-4" onSubmit={
        (e)=> {
          e.preventDefault();
          dispatch(fetchUserList(searchQuery))
        }
      }>
        <Form.Group>
          <Form.Label>Search by email or username:</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputGroup.Append>
              <Button type="submit" variant="outline-secondary" className="d-flex">
                <span className="material-icons">search</span>
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
      {userList.map(user => (
        <div key={user.id} className="shadow px-4 py-3 d-flex justify-content-between mb-3">
          <div>
            <p className="mb-0 h5">{user.username}</p>
            <p className="mb-0 text-primary"><a href={"mailto:"+user.email}>{user.email}</a></p>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default AllUsers;
