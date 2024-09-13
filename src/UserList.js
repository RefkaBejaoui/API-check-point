import { useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "./App.css" 

const UserList = ({ listOfUSer, setListOfUSer }) => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        return setListOfUSer(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h2>
        the list is composed by{" "}
        <span style={{ color: "red", fontSize: 40 }}>{listOfUSer.length}</span>{" "}
        users, witch are :{" "}
      </h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr >
            <th >Id</th>
            <th >Name</th>
            <th >Username</th>
            <th>Address</th>
            <th>Company</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Web site</th>
          </tr>
        </thead>

        <tbody>
          {listOfUSer.map((u) => (
            <tr>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.username}</td>
              <td>{u.address.city}</td>
              <td>{u.company.bs}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.website}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default UserList;
