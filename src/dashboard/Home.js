import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../component/Header";

const Home = () => {
    const [data, setdata] = useState([]);
    const [allCheck, setAllCheck] = useState(false);
    function getData(){
        axios.get("https://reqres.in/api/users?page=2").then((Response)=>{
           // console.log("res",Response.data.data)
            setdata(Response.data.data)
        }).catch((Error)=>{
            console.log("error",Error)
        })
    }
    console.log("Data",data)

    useEffect(() => {
        getData()
    }, []);
  function allChecked(e){
    let listItem = data;
   // console.log("listData",listItem)
   listItem.map((user) =>{
    user.selected="false";
    user.selected = e.target.checked;
    setAllCheck(e.target.checked)
    setdata(listItem)
    //console.log("user",user)
   })
  } 
  function handleChange(e,item){
    let listItem=data;
    let updateUser= listItem.map((user)=>{
      //console.log("user",user)
      if(user.id === item.id){
        user.selected = e.target.checked;
      }
      return user;
    })
    console.log("update",updateUser)
    const totalItems = data.length;
    const totalCheckedItems = listItem.filter((e)=> e.selected).length;
    setAllCheck(totalItems === totalCheckedItems);
    setdata(updateUser)
  } 

  return (
    <>
    <Header />
      <table>
        <thead>
          <tr>
            <th>
              {" "}
              <input type="checkbox"
              checked={allCheck}
              className="checkbox"
              onChange = {(e)=>allChecked(e)}
              />
            </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((value, key) => {
              return (
                <tr key={key}>
                  <td>
                    <input type="checkbox" 
                    checked={value.selected}
                    className="checkbox"
                    id={value.id}
                    onChange = {(e)=>handleChange(e,value)}
                    /> {value.id}
                  </td>
                  <td>{value.first_name}</td>
                  <td>{value.last_name}</td>
                  <td>{value.email}</td>
                  <td>
                    <img src={value.avatar} className="profile-img" alt="" />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default Home;
