import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUser = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch("http://localhost:5000/users").then((res) => res.json()),
  });
  return (
    <div>
      <h1>Show all users</h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>Blue</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
