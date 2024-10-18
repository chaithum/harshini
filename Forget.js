
// import React, { useState } from "react";
// import axios from "axios"; 
// import {
//   MDBContainer,
//   MDBInput,
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
// } from "mdb-react-ui-kit";
// import config from "../config";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

// const Forget = () => {
//   const [inputs, setInputs] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [fieldErrors, setFieldErrors] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [generalError, setGeneralError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.id]: e.target.value,
//     }));
    
//     setFieldErrors((prevErrors) => ({
//       ...prevErrors,
//       [e.target.id]: "",
//     }));
//     setGeneralError(""); 
//     setSuccess(""); 
//   };

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validateFields = () => {
//     let errors = {};

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
//       errors.confirmPassword = "Confirm password is required";
//     } else if (inputs.password !== inputs.confirmPassword) {
//       errors.confirmPassword = "Passwords do not match";
//     }

//     setFieldErrors(errors);
//     return Object.keys(errors).length === 0; // Return true if no errors
//   };

//   const sendRequest = async () => {
//     try {
//       const res = await axios.post(`${config.BASE_URL}/api/admin/`, {
//         email: inputs.email,
//         password: inputs.password,
//         confirmPassword: inputs.confirmPassword,
//       });

//       if (res.status === 200 && res.data.success) {
//         return res.data;
//       } else {
//         setGeneralError("Email not found. Please enter a registered email.");
//         return null;
//       }
//     } catch (err) {
//       console.error(err);
//       setGeneralError("Something went wrong. Please try again.");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateFields()) {
//       return;
//     }

//     // If all validations pass
//     const data = await sendRequest();
//     if (data) {
//       setSuccess("Password updated successfully!");
//     }
//   };

//   return (
//     <MDBContainer className="mt-5 d-flex justify-content-center">
//       <MDBCard style={{ maxWidth: "500px", width: "100%" }}>
//         <MDBCardBody>
//           <h3 className="text-center mb-4">Update Password</h3>

//           {/* General Error Display */}
//           {generalError && (
//             <div className="alert alert-danger text-center">
//               {generalError}
//             </div>
//           )}

//           {/* Success Message Display */}
//           {success && (
//             <div className="alert alert-success text-center">
//               {success}
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
//             {/* Email Input */}
//             <div className="mb-4">
//               <label>Email address</label>
//               <MDBInput required
//                 onChange={handleChange}
//                 id="email"
//                 type="email"
//                 value={inputs.email}
//                 className="form-control"
//                 placeholder="Enter your email"
//                 style={{ backgroundColor: "#f0f8ff" }}
//               />
//               {fieldErrors.email && (
//                 <div style={{ color: "red", fontSize: "0.9em" }}>
//                   * {fieldErrors.email}
//                 </div>
//               )}
//             </div>

//             {/* Password Input */}
//             <div className="mb-4">
//               <label>Password</label>
//               <MDBInput
//                 onChange={handleChange}
//                 id="password"
//                 type="password"
//                 value={inputs.password}
//                 className="form-control"
//                 placeholder="Enter your new password"
//                 style={{ backgroundColor: "#f0f8ff" }}
//               />
//               {fieldErrors.password && (
//                 <div style={{ color: "red", fontSize: "0.9em" }}>
//                   * {fieldErrors.password}
//                 </div>
//               )}
//             </div>

//             {/* Confirm Password Input */}
//             <div className="mb-4">
//               <label>Confirm Password</label>
//               <MDBInput
//                 onChange={handleChange}
//                 id="confirmPassword"
//                 type="password"
//                 value={inputs.confirmPassword}
//                 className="form-control"
//                 placeholder="Confirm your new password"
//                 style={{ backgroundColor: "#f0f8ff" }}
//               />
//               {fieldErrors.confirmPassword && (
//                 <div style={{ color: "red", fontSize: "0.9em" }}>
//                   * {fieldErrors.confirmPassword}
//                 </div>
//               )}
//             </div>

//             {/* Submit Button */}
//             <div className="text-center">
//               <button className="btn btn-primary" type="submit" block>
//                 Update Password
//               </button>
//             </div>
//           </form>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBContainer>
//   );
// };

// export default Forget;




// import React, { useState } from "react";
// import axios from "axios"; 
// import {
//   MDBContainer,
//   MDBInput,
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
// } from "mdb-react-ui-kit";
// import config from "../config";

// const Forget = () => {
//   const [inputs, setInputs] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [fieldErrors, setFieldErrors] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [generalError, setGeneralError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.id]: e.target.value,
//     }));
 
//     setFieldErrors((prevErrors) => ({
//       ...prevErrors,
//       [e.target.id]: "",
//     }));
//     setGeneralError(""); 
//     setSuccess(""); 
//   };

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validateFields = () => {
//     let errors = {};

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
//       errors.confirmPassword = "Confirm password is required";
//     } else if (inputs.password !== inputs.confirmPassword) {
//       errors.confirmPassword = "Passwords do not match";
//     }

//     setFieldErrors(errors);
//     return Object.keys(errors).length === 0; 
//   };

//   const sendRequest = async () => {
//     try {
//       const res = await axios.post(`${config.BASE_URL}/api/admin/`, {
//         email: inputs.email,
//         password: inputs.password,
//         confirmPassword: inputs.confirmPassword,
//       });

//       // Adjust this condition based on what the backend actually returns
//       if (res.status === 200 && res.data.success) {
//         return res.data;
//       } else if (res.status === 404) {
//         setGeneralError("Email not found. Please enter a registered email.");
//         return null;
//       } else {
//         setGeneralError("Something went wrong. Please try again.");
//         return null;
//       }
//     } 
//     catch (err) {
//       console.error(err);
//       if (err.response && err.response.status === 404) {
//         setGeneralError("Email not found. Please enter a registered email.");
//       } else {
//         setGeneralError("Something went wrong. Please try again.");
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateFields()) {
//       return;
//     }

//     // If all validations pass
//     const data = await sendRequest();
//     if (data) {
//       setSuccess("Password updated successfully!");
//     }
//   };

//   return (
//     <MDBContainer className="mt-5 d-flex justify-content-center">
//       <MDBCard style={{ maxWidth: "500px", width: "100%" }}>
//         <MDBCardBody>
//           <h3 className="text-center mb-4">Update Password</h3>

//           {/* General Error Display */}
//           {generalError && (
//             <div className="alert alert-danger text-center">
//               {generalError}
//             </div>
//           )}

//           {/* Success Message Display */}
//           {success && (
//             <div className="alert alert-success text-center">
//               {success}
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
//             {/* Email Input */}
//             <div className="mb-4">
//               <label>Email address</label>
//               <MDBInput
//                 onChange={handleChange}
//                 id="email"
//                 type="email"
//                 value={inputs.email}
//                 className="form-control"
//                 placeholder="Enter your email"
//                 style={{ backgroundColor: "#f0f8ff" }}
//               />
//               {fieldErrors.email && (
//                 <div style={{ color: "red", fontSize: "0.9em" }}>
//                   * {fieldErrors.email}
//                 </div>
//               )}
//             </div>

//             {/* Password Input */}
//             <div className="mb-4">
//               <label>Password</label>
//               <MDBInput
//                 onChange={handleChange}
//                 id="password"
//                 type="password"
//                 value={inputs.password}
//                 className="form-control"
//                 placeholder="Enter your new password"
//                 style={{ backgroundColor: "#f0f8ff" }}
//               />
//               {fieldErrors.password && (
//                 <div style={{ color: "red", fontSize: "0.9em" }}>
//                   * {fieldErrors.password}
//                 </div>
//               )}
//             </div>

//             {/* Confirm Password Input */}
//             <div className="mb-4">
//               <label>Confirm Password</label>
//               <MDBInput
//                 onChange={handleChange}
//                 id="confirmPassword"
//                 type="password"
//                 value={inputs.confirmPassword}
//                 className="form-control"
//                 placeholder="Confirm your new password"
//                 style={{ backgroundColor: "#f0f8ff" }}
//               />
//               {fieldErrors.confirmPassword && (
//                 <div style={{ color: "red", fontSize: "0.9em" }}>
//                   * {fieldErrors.confirmPassword}
//                 </div>
//               )}
//             </div>

//             {/* Submit Button */}
//             <div className="text-center">
//               <MDBBtn color="primary" type="submit" block>
//                 Update Password
//               </MDBBtn>
//             </div>
//           </form>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBContainer>
//   );
// };

// export default Forget;













import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
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


  const Forget=()=>{
        const navigate = useNavigate();
        const dispath = useDispatch();
        const [inputs, setInputs] = useState({
          email: "",
          password: "",
          confirm_password:""
        });
        const [isUpdate, setisUpdate] = useState(false);
    
        const handleChange = (e) => {
          setInputs((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
          }));
        }
        const sendRequest=async(type="forget")=>{
            try{
          console.log("inside send req");
          console.log(`${config.BASE_URL}/api/admin/${type}`);
          const res=await axios.post(`${config.BASE_URL}/api/admin/${type}`,{
              email:inputs.email,
              password:inputs.password,
              confirm_password:inputs.confirm_password
            
          })
          return res.data;
        }
        catch(err){
           console.log(err);
           return null;
        }
    }
        //   .catch((err)=>console.log(err));
        //   const data=await res.data
        //   console.log("return");
        //   console.log(data);
        //   return data

      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log(inputs);

        
            sendRequest("forget")
              .then((data) => {
              if(data && data.admin){ 
                localStorage.setItem("adminId", data.admin._id);
                dispath(authActions.login())
                
              }    
              return  navigate("/login");
        
    
        //    else {
        //     sendRequest()
        //     //   .then((data) => localStorage.setItem("adminId", data.admin._id))
        //     //   .then(() => dispath(authActions.login()))
        //     //   .then(() => navigate("/forget"));
        //     .then((data) => {
        //         if(data && data.admin){ 
        //           localStorage.setItem("adminId", data.admin._id);
        //           dispath(authActions.login())
        //           navigate("/login");
        //         }    
        //   })
        // }
        })
        }
        
    
    return (
        <MDBContainer className="mt-5">
          <MDBCard>
            <MDBCardBody>
              <h3 className="text-center mb-4">Update Pasword</h3>
              <form  onSubmit={handleSubmit} >
            
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
                    id="password"
                    type="password"
                    className="form-control"
                    style={{ backgroundColor: '#f0f8ff' }} // Light background
                  />
                </div>
                <div className="mb-4">
                  <MDBInput
                   onChange={handleChange}
                    label="Confirm Password"
                    id="confirm_password"
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
                </div>
    
                {/* Submit Button */}
                <MDBBtn color="primary" type="submit" block onClick={() => setisUpdate(!isUpdate)}>
              Update Password
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      );
  
  
  }
  export default Forget

















// import React, { useState } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { authActions } from "../store";
// import { useNavigate } from "react-router-dom";
// import config from "../config";
// import {
//     MDBContainer,
//     MDBInput,
//     MDBCheckbox,
//     MDBBtn,
//     MDBCard,
//     MDBCardBody
// } from 'mdb-react-ui-kit';
 
// const Forget = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [inputs, setInputs] = useState({
//         email: "",
//         password: "",
//         confirm_password: ""
//     });
//     const [isUpdated, setIsUpdated] = useState(false);  
 
//     const handleChange = (e) => {
//         setInputs((prevState) => ({
//             ...prevState,
//              [e.target.name]: e.target.value,  
//         }));
//     };
 
//     const sendRequest = async (type = "forget") => {
//         try {
//                const res = await axios.post(`${config.BASE_URL}/api/admin/${type}`, {
//                  email: inputs.email,
//                 password: inputs.password,
//                 confirm_password: inputs.confirm_password
//             });
//             const data = res.data;
//             console.log("Request sent, received data: ", data);
//             return data;
//         } catch (err) {
//             console.error("Error in request: ", err);
//             return null;
//         }
//     };
 
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log( inputs);
        
     
 
//         if (isUpdated) {
//             const data = await sendRequest("forget");
//             if (data && data.admin) {
//                 localStorage.setItem("adminId", data.admin._id);
//                 dispatch(authActions.login());
//                 navigate("/login");      
//             } 
            
             
//         }
//          else {
//             const data = await sendRequest();
//             if (data && data.admin) {
//                 localStorage.setItem("adminId", data.admin._id);
//                 dispatch(authActions.login());
//                 navigate("/forget"); 
//             } else {
//                 alert("Password update failed. Please try again.");
//             }
//         }
//     };
 
//     return (
//         <MDBContainer className="mt-5">
//             <MDBCard>
//                 <MDBCardBody>
//                     <h3 className="text-center mb-4">Update Password</h3>
//                     <form onSubmit={handleSubmit}>
//                         {/* Email Input */}
//                         <div className="mb-4">
//                             <MDBInput
//                                 onChange={handleChange}
//                                 label="Email address"
//                                 name="email"  // Changed `id` to `name`
//                                 type="email"
//                                 className="form-control"
//                                 style={{ backgroundColor: '#f0f8ff' }}
//                             />
//                         </div>
                        
//                         {/* Password Input */}
//                         <div className="mb-4">
//                             <MDBInput
//                                 onChange={handleChange}
//                                 label="New Password"
//                                 name="password"  // Changed `id` to `name`
//                                 type="password"
//                                 className="form-control"
//                                 style={{ backgroundColor: '#f0f8ff' }}
//                             />
//                         </div>
                        
//                         {/* Confirm Password Input */}
//                         <div className="mb-4">
//                             <MDBInput
//                                 onChange={handleChange}
//                                 label="Confirm Password"
//                                 name="confirm_password"  // Changed `id` to `name`
//                                 type="password"
//                                 className="form-control"
//                                 style={{ backgroundColor: '#f0f8ff' }}
//                             />
//                         </div>
 
//                         {/* Checkbox */}
//                         <div className="mb-4">
//                             <MDBCheckbox
//                                 name="flexCheck"
//                                 id="flexCheckDefault"
//                                 label="Remember me"
//                                 style={{ color: '#007bff' }}
//                             />
//                         </div>
 
//                         {/* Submit Button */}
//                         <MDBBtn
//                             color="primary"
//                             type="submit"
//                             block
//                             onClick={() => setIsUpdated(!isUpdated)}
//                         >
//                             Update Password
//                         </MDBBtn>
//                     </form>
//                 </MDBCardBody>
//             </MDBCard>
//         </MDBContainer>
//     );
// }
 
// export default Forget;