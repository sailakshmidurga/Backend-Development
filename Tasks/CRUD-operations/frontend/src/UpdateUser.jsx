import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./UpdateUser.css";

function UpdateUser({ user, close, refresh }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    mobile: ""
  });

  // Prefill data when modal opens
  useEffect(() => {
    if (user) {
      setForm({
        name: user.name,
        age: user.age,
        email: user.email,
        mobile: user.mobile
      });
    }
  }, [user]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const update = async (e) => {
    e.preventDefault();
    await axios.patch(
      `http://localhost:9000/update-data/${user._id}`,
      form
    );
    toast.success("Updated Successfully ✅");
    close();
    refresh();
  };

  return (
    <div className="modal">
      <form className="update-form" onSubmit={update}>
        <h2>Update User</h2>

        <input name="name" value={form.name} onChange={handleChange} />
        <input name="age" value={form.age} onChange={handleChange} />
        <input name="email" value={form.email} onChange={handleChange} />
        <input name="mobile" value={form.mobile} onChange={handleChange} />

        <div className="btns">
          <button type="submit">Update</button>
          <button type="button" onClick={close}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
