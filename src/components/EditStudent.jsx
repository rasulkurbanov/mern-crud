import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const EditStudent = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollno, setRollno] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://localhost:5500/students/edit-student/${props.match.params.id}`
      )
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setRollno(res.data.rollno);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.match.params.id]);

  const onChangeStudentName = (e) => {
    setName(e.target.value);
  };

  const onChangeStudentEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeStudentRollno = (e) => {
    setRollno(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const studentObj = {
      name,
      email,
      rollno,
    };
    axios
      .put(
        `http://localhost:5500/students/update-student/${props.match.params.id}`,
        studentObj
      )
      .then((response) => {
        console.log(response.data);
        console.log(`successfully updated`);
      })
      .catch((error) => console.log(error));

    //Redirect to Student List
    props.history.push("/student-list");
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
            type="text"
            value={rollno}
            onChange={onChangeStudentRollno}
          />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>
  );
}

export default EditStudent;
