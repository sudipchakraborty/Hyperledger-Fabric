import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import{useState} from "react"
import apiClient from '../communication/apiClient'
import CardLogIn from '../components/CardLogIn'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ToDo = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('drsudip.robotics@gmail.com');
  const [password, setPassword] = useState('Sudip@123');

    ////////////////////////////////////////////////
    const handleLogin = async () => {
      try {
          const requestParams  = { email, password };
          const val={
            params: requestParams,
            headers:  
            {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer your-token-here'
            }
          }
          ///////////////////////////////////////////////

          navigate("/CardLogIn"); // Redirect to "AnotherPage" after 3 seconds

    } catch (error) {
      console.error(error.response?.data || 'Login error');
    //  alert('Invalid login credentials');
    }
  };



  //////////<LogIn>//////////////////////////////////////////////
  return (

    <div>
    <h1>ToDo</h1>
    {/* <CardLogIn/> */}
    {/* <label>Email</label> 

    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

    <button onClick={handleLogin}>USER LogIn</button> 
    <button onClick={handleLogin}>Admin LogIn</button> 
    
    
    <br></br>
    <br></br> */}

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleLogin}>Login</button>
  </div>


    // <div className='loginWrapper'>
    //   <div className='formWrapper'>
    //       <form onSubmit={handleSubmit}>
    //         <div className='inputWrapper'>
    //            <label htmlFor='name'>Name</label>
    //            <input type='text' id='name' value={user}
    //            onChange={(e)=>setUser(e.target.value)}
    //            ></input>
    //         </div>          
    //         <div className='inputWrapper'>
    //           <label htmlFor='email'>Email</label>
    //           <input 
    //           type='email' 
    //           id='email'
    //           value={email}
    //           onChange={(e)=>setEmail(e.target.value)}
    //           />          
    //         </div>
    //         <button type='submit'>Login</button>
    //     </form>
    //   </div>
   
    // </div>
  )
  ///////////< End of LogIn Interface>///////////////////////////




}

export default ToDo;
