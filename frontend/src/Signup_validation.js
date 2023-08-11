function validation(values){
    let error={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // means aleast one digit,one small letter,one capital letter  and miminum length 8
    const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ 
    if(values.email === ""){
        error.email= "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Invailid Email"
    }
    else {
        error.email = ""
    }

    if(values.password === ""){
        error.password= "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Incomplete Password (aleast one digit,one small letter,one capital letter  and miminum length 8)"
    }
    else {
        error.password = ""
        
    }
    /*if(values.password === values.confirmpassword)
        error.confirmpassword = ""
        else{
            error.confirmpassword = "Both password doesn't match"
        }*/
return error;
}
export default validation;