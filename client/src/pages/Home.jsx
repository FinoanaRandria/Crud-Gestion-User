import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@material-tailwind/react";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3002/users");
    if (response.status === 200) {
      setData(response.data);
    }
  };

 const onDeleteUser = async(id) =>{
    
    const response = await axios.delete(`http://localhost:3002/user/${id}`)
    if(response.status === 200){
      /*  window.location.reload */
      toast.success(response.data)
       getUsers();
    }
 }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="mt-[150px] flex justify-center h-auto   ">
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <th className="px-10" cla scope="row">{index + 1}</th>
                <td className="px-10">{item.name}</td>
                <td className="px-10">{item.email}</td>
                <td className="px-10">{item.contact}</td>
                <td className="px-10">
                  <Link to={`/update/${item.id}`}>
                  <Button  className="m-1" color="amber">Update</Button>
                  </Link>
                  <Button onClick={()=>onDeleteUser(item.id)} className="m-1"  color="red">Delete</Button>
                  <Link to={`/view/${item.id}`}>
                  <Button className="m-1"  color="green">View</Button>
                  </Link>
                  
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
