import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function UpdateStudent(){
    const[name, setName]= useState('')
    const[email, setEmail]= useState('')
    const {id}= useParams();
    const Navigate= useNavigate();

    function HandleSubmmit(event){
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id, {name, email})
        .then(res => {
            console.log(res);
            Navigate('/');


        })
        .catch(err => console.log(err));

    }
    return(
<div>
    <div>
        <form>
        <input name="name" placeholder=" Enter Names" required onChange={e => setName(e.target.value)}></input>
        <input name="emails" placeholder="Enter Emails" required onChange={e => setEmail(e.target.value)}></input>
        <button onClick={HandleSubmmit}>Save</button>
        </form>
    </div>
</div>
    )
}export default UpdateStudent;