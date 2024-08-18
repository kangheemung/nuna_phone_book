// Update the import statements to import 'Form' and 'Button' directly from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" placeholder="이름을 입력해주세요" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>연락처</Form.Label>
                    <Form.Control type="number" placeholder="연락처를 입력해주세요" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    추가
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;
