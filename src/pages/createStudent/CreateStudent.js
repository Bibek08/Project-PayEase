import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { MDBFile } from "mdb-react-ui-kit";
import "../createStudent/CreateStudent.css";
import { useState } from "react";
import axios from "axios";
import "../../App.css";

function CreateStudent() {
  //useNavigate to switch between pages
  const navigate = useNavigate();

  const [post, setPost] = useState({
    Name: "",
    Gender: "",
    Roll: "",
    Email: "",
    GuardianName: "",
    Contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    //change the default post value to new input value using prev hook
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //send data to backend api and store it on databse after call of api
  const handleClick = (e) => {
    //to prevent form default behaviour OF FORM
    e.preventDefault();

    //use axios to communicate with backend
    axios
      .post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // after completion navigate to posts
    navigate("/Students");
  };

  return (
    <div className="formContainer ">
      <h2 className="heading">Create Student </h2>
      <Form className="studentForm">
        <Form.Group>
          <h1>Fill this form</h1>

          <label>Student Name</label>
          <Form.Control
            name="Name"
            placeholder="Name of Student"
            type="text"
            value={post.Name}
            onChange={handleChange}
          />
          {/* <Form.Control
            name="Gender"
            placeholder="Gender"
            type="text"
            value={post.Gender}
            onChange={handleChange}
          /> */}
          <label>Roll Number</label>
          <Form.Control
            name="Roll"
            placeholder="Roll number"
            type="number"
            value={post.Roll}
            onChange={handleChange}
          />
          <label>Email ID</label>
          <Form.Control
            name="Email"
            placeholder="Email"
            type="email"
            value={post.Email}
            onChange={handleChange}
          />
          <label>Guardian Name</label>
          <Form.Control
            name="GuardianName"
            placeholder="Guardian Name"
            value={post.GuardianName}
            onChange={handleChange}
          />
          <label>Contact</label>
          <Form.Control
            name="Contact"
            placeholder="Contact"
            type="number"
            value={post.Contact}
            onChange={handleChange}
          />

          <Button
            className="submitBtn"
            variant="outline-primary"
            onClick={handleClick}
          >
            Submit
          </Button>
          <Button
            style={{ marginLeft: "1rem" }}
            className="submitBtn"
            variant="outline-dark"
            onClick={() => navigate("/Students")}
          >
            Manage Student
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default CreateStudent;
