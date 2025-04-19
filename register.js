import React, { useState } from "react";
function Register(){

    const [isLogin,setIsLogin]= useState(true);
    return(
        
        <div className ="container">
            <div className ="form-container">
        <div className= "form-toggle">
            <button className ={isLogin ? 'active':""}onClick={()=> setIsLogin (true)}>Login</button>
            <button className ={!isLogin ? 'active':""}onClick={()=> setIsLogin (false)}>Register</button>
            </div>
            {isLogin ? <>
            <div className='form'>
             <h2>Login Form</h2>
             <input type ="email" placeholder ="Email"/>
             <input type ="password" placeholder="Password"/>
             <a href ="#">Forget password?</a>
             <button>Submit</button>
             <p>Not a Member
             < a href ="#" onClick ={()=> setIsLogin(false)}>Register now</a></p>
            </div> 
            </> : "" }
            
            
            {!isLogin ? <>
            <div className='form'>
             <h2>Register Form</h2>
             <input type ="name" placeholder ="Name"/>
             <input type ="email" placeholder ="Email"/>
             <input type ="password" placeholder="Password"/>
             <button>Submit</button>
             
            </div> 
            </> : "" }
            </div>
            </div>
    )

}

    export default Register;