import React, {useEffect} from 'react';
import styled from 'styled-components';
import AchievementsImage from '../../img/undraw_order_confirmed_aaw7.svg';
import {useParams} from "react-router";

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
import {fetchPublicProfile} from '../../store/actions/userActions';

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

const PublicProfile = () => {
  const dispatch = useDispatch();
  const publicProfile = useSelector(state => state.user.publicProfile);
  const publicProfileError = useSelector(state => state.user.publicProfileError);
  const publicProfileLoading = useSelector(state => state.user.publicProfileLoading);

  let { id } = useParams();
  useEffect(() => {
    dispatch(fetchPublicProfile(id));
  }, []);
  console.log(publicProfile);
  return (
    <MainContainer data-testid='profile-page' className="bg-light position-relative">
      <BgTopImage src="https://source.unsplash.com/random"/>
      <Container>
        <div className="text-center py-5">
          {publicProfile ?
            <p className="h1 text-white">{publicProfile.username}</p>
            :
            <div className="text-center text-white">
              <Spinner animation="border"/>
            </div>
          }
          {publicProfile ?
            <p className="h3 text-white">{publicProfile.email}</p>
            :
            <div className="text-center text-white">
              <Spinner animation="border"/>
            </div>
          }
        </div>
      </Container>
      <Container className="pb-4 p-4">
        <div className="bg-white shadow p-4">
          <h2 className="text-center py-4">Achievements</h2>
          {publicProfileLoading && <div className="text-center my-3"><Spinner animation="border" /></div>}
          {publicProfileError &&
          <Alert variant="warning">
            resultListError
          </Alert>}
          {publicProfile && publicProfile.resultList.map(result => (
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
          {!!publicProfile && !publicProfile.resultList.length && <p className="text-center">No result yet</p>}
        </div>
      </Container>
    </MainContainer>
  );
};

export default PublicProfile;
