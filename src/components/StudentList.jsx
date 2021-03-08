import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";

const StudentList = (props) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5500/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students !== null
            ? students.map((student, index) => {
                return <StudentTableRow obj={student} key={index} />;
              })
            : null}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentList;
