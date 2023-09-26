
// import { Link, useNavigate } from 'react-router-dom'

// import SelectCountry from '../../../Layouts/popovers/selectCountry/SelectCountry';
import { Link, useNavigate } from "react-router-dom";
import styles from "../Auth.module.css"
import { SyntheticEvent, useState } from "react";
import { signUpApi } from "../../../utils/api";
import { useAlert } from "../../../hooks/useAlert";








const Signup = () => {
  const navigate = useNavigate()
  const {alert} =useAlert()
  const [signUpData, setSignUpData] =useState({
    username:"",
    email:"",
    password:"",
    country:""
  })

  const handleSignUpChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = event.target;
    setSignUpData(prev=>{
      return {...prev, [name]:value}
    })
    console.log(signUpData)
  }

  const handleSignUp = async(event:SyntheticEvent)=>{
    event.preventDefault()
    try {
      const {data, status} =await signUpApi(signUpData)
      console.log(data)
      if(status===200){
        alert("success","confirmation link is sent to your email")
        navigate("/account/confirmation_email_sent")
      }else{
        throw new Error(data.message)
      }
      
    } catch (error:any) {
      console.log(error.messages)
      alert("error",error?.response?.data.message??"Something went wrong , Try again")
      
      
    }
   }
  return (
    <div className={styles.AuthWrapper}>
        <img onClick={()=>navigate("/")}  src="/images/logo.png" className={styles.logo}/>
      <div className={styles.login_main_box}>
        {/* <img
          draggable={false}
          className={styles.logo_img}
          src="/images/logo.jpg"
          alt="logo"
        /> */}
        <div className={styles.login_welcome_text}>
          {/* <h5 className='welcome_back_text'>Welcome  😋</h5>
        <p className='welcome_secondary_text'>Get started with Debatosour now !! </p> */}
        </div>
        {/* <div className={styles.login_with_google_box}  >
        <img src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
          <p>Continue with Google</p>
        </div> */}
        <div className={styles.sign_in_with_email_division}>
          <div className={styles.left_hr}></div>
          <p> sign up with email</p>
          <div className={styles.right_hr}></div>
        </div>
      
        <form className={styles.form_wrapper} onSubmit={handleSignUp}>
            <div className={styles.auth_input_item}>
              <input 
                className={styles.input_element}
                onChange={handleSignUpChange}
                type="text"
                placeholder="Username"
                name="username"
              />
            </div>
       
          <div className={styles.single_item}>
            <div className={styles.auth_input_item}>
              <input 
                className={styles.input_element}
                type="email"
                onChange={handleSignUpChange}
                placeholder="Enter your email address"
                name="email"
               
              />
            </div>
            </div>
            <div className={styles.single_item}>
            <div className={styles.auth_input_item}>
              <input 
              
                className={styles.input_element}
                onChange={handleSignUpChange}
                type="text"
                placeholder="country"
                name="country"
               
              />
            </div>
          
          </div>


      
        
            <div className={styles.auth_input_item}>
              <input 
              
                className={styles.input_element}
                onChange={handleSignUpChange}
              
                type="password"
                placeholder="Enter your password"
                name="password"
               
              />
            </div>
            <div className={styles.auth_input_item}>
              <input 
              

 
                className={styles.input_element}
                onChange={handleSignUpChange}
                type="password"
                placeholder="Confirm password"
             
              />
          </div>
   

          <button className={styles.login_button} type="submit" >
            Sign up
          </button>
          <Link to="/login">
            <p className={styles.no_account_text}>Already have account </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup