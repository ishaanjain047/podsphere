// import React, { useState, useRef, useEffect } from "react";
// import Message from "../LeftBanner";
// import GoogleButton from "react-google-button";
// import { useNavigate, Link } from "react-router-dom";
// import { useUserAuth } from "../../context/UserAuthContext.js";
// import "./index.css";
// import { Form, Button } from "react-bootstrap";
// import Alert from "react-bootstrap/Alert";
// import UserDetails from "../../CreateID";
// import OtpImg from "../../../assets/Lock.png";
// import GoogleIcon from "../../../assets/google.png";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const PHN_REGEX = /^[0-9]{10,10}$/;
// const REGISTER_URL = "/register";

// const Register = (props) => {
//   const navigate = useNavigate();
//   const [phno, setPhno] = useState("");
//   const [error, setError] = useState("");
//   const [result, setResult] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [validNum, setValidNum] = useState(false);
//   const [otp, setOtp] = useState("");
//   const phnoRef = useRef();
//   const nameRef = useRef();
//   const errRef = useRef();
//   const [phnoFocus, setPhnoFocus] = useState(false);
//   const [flag, setFlag] = useState(false);
//   const [isdisable, setDisable] = useState(false);

//   const [inputValue, setInputValue] = useState({
//     name: "",
//     email: "",
//   });

//   const { name, email } = inputValue;

//   const handleChange = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     setInputValue((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     console.log(inputValue);
//   };

//   useEffect(() => {
//     setFlag(flag);
//   }, [flag]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("register form submitted");
//     setError("");
//     if (phno === "" || phno === undefined) {
//       setError();
//       toast.error("Please enter a valid phone number!", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//       return;
//     }

//     try {
//       setDisable(true);
//       const response = await setUpRecaptha(phno);
//       setResult(response);
//       console.log("response is", response);
//       setFlag(true);
//       toast("Successful", {
//         position: "top-center",
//       });
//     } catch (err) {
//       setError(err.message);
//       toast.error(error, {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     }
//   };

//   const verifyOtp = async (e) => {
//     e.preventDefault();
//     setError("");
//     if (otp === "" || otp === null) return;
//     try {
//       await result.confirm(otp);
//       navigate("/enterdetails");
//     } catch (err) {
//       toast.error("Incorrect OTP", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     }
//   };

//   return (
//     <div className="registerWrapper">
//       <div className="messageLogin">
//         <Message></Message>
//       </div>
//       <div
//         className="userRegisterForm"
//         style={{ display: !flag ? "flex" : "none" }}
//       >
//         <div className="midWrapperRegister">
//           <div className="registerMessage">
//             Sign Up to Op
//             <span className="changeCol font40 registerMessage">Guru</span>.in
//           </div>
//           <div className="welcomeMessage">
//             Please enter your details to Sign Up.
//           </div>
//           <form onSubmit={handleSubmit} id="registerForm">
//             <div className="nameWrap">
//               <input
//                 type="text"
//                 value={name}
//                 placeholder="Full Name"
//                 name="name"
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="emailWrap">
//               <input
//                 type="text"
//                 value={email}
//                 placeholder="Email"
//                 name="email"
//                 onChange={handleChange}
//               />
//             </div>
//           </form>
//           <div className="termsConditions">
//             By signing up, you are agreeing to our
//             <span className="termsConditions" style={{ fontWeight: "700" }}>
//               Terms And Conditions.
//             </span>
//           </div>
//           <button
//             type="submit"
//             className="yellowBtn"
//             form="registerForm"
//             value="Submit"
//             disabled={isdisable}
//           >
//             Next
//           </button>
//           <div className="alreadyLogin">
//             Already have an account?
//             <Link to="/login" className="linkStyle1">
//               {" "}
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Register;
