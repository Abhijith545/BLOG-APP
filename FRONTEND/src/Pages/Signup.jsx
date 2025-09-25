import React, { useState } from 'react'
import Base from '../Components/Base'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const Signup = () => {
  const [] = useState();
  return (
    <Base>
      <Container>
        <Row className='mt-4'>
          <Col sm={{ size: 6, offset: 3 }}>
            <Card inverse color='dark'>
              <CardHeader><h3>Fill information to Register</h3></CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label htmlFor='name'>Enter name:</Label>
                    <Input type='text' placeholder='Enter name' id='name' />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor='email'>Enter Email:</Label>
                    <Input type='email' placeholder='Enter email' id='email' />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor='password'>Enter Password:</Label>
                    <Input type='password' placeholder='Enter password' id='password' />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor='about'>Enter Password:</Label>
                    <Input type='textarea' placeholder='Enter here' id='about' style={{ height: "100px" }} />
                  </FormGroup>
                  <Container className='text-center'>
                    <Button color='dark' className='me-2'>Register</Button>
                    <Button color='secondary' className='ms-2'>Reset</Button>
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