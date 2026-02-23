import React, { useState } from "react";
import axios from 'axios';

const SimpleForm = () => {
const [id,setId] = useState("");
const [name,setName] = useState("");
const [email,setEmail] = useState("");

const setData = async(e) => {
  e.preventDefault();
 const Result = await axios.post("http://localhost:9000/set-data",{
  id,
  name,
  email,
 });
 console.log(Result.data);
};
const getData = async (e) => {
  e.preventDefault();
  const res = await axios.get("http://localhost:9000/get-data");
  console.log("GET:", res.data);
};

const updateData = async (e) => {
  e.preventDefault();
  const res = await axios.put(
    `http://localhost:9000/update-data/${id}`,
    { name, email }
  );
  console.log("UPDATE:", res.data);
};

const deleteData = async (e) => {
  e.preventDefault();
  const res = await axios.delete(
    `http://localhost:9000/delete-data/${id}`
  );
  console.log("DELETE:", res.data);
};

  return(
    <>
    <div>
      <form action="">

         <div>
          <input placeholder="id" type="number" value={id} onChange={(e)=>setId(e.target.value)}/> <br />
        </div>

        <div>
           <input placeholder="name" type="text" value={name} onChange={(e)=>setName(e.target.value)}/> <br />

        </div>

         <div>
          <input placeholder="email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />

        </div>

        <div>
          <button  type="button" className="setData" onClick={setData}>setData</button>
          <button type="button" className="getData" onClick={getData}>getData</button>
          <button type="button" className="updateData" onClick={updateData}>updateData</button>
          <button type="button" className="deleteData" onClick={deleteData}>deleteData</button>
        </div>

      </form>
    </div>
    </>
  );
};
export default SimpleForm;
