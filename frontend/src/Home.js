import React, {useState } from "react";
//import axios from "axios";
//import { Link } from "react-router-dom";
import './component/sass/PDFViewer.css'

import { Viewer,  Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
//import wk from  './worker.js';



function Home() {
    
    const[pdfFile, setPDFFile] = useState(null)
    const [viewPdf , setViewPdf] = useState(null)
    const fileType = ['application/pdf']
const Handlechange = (e) => {
    let selectedFile = e.target.files[0]
    if(selectedFile){
        
        if(selectedFile && fileType.includes(selectedFile.type)){
            let reader = new FileReader()
            reader.readAsDataURL(selectedFile)
                reader.onload = (e) => {
                    setPDFFile(e.target.result)

               }
        }
        else{
            setPDFFile(null)
        }
    }
    else{
        console.log("please select file")
    }
}
const Handlesubmit = (e) => {
    e.preventDefault()
    if(pdfFile !== null){
       setViewPdf(pdfFile)
    
    }
    else{
        setViewPdf(null)
        }
}
const newplugin= defaultLayoutPlugin()
    return(
        <div className="container">
            
<form onSubmit={Handlesubmit}>
    <input type="file" onChange={Handlechange} />
    <button type="submit">View PDF</button>
    
</form>
<h2>view Pdf</h2>
<div className='pdf-container'>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        {viewPdf && <>
                <Viewer fileUrl={viewPdf} plugins={[newplugin]}/>
                
       </> }
        {!viewPdf && <>No PDF</>}
        

    </Worker>
            </div>
            </div>  
        

    )

    
};export default Home;  