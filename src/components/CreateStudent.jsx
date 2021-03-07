import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const CreateStudent = (props) => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ rollno, setRollno ] = useState('')


  const onChangeStudentName = (e) => {
    setName(e.target.value)
  }

  const onChangeStudentEmail = (e) => {
    setEmail(e.target.value)
  }
  
  const onChangeStudentRollno = (e) => {
    setRollno(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    console.log(`Student successfully created!`);
    console.log(`Name: ${this.state.name}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Roll no: ${this.state.rollno}`);

    setName('')
    setEmail('')
    setRollno('')
  }


  return(
    <div className="form-wrapper">
    <Form>
      <Form.Group controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={onChangeStudentName} />
      </Form.Group>

      <Form.Group controlId="Email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={onChangeStudentEmail} />
      </Form.Group>

      <Form.Group controlId="Name">
        <Form.Label>Roll No</Form.Label>
        <Form.Control type="text" value={rollno} onChange={onChangeStudentRollno} />
      </Form.Group>

      <Button variant="primary" size="lg" block="block" type="submit" onSubmit={onSubmit}>
        Create Student
      </Button>
    </Form>
  </div>
  )
}


export default CreateStudent