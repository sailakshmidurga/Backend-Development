import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import UpdateUser from "./UpdateUser";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:9000/get-data");
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:9000/delete-data/${id}`);
    toast.success("Deleted");
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {/* ✅ NO USERS STATE */}
      {users.length === 0 ? (
        <div className="empty">
          <h2>No Users Found</h2>
          <p>Please add a user to see cards here.</p>
        </div>
      ) : (
        <div className="cards-container">
          {users.map((u) => (
            <div className="card" key={u._id}>
              <h3>{u.name}</h3>
              <p>Age: {u.age}</p>
              <p>Email: {u.email}</p>
              <p>Mobile: {u.mobile}</p>

              <div className="btns">
                <button
                  className="update"
                  onClick={() => setSelectedUser(u)}
                >
                  Update
                </button>
                <button
                  className="delete"
                  onClick={() => deleteUser(u._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* UPDATE MODAL */}
      {selectedUser && (
        <UpdateUser
          user={selectedUser}
          close={() => setSelectedUser(null)}
          refresh={fetchUsers}
        />
      )}
    </>
  );
}

export default Users;
