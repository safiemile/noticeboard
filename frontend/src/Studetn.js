import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




function Studetn() {
    const [student, setStudent] = useState([])
    useEffect(()=> {
axios.get('http://localhost:8081/student')
.then(res => setStudent(res.data))
.catch(err =>alert(err));
}, [])

    const  HandleDelete = async (id) =>{
try{
    await axios.delete('http://localhost:8081/remove/'+id)
    window.location.reload();
}catch(err){
    console.log(err);
}
    }
    return(

        <div className='d-flex vh-100  bg-primary justify-content-center'>
            <div className='w-50 bg-white rounded p-3'>
<Link to="/Createnew" className='btn btn-success'>ADD</Link>
<table className='table'>
    <thead>
       <tr> 
        <th>Names</th>
        <th>Email</th>
        <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {
           student.map((data, i)=>(
                <tr key={i}>
                    <td>{data.Name}</td>
                    <td>{data.Email}</td>
                   <td> 
                    <Link to={`update/${data.Id}`}  className='btn btn-primary me-2'>Update</Link>
                    <button onClick={e => HandleDelete(data.Id)} className='btn btn-danger ms-2'>delete</button>

                   </td>
                   
                    
                </tr>
            ))
        }     
    </tbody>
</table>
            </div>
</div>)};export default Studetn;   