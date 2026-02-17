import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchUsersTable = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getuser");
      setUsers(response.data.users);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    fetchUsers();
  },[users]);

  return (
    <div className="overflow-x-auto w-[50%] mx-auto my-20 shadow-sm">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id || index}>
              <th>{index + 1}</th>
              <td>{user.username}</td>
              <td>{user.message}</td>
              <td>
                <button className="btn btn-soft btn-info btn-sm">Edit</button>
                <button className="btn btn-soft btn-error btn-sm ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchUsersTable;
