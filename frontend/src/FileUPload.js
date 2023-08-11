import axios from "axios";
import React, { useEffect, useState } from "react";

function FileUPload(){
    const[file, setFile]= useState();
    const[images, setImages]= useState([]);
    const Handlefile = (e) => {
setFile(e.target.files[0])


    }
    const Handleupload = () =>{
          const formdata = new FormData();
          formdata.append('image', file);
          axios.post('http://localhost:8081/upload', formdata)
          .then(res =>{
            if(res.data === "Success"){
                console.log("Successed")  
            }else{
                console.log("Failed")
            }
          })
          .catch(err => console.log(err));
    }
    useEffect(() =>{
        axios.get('http://localhost:8081/displayimage')
        .then(res => {
            setImages(res.data)
        })
        .catch(err => console.log(err));
    
    },[])
    return(
        <div className="container">
            <input type="file" accept="image/jpg" onChange={Handlefile}/>
            <button on onClick={Handleupload}>Upload</button>
            <div className="image">
                {
                    images.map((data,index)=>
                        <img  key={index} className="image" src={`http://localhost:8081/images/`+data.name} alt=""/>
                    )
                }
                        
            </div>
            
        </div>
    )

}; export default FileUPload;