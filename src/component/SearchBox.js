import React from 'react'
import{Row,Col,Form,Button} from "react-bootstrap";

const SearchBox = () => {
  return (
    <Row>
      <Col lg={2}>
        <Form.Control type="text" placeholder="name" />
      </Col>
      <Col lg={3}>
        <Button>찾기</Button>
      </Col>
    </Row>
  )
}

export default SearchBox
