// import React, { useState, useEffect } from "react";
// import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { signUpAction } from "./app/userSlice";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import waiting from "./utils/waiting";

// const RegistrationForm = () => {
//   const dispatch = useDispatch();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [new_password, set_NewPassword] = useState("");
//   const [actionWarning, setActionWarning] = useState();

//   const { status } = useSelector((state) => state.user);

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
//   const handleNewPasswordChange = (e) => {
//     set_NewPassword(e.target.value);
//   };

//   useEffect(() => {
//     if (status !== "idle") setActionWarning(status);
//   }, [status]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your registration logic here
//     if (password !== new_password) {
//       setActionWarning("passwords not matching");
//     } else {
//       setActionWarning("");
//       dispatch(signUpAction({ username, password })).then((action) => {
//         if (signUpAction.fulfilled.match(action)) {
//           waiting(1000).then(() => {
//             window.location.href = "/signin";
//           });
//         }
//       });
//     }
//   };

//   return (
//     <div>
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={handleUsernameChange}
//             required
//           />
//         </div>
//         <div>
//           <label>New Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             value={new_password}
//             onChange={handleNewPasswordChange}
//             required
//           />
//         </div>
//         {/* {passwordMatchError && (
//           <div style={{ color: "red" }}>{passwordMatchError}</div>
//         )} */}

//         {actionWarning ? (
//           <p style={{ color: "red", textAlign: "center", margin: "0" }}>
//             {actionWarning}
//           </p>
//         ) : null}

//         <button type="submit">Register</button>
//         <p>
//             Already had an account? <Link to="/signin">Sign In</Link>
//           </p>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;
