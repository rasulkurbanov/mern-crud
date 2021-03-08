import React from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const StudentTableRow = (props) => {
  const deleteStudent = () => {
    axios.delete('http://localhost:5500/students/delete-student/' + props.obj._id)
    .then((res) => {
        console.log('Student successfully deleted!')
    }).catch((error) => {
        console.log(error)
    })
  }



  return (
    <tr>
      <td>{props.obj.name}</td>
      <td>{props.obj.email}</td>
      <td>{props.obj.rollno}</td>
      <td>
        <Link className="edit-link" to={"/edit-student/" + props.obj._id}>
          Edit
        </Link>
        <Button onClick={deleteStudent} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default StudentTableRow