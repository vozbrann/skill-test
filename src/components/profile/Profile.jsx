import React from 'react';
import styled from 'styled-components';
import AchievementsImage from '../../img/undraw_order_confirmed_aaw7.svg';

import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

import UserAvatar from '../UserAvatar';

import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';

const MainContainer = styled.div`
  z-index: 10;
`;

const ScorePreview = styled(Link)`
  transition: all 0.3s ease;
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 2px 20px rgba(0,0,0,0.15);
  }
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

const Profile = () => {
  const user = useSelector(state => state.user.user);
  return (
    <MainContainer className="bg-light position-relative">
      <BgTopImage src="https://source.unsplash.com/random"/>
      <Container>
        <div className="text-center py-5">
          <UserAvatar className="mb-3" src="https://source.unsplash.com/random"
                      imageLarge/>
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
      <Container className="pb-5">
        <div className="bg-white shadow">
          <h2 className="text-center py-4 border-bottom">Achievements</h2>
          <Row className="p-4 pb-0">
            <Col md={5}>
              <Image className="px-5" fluid src={AchievementsImage}/>
            </Col>
            <Col className="mr-4">
              <ScorePreview to="score/1"
                            className="border d-flex justify-content-between align-items-center p-3 mb-3">
                <div className="d-flex">
                  <p className="h4 mb-0 mr-3">HTML</p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="mb-0 mr-3 text-secondary">17:52 18.05.2020</p>
                  <p className="h4 mb-0">74%</p>
                  <StyledBadge className="align-self-center ml-2" pill
                               variant="success">
                    published
                  </StyledBadge>
                </div>
              </ScorePreview>
              <ScorePreview to="score/1"
                            className="border d-flex justify-content-between align-items-center p-3 mb-3">
                <div className="d-flex">
                  <p className="h4 mb-0 mr-3">Relational Databases</p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="mb-0 mr-3 text-secondary">17:52 18.05.2020</p>
                  <p className="h4 mb-0">74%</p>
                  <StyledBadge className="align-self-center ml-2" pill
                               variant="success">
                    published
                  </StyledBadge>
                </div>
              </ScorePreview>
              <ScorePreview to="score/1"
                            className="border d-flex justify-content-between align-items-center p-3 mb-3">
                <div className="d-flex">
                  <p className="h4 mb-0 mr-3">HTML</p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="mb-0 mr-3 text-secondary">17:52 18.05.2020</p>
                  <p className="h4 mb-0">74%</p>
                  <StyledBadge className="align-self-center ml-2" pill
                               variant="success">
                    published
                  </StyledBadge>
                </div>
              </ScorePreview>
              <ScorePreview to="score/1"
                            className="border d-flex justify-content-between align-items-center p-3 mb-3">
                <div className="d-flex">
                  <p className="h4 mb-0 mr-3">HTML</p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="mb-0 mr-3 text-secondary">17:52 18.05.2020</p>
                  <p className="h4 mb-0">74%</p>
                  <StyledBadge className="align-self-center ml-2" pill
                               variant="secondary">
                    private
                  </StyledBadge>
                </div>
              </ScorePreview>
              <p className="text-right">
                <Link to="/userResults">View more...</Link>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </MainContainer>
  );
};

export default Profile;
