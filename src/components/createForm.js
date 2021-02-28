import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

/** 
*@author
*@function CreateForm
*/

const CreateForm = (props) => {


    return(
        <Container>
        <Form>
            <Form.Group>
                <Form.Label>Título</Form.Label>
                <Form.Control onChange={this.changeHandler} type="text" placeholder="título del post"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Contenido</Form.Label>
                <Form.Control type="text" placeholder="contenido del post"/>
            </Form.Group>
            <Button>Enviar</Button>
        </Form>
        </Container>
 
    )
}

export default CreateForm;