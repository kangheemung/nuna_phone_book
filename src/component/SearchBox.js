import React, { useState } from 'react';
import{ Row, Col, Form, Button} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";

const SearchBox = () => {
 const [keyword, setKeyword] = useState("");
 const dispatch = useDispatch();
 const contacts = useSelector((state) => state.contactList.completeContactList); 
 console.log("All contacts:", contacts);
 const searchByName = (e) =>{
  e.preventDefault();
  dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  setKeyword('');
};




   return (
    <Form onSubmit = { searchByName } className = "search-form">
      <Row>
         <div>검색 </div>
        <Col lg={11}>
          <Form.Control
            type="text"
            placeholder="검색해주세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
            <Button type="submit" className="btn btn-light">검색</Button>
        </Col>
      </Row>
   </Form>
  );
};

export default SearchBox
