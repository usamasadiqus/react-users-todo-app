import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  const url = "http://localhost:3001/users";

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const { data } = await axios.get(url);
    setUsers(data.reverse());
  };

  const deleteUsers = async (id) => {
    await axios.delete(`${url}/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <div className="my-4">
          <table className="table table-hover">
            <thead>
              <tr className="text-center">
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone #</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                const { id, name, email, phone } = user;
                return (
                  <tr className="text-center" key={id}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>
                      <Link
                        to={`/users/${id}`}
                        className="btn btn-outline-success mr-2"
                      >
                        View
                      </Link>
                      <Link
                        to={`/users/edit/${id}`}
                        className="btn btn-outline-primary mr-2"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => deleteUsers(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
