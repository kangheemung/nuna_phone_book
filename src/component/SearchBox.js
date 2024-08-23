import React, { useState } from 'react';
import{ Row, Col, Form, Button} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";

const SearchBox = () => {
 const [keyword, setKeyword] = useState("");
 const dispatch = useDispatch();
 const { contact } = useSelector((state) => state);
 const searchByName = (e) =>{
    e.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
    setKeyword('');
  };
   return (
    <Form onSubmit = { searchByName } className = "search-form">
      <Row>
        <Col lg={6}>
          <Form.Control
            type="text"
            placeholder="name"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col lg={3}>
        <button type="button" class="btn btn-light">찾기 </button>
        </Col>
      </Row>
   </Form>
  );
};

export default SearchBox
