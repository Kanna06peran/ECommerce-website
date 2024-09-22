import React, { useState } from 'react';
import "./CSS/LoginSignup.css"


function LoginSignup() {
    const [state,setState]=useState("Login")
    const[formData,setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const login = async()=>{
        console.log("Login Function Executed",formData)
        let responseData;
        await fetch("http://localhost:4000/login",{
        method:'POST',
        headers:{
            Accept:'application/form-data',
            'Content-Type':"application/json"

        },
        body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
        localStorage.setItem('auth-token',responseData.token)
        window.location.replace("/")
    }
    else{
        alert(responseData.errors)
    }
    }

    const signup = async()=>{
        console.log("Signup Function Executed",formData)
        let responseData;
        await fetch("http://localhost:4000/signup",{
        method:'POST',
        headers:{
            Accept:'application/form-data',
            'Content-Type':"application/json"

        },
        body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
        localStorage.setItem('auth-token',responseData.token)
        window.location.replace("/")
    }
    else{
        alert(responseData.errors)
    }
}

    const changleHandler = (e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }

    return(<div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>{state}</h1>
            <div className="loginsignup-fields">
              {state==="Sign Up"?<input type='text' name='username' value={FormData.username} onChange={changleHandler} placeholder=' Enter your name'></input>:<></>} 
              <input name='email' value={FormData.email} onChange={changleHandler} type='emial' placeholder='Enter your Email Address'></input>
              <input name='password' value={FormData.password} onChange={changleHandler} type='password' placeholder='Enter your password'></input> 
            </div>
            <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
            {state==="Sign Up"?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login Here!..</span></p>:
            <p className="loginsignup-login">Create an account? <span  onClick={()=>{setState("Login")}}>Click Here!..</span></p>}
            
            
            <div className="loginsignup-agree">
                <input type='checkbox' name='' id=''></input>
                <p>By continuing,I agree to the terms of use & privacy policy.</p>

            </div>
        </div>

    </div>)
    
}

export default LoginSignup;