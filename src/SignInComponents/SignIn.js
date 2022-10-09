import React, {useState} from 'react'
import './Login.css'
import logo from '../images/icon.png'
import { Link, useNavigate} from 'react-router-dom'
import { auth } from '../firebase'
import userEvent from '@testing-library/user-event'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate ();

  const signIn = e => {
      e.preventDefault()
      auth
        .signInWithEmailAndPassword(email, password)
        .then(auth=>{
          navigate('/')
        })
        .catch(error => alert(error.message))

  }
  const register = e =>{
    e.preventDefault()
    auth 
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //success
        console.log(auth)
        if (auth){
          navigate('/')
        }
      })
      .catch(error => alert(error.message))
  }


  return (
    <div className='login'>
      <Link to='/'>
        <img 
          className="loginLogo"
          src = {logo} 
        />
      </Link>

      <div className="loginContainer">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange=
          {e => setEmail(e.target.value)}/>
          
          <h5>Password</h5>
          <input type='password' value={password}
          onChange={e => setPassword(e.target.value)}/>


          <button type='submit' onClick={signIn}
          className='loginSignInButton'>Sign In</button>

        </form>
        <p>
          This is a fake website. By signing-in you agree to KICKs condition of Use & Sale.
          Please see our Privacy Notice. This is a fake website.
        </p>

        <button onClick={register}
         className='loginRegisterButton'>Create An Account</button>

      </div>
    </div>
   
  )
}

export default SignIn
