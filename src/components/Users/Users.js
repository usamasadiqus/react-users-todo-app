import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Users = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const loadUsers = async () => {
      const result = await axios.get(`http://localhost:3001/users/${id}`);
      setUser(result.data);
    };

    loadUsers();
  }, [id]);

  const { name, username, email, phone, website } = user;

  return (
    <div className="container py-4">
      <h1 className="display-4">User: {id} Details</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {name}</li>
        <li className="list-group-item">Username: {username}</li>
        <li className="list-group-item">Email: {email}</li>
        <li className="list-group-item">Phone: {phone}</li>
        <li className="list-group-item">Website: {website}</li>
      </ul>
      <Link className="btn btn-primary mt-4" to="/">
        Back
      </Link>
    </div>
  );
};

export default Users;
