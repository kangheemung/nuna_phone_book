// Update the import statements to import 'Form' and 'Button' directly from 'react-bootstrap'
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import{ useDispatch } from "react-redux";
const ContactForm = () => {
    const[name, setName] = useState('');
    const[phoneNumber, setPhoneNumber] = useState(0);
    const dispatch= useDispatch();
    const getName = (e) => {
       setName(e.target.value);
    }
    const addContact = (e)=>{
        e.preventDefault();

        if (!phoneNumber && !name) {
            alert("Please enter a name and phone number");
            return;
        } else if (!phoneNumber) {
            alert("Please enter a phone number");
            return;
        } else if (!name) {
            alert("Please enter a name");
            return;
        }
        dispatch({type:"ADD_CONTACT" ,payload: {name, phoneNumber}});
        setName('');
        setPhoneNumber('');
    };

    return (
        <div>
            <Form onSubmit={addContact}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text"
                    placeholder="이름을 입력해주세요"
                    value={name}
                    onChange={(e)=>setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>연락처</Form.Label>
                    <Form.Control type="number" placeholder="연락처를 입력해주세요"
                    value={phoneNumber === 0 ? '' : phoneNumber}
                    onChange={(e)=>setPhoneNumber(e.target.value)}  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => {
                    e.preventDefault();
                    addContact(e);
                    setName('');
                    setPhoneNumber(0);
                }}>
                    추가
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;
