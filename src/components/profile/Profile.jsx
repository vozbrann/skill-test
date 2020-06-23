import React, {useEffect} from 'react';
import styled from 'styled-components';
import AchievementsImage from '../../img/undraw_order_confirmed_aaw7.svg';

import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import UserAvatar from '../UserAvatar';

import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import {fetchUserResults} from '../../store/actions/testResultsActions';
import {logoutUser} from '../../store/actions/userActions';

import ImagePlaceholder from '../../img/img-placeholder.jpg'
import Skeleton from 'react-loading-skeleton';

const MainContainer = styled.div`
  z-index: 10;
`;

const BgTopImage = styled.img`
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 500px;
  object-fit: cover;
      filter: brightness(0.4);
`;

const StyledBadge = styled(Badge)`
  width: 70px;
`;

const UserAvatarContainer = styled.div`
  display: inline-block;
  position: relative;
  span {
    position: absolute;
    bottom: 5px;
    right: 0;
  }
`;

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const resultList = useSelector(state => state.testResults.userResultList);
  const resultListLoading = useSelector(state => state.testResults.userResultListLoading);
  const resultListError = useSelector(state => state.testResults.userResultListError);

  useEffect(() => {
    dispatch(fetchUserResults());
  }, []);
  return (
    <MainContainer data-testid='profile-page' className="bg-light position-relative">
      <BgTopImage src="https://source.unsplash.com/random"/>
      <Container>
        <div className="text-center py-5">
          {!!user &&
          <UserAvatarContainer>
            <UserAvatar className="mb-3" src={user.image || ImagePlaceholder}
                        imageLarge/>
            <span className="material-icons text-white">create</span>
          </UserAvatarContainer>
          }
          {user ?
            <p className="h1 text-white">{user.username}</p>
            :
            <div className="text-center text-white">
              <Spinner animation="border"/>
            </div>
          }
          {user ?
            <p className="h3 text-white">{user.email}</p>
            :
            <div className="text-center text-white">
              <Spinner animation="border"/>
            </div>
          }
        </div>
      </Container>
      <Container className="pb-4">
        <div className="bg-white shadow">
          <h2 className="text-center py-4 border-bottom">Achievements</h2>
          <Row className="p-4 pt-5 pb-0">
            <Col md={5}>
              <Image className="px-5" fluid src={AchievementsImage}/>
            </Col>
            <Col className="mr-4">
              {resultListLoading && <div className="text-center my-3"><Spinner animation="border" /></div>}
              {resultListError &&
              <Alert variant="warning">
                resultListError
              </Alert>}
              {resultList.map(result => (
                <div key={result.id} className="shadow d-flex justify-content-between align-items-center p-3 mb-3">
                  <div className="d-flex">
                    <p className="h4 mb-0 mr-3">{result.test.title}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 mr-3 text-secondary">{new Date(parseInt(result.created_at)).toLocaleDateString()}</p>
                    {result ? <p className="mb-0 h3">
                      { !result.canceled ? result.result+"%" :
                        "Canceled"
                      }
                    </p> : <Skeleton width={180}/>}
                    {!result.canceled && <>{result.public ?
                      <StyledBadge className="align-self-center ml-2" pill
                                   variant="success">
                        published
                      </StyledBadge> :
                      <StyledBadge className="align-self-center ml-2" pill
                                   variant="secondary">
                        private
                      </StyledBadge>
                    }
                    </>}
                  </div>
                </div>
              ))}
              {!resultList.length ? <p className="text-center">No result yet</p> :
                <p className="text-right">
                  <Link to="/myResults">View more...</Link>
                </p>
              }
            </Col>
          </Row>
        </div>
      </Container>

      <Container className="pb-5 ">
        <div className="bg-white shadow d-flex p-3">
          <Button variant="primary" className="d-flex mr-3"><span className="material-icons mr-2">email</span>Change email</Button>
          <Button variant="primary" className="d-flex mr-auto"><span className="material-icons mr-2">vpn_key</span>Change password</Button>
          <Button onClick={() => dispatch(logoutUser())} variant="secondary" className="d-flex"><span className="material-icons mr-2">exit_to_app</span>Logout</Button>
        </div>
      </Container>
    </MainContainer>
  );
};

export default Profile;
