import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function CreateStudent(){
    const[name, setName]= useState('')
    const[email, setEmail]= useState('')
    const Navigate= useNavigate();

    function HandleSubmmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/create', {name, email})
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
}export default CreateStudent;