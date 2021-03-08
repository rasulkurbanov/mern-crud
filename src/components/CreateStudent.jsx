import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const CreateStudent = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollno, setRollno] = useState("");

  const onChangeStudentName = (e) => {
    setName(e.target.value);
  };

  const onChangeStudentEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeStudentRollno = (e) => {
    setRollno(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    console.log('axios success')
    const studentObj = {
      name,
      email,
      rollno,
    };
    try {
      const response = await axios.post(
        "http://localhost:5500/students/create-student",
        studentObj
      );
      console.log(response.data);

      setName("");
      setEmail("");
      setRollno("");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-wrapper">
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={onChangeStudentName}
          />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={onChangeStudentEmail}
          />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control
            type="number"
            value={rollno}
            onChange={onChangeStudentRollno}
          />
        </Form.Group>

        <Button
          variant="primary"
          size="lg"
          block="block"
          type="submit"
        >
          Create Student
        </Button>
      </Form>
    </div>
  );
};

export default CreateStudent;
