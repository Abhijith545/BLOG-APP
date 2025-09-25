import React from 'react'
import Base from '../Components/Base'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const Login = () => {
  return (
    <Base>
      <Container>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <Card inverse color='dark'>
              <CardHeader>
                <h3>Login Here!!!</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label htmlFor='email'>Enter Email:</Label>
                    <Input id='email' type='email' placeholder='Enter email' />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor='password'>Enter Password:</Label>
                    <Input id='password' placeholder='Enter password' type='password' />
                  </FormGroup>
                  <Container className='text-center'>
                    <Button color='light' outline className='me-2'>Login</Button>
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

export default Login