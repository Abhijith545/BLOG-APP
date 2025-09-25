import React, { useEffect, useState } from 'react'
import Base from '../Components/Base'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const initialState = {
  name: '',
  email: '',
  password: '',
  about: ''
};

const Signup = () => {

  const [data, setData] = useState(initialState);
  const [error, setError] = useState({
    errors: {},
    isError: false
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value
    });
    console.log(event.target.id, `is changed`);
  }

  useEffect(() => {
    console.log(data);
  }, [data])

  const submitForm = (event) => {
    event.preventDefault();
    // validate
    
  }

  const resetData = () => {
    resetData(initialState);
  }

  return (
    <Base>
      <Container>
        <Row className='mt-4'>
          <Col sm={{ size: 6, offset: 3 }}>
            <Card inverse color='dark'>
              <CardHeader><h3>Fill information to Register</h3></CardHeader>
              <CardBody>
                <Form onSubmit={submitForm}>
                  <FormGroup>
                    <Label htmlFor='name'>Enter name:</Label>
                    <Input type='text' placeholder='Enter name' id='name' onChange={(e) => { handleChange(e) }} value={data.name} />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor='email'>Enter Email:</Label>
                    <Input type='email' placeholder='Enter email' id='email' onChange={(e) => { handleChange(e) }} value={data.email} />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor='password'>Enter Password:</Label>
                    <Input type='password' placeholder='Enter password' id='password' onChange={(e) => { handleChange(e) }} value={data.password} />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor='about'>Enter About:</Label>
                    <Input type='textarea' placeholder='Enter here' id='about' style={{ height: "100px" }} onChange={(e) => { handleChange(e) }} value={data.about} />
                  </FormGroup>
                  <Container className='text-center'>
                    <Button color='dark' className='me-2'>Register</Button>
                    <Button color='secondary' className='ms-2' onClick={resetData}>Reset</Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  )
}

export default Signup