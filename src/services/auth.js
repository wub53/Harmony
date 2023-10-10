// import axios from "axios";
// const apiUrl = "http://localhost:5173/auth";

// export function signIn(email, name, picture) {
//   // console.log("Sign in services SignIn");
//   return new Promise((resolve, reject) => {
//     axios
//       .post(`${apiUrl}/signin`, {email, name, picture})
//       .then((response) => {
//         resolve({
//           email: response.data.email, 
//           name: response.data.name,
//           picture: response.data.picture,
//           token: response.data.token,
//           id: response.data.id,
//         });
//       })
//       .catch((err) => {
//         reject({ status: false, message: err.response.data.error.message });
//       });
//   });
// }
