import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import TestCard from '../TestCard';

const testList = [
  {
    id: 1,
    title: 'HTML',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
    img: 'https://www.positronx.io/wp-content/uploads/2019/06/space-in-html-00.jpg',
    duration: 60000,
    timeBetweenAttempts: 2592000000,
  },
  {
    id: 2,
    title: 'JavaScript',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
    img: 'https://blog.kdchang.cc/2016/12/21/javascript101-tutorial/javascript.png',
    duration: 1800000,
    timeBetweenAttempts: 2592000000,
  },
  {
    id: 3,
    title: 'CSS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
    img: 'https://s3.tproger.ru/uploads/2019/07/iconfinder_Css-File_377666-cover-1.jpg',
    duration: 300000,
    timeBetweenAttempts: 86400000,
  },
  {
    id: 4,
    title: 'React.js',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
    img: 'https://ru.reactjs.org/logo-og.png',
    duration: 300000,
    timeBetweenAttempts: 86400000,
  },
  {
    id: 5,
    title: 'Vue.js',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
    img: 'https://markup-ua.com/blog/wp-content/uploads/2017/09/vue.jpeg',
    duration: 300000,
    timeBetweenAttempts: 86400000,
  },
];

const Catalog = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredTestList = testList.filter(test => {
    return test.title.toLowerCase().includes(searchInput.toLowerCase())
  });

  return (
    <div>
      <Container fluid="lg" className="py-4">
        <h1 className="mb-4">Catalog</h1>
        <InputGroup className="mb-5 col-md-5 px-0">
          <InputGroup.Prepend>
            <InputGroup.Text
              className="d-flex align-items-center bg-white border-secondary">
              <span className="material-icons">search</span>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            className="border-secondary"
            placeholder="Test title..."
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </InputGroup>

        <Row className="mb-4">
          {filteredTestList.map(testInfo => (
            <Col key={testInfo.id} md={6} lg={4} className="mb-4">
              <TestCard testInfo={testInfo}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Catalog;
