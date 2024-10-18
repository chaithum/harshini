import React, { useState } from "react";
import axios from "axios";
import { authActions } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import config from "../config";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';


  const SignUp=()=>{
    const navigate = useNavigate();
    const dispath = useDispatch();
    const [inputs, setInputs] = useState({
      full_name: "",
      email: "",
      password: "",
      confirm_password:""
    });
    const [isSignup, setIsSignup] = useState(false);
    if (inputs.password !== inputs.confirm_password) {
      alert("Passwords do not match");
      return;
  }
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
      
    
    }
    const sendRequest=async(type="signup")=>{
      console.log("inside send req");
      console.log(`${config.BASE_URL}/api/admin/${type}`);
      const res=await axios.post(`${config.BASE_URL}/api/admin/${type}`,{
          full_name:inputs.full_name,
          email:inputs.email,
          password:inputs.password,
          confirm_password:inputs.confirm_password
      })
      .catch((err)=>console.log(err));
      const data=await res.data
      console.log("return");
      console.log(data);
      return data
  }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      if (isSignup) {
        sendRequest("signup")
          .then((data) => localStorage.setItem("adminId", data.admin._id))
          .then(() => dispath(authActions.login()))
          .then(() => navigate("/login"));
     
      } else {
        sendRequest()
          .then((data) => localStorage.setItem("adminId", data.admin._id))
          .then(() => dispath(authActions.login()))
          .then(() => navigate("/signup"));
     
      }
    }
    return (
      <MDBContainer className="mt-5">
        <MDBCard>
          <MDBCardBody>
            <h3 className="text-center mb-4">Sign Up</h3>
            <form  onSubmit={handleSubmit}>
            <div className="mb-4">
                <MDBInput
                 onChange={handleChange}
                  label="Full Name"
                  id="full_name"
                  type="fullname"
                  className="form-control"
                  style={{ backgroundColor: '#f0f8ff' }} // Light background
                />
              </div>
               {/* Email Input */}
              <div className="mb-4">
                <MDBInput
                 onChange={handleChange}
                  label="Email address"
                  id="email"
                  type="email"
                  className="form-control"
                  style={{ backgroundColor: '#f0f8ff' }} // Light background
                />
              </div>
              <div className="mb-4">
                <MDBInput
                 onChange={handleChange}
                  label="Password"
                  id="formPassword"
                  type="password"
                  className="form-control"
                  style={{ backgroundColor: '#f0f8ff' }} // Light background
                />
              </div>
              <div className="mb-4">
                <MDBInput
                 onChange={handleChange}
                  label="Confirm Password"
                  id="Confirm Password"
                  type="password"
                  className="form-control"
                  style={{ backgroundColor: '#f0f8ff' }} // Light background
                />
              </div>
  
              {/* Checkbox */}
              <div className="mb-4">
                <MDBCheckbox
                 onChange={handleChange}
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="Remember me"
                  style={{ color: '#007bff' }} // Primary theme color
                />
                <a href="login">Login</a>
              </div>
  
              {/* Submit Button */}
              <MDBBtn color="primary" type="submit" block onClick={() => setIsSignup(!isSignup)}>
            SignUp
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );


  }
  export default SignUp





















// import React, { useState } from "react";
// import axios from "axios";
// import {
//   MDBContainer,
//   MDBInput,
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
// } from "mdb-react-ui-kit";

// import  {MDBAlert} from 'mdbreact';
// import config from "../config";

// const Signup = () => {
//   const [inputs, setInputs] = useState({
//     full_name:"",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
  
//   const [fieldErrors, setFieldErrors] = useState({
//     full_name:"",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
  
//   const [generalError, setGeneralError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setInputs((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
    
//     // Clear errors when the user types
//     setFieldErrors((prevErrors) => ({
//       ...prevErrors,
//       [id]: "",
//     }));
//     setGeneralError("");
//     setSuccessMessage("");
//   };

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validateFields = () => {
//     let errors = {};

//     if (!inputs.full_name) {
//       errors.full_name = "Email is required";
//     } else if (!isValidEmail(inputs.full_name)) {
//       errors.full_name = "Please enter a valid email address";
//     }

//     if (!inputs.email) {
//       errors.email = "Email is required";
//     } else if (!isValidEmail(inputs.email)) {
//       errors.email = "Please enter a valid email address";
//     }

//     if (!inputs.password) {
//       errors.password = "Password is required";
//     } else if (inputs.password.length < 6) {
//       errors.password = "Password must be at least 6 characters long";
//     }

//     if (!inputs.confirmPassword) {
//       errors.confirmPassword = "Confirm Password is required";
//     } else if (inputs.password !== inputs.confirmPassword) {
//       errors.confirmPassword = "Passwords do not match";
//     }

//     setFieldErrors(errors);
//     return Object.keys(errors).length === 0; 
//   };

//   const sendRequest = async () => {
//     try {
//       console.log("Sending request with data:", inputs); // Add this
//       const res = await axios.post(`${config.BASE_URL}/api/admin/signup`, {
//         email: inputs.email,
//         password: inputs.password,
//       });
//       const data = await res.data;
//       console.log("Response from server:", data); // Add this
//       return data;
//     } catch (err) {
//       console.error("Error sending request:", err);
//       setGeneralError("Something went wrong. Please try again.");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (validateFields()) {
//       const data = await sendRequest();
//       if (data && data.success) {
//         setSuccessMessage("Signup successful! Please check your email to verify.");
//         setInputs({
//           email: "",
//           password: "",
//           confirmPassword: "",
//         });
//       } else {
//         setGeneralError("Signup failed. Please try again.");
//       }
//     }
//   };

//   return (
//     <MDBContainer className="mt-5 d-flex justify-content-center">
//       <MDBCard style={{ maxWidth: "500px", width: "100%" }}>
//         <MDBCardBody>
//           <h3 className="text-center mb-4">Sign Up</h3>

//           {/* Success message */}
//           {successMessage && (
//             <MDBAlert color="success" className="text-center">
//               {successMessage}
//             </MDBAlert>
//           )}

//           {/* General error message */}
//           {generalError && (
//             <MDBAlert color="danger" className="text-center">
//               {generalError}
//             </MDBAlert>
//           )}

//           <form onSubmit={handleSubmit}>

//           <div className="mb-4">
//               <MDBInput
//                 onChange={handleChange}
//                 label="Full Name"
//                 id="full_name"
//                 type="Full Name"
//                 value={inputs.full_name}
//                 className="form-control"
//                 placeholder="Enter your Name"
//                 style={{ backgroundColor: "#f0f8ff" }} // Light background
//               />
//               {fieldErrors.email && (
//                 <div className="text-danger">{fieldErrors.full_name}</div>
//               )}
//             </div>



//             {/* Email Input */}
//             <div className="mb-4">
//               <MDBInput
//                 onChange={handleChange}
//                 label="Email address"
//                 id="email"
//                 type="email"
//                 value={inputs.email}
//                 className="form-control"
//                 placeholder="Enter your email"
//                 style={{ backgroundColor: "#f0f8ff" }} // Light background
//               />
//               {fieldErrors.email && (
//                 <div className="text-danger">{fieldErrors.email}</div>
//               )}
//             </div>

//             {/* Password Input */}
//             <div className="mb-4">
//               <MDBInput
//                 onChange={handleChange}
//                 label="Password"
//                 id="password"
//                 type="password"
//                 value={inputs.password}
//                 className="form-control"
//                 placeholder="Enter your password"
//                 style={{ backgroundColor: "#f0f8ff" }} // Light background
//               />
//               {fieldErrors.password && (
//                 <div className="text-danger">{fieldErrors.password}</div>
//               )}
//             </div>

//             {/* Confirm Password Input */}
//             <div className="mb-4">
//               <MDBInput
//                 onChange={handleChange}
//                 label="Confirm Password"
//                 id="confirmPassword"
//                 type="password"
//                 value={inputs.confirmPassword}
//                 className="form-control"
//                 placeholder="Confirm your password"
//                 style={{ backgroundColor: "#f0f8ff" }} // Light background
//               />
//               {fieldErrors.confirmPassword && (
//                 <div className="text-danger">{fieldErrors.confirmPassword}</div>
//               )}
//             </div>

//             {/* Submit Button */}
//             <div className="text-center">
//               <MDBBtn color="primary" type="submit" block >
//                 Sign Up
//               </MDBBtn>
//             </div>
//           </form>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBContainer>
//   );
// };

// export default Signup;









