import React from 'react'
import{Row,Col,Form,Button} from "react-bootstrap";

const SearchBox = () => {
  return (
    <Row>
      <Col lg={10}>
        <Form.Control type="text" placeholder="name" />
      </Col>
      <Col lg={2}>
        <Button>찾기</Button>
      </Col>
      
    </Row>
  )
}

export default SearchBox
