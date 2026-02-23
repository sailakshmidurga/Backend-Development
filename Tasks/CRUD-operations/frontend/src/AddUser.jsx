import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";

function AddUser() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9000/add-data", form);
    toast.success("User Added Successfully 🎉");
    setTimeout(() => navigate("/users"), 1500);
  };

  return (
    <div className="container">
      <Toaster />
      <form className="form" onSubmit={submit}>
        <h2>Add User</h2>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="age" placeholder="Age" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="mobile" placeholder="Mobile" onChange={handleChange} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddUser;
