import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ContactForm from './component/ContactForm';
import { Container, Row, Col } from 'react-bootstrap';
import ContactList from "./component/ContactList";

function App() {
  //왼쪽에는 연락처 찾기가 있다.
  //리스트에 유저 이름과 전화번호를 추가할수 있다.
  //리덕스 다운로드
  //리스트에 아이템이 몇개 있는지 보인다.
  //사용자가 유저를 이름 검색을로 찾을수 있다.
  //이름과 폰넘버를 입력하고 버튼을 누르면 연락처가 보임.
  //전화번호나 이름으로 검색창에 입력하고 버튼을 누르면
  return (
    <div className="App">
  <div className='top_head'>
    <h1 className='title'>Phone book</h1>
  </div>
  <Container className="container-background">
    <Row>
      <Col>
       <ContactForm />
      </Col>
      <Col>
      <ContactList />
      </Col>
    </Row>

  </Container>
    </div>
  );
}

export default App;
