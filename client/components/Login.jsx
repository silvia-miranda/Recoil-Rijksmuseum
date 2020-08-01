import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  atom,
  selector,
  useRecoilState,
} from 'recoil';
import {username, loginStatus } from '../atoms.js';


const Login = () => {
  const greeting = "Please enter your username below:"
  const [user, setUser] = useRecoilState(username);
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginStatus);

  const handleUsernameChange = (e) => {
    console.log(e.target.value)
    setUser(e.target.value)
  }   
  const handlePasswordChange = (e) => {
     setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
  // Code to handle submit.
  event.preventDefault();
      fetch('http://localhost:8080/api/login', {
        method: 'POST',  
        body: JSON.stringify({
          username: user,
          password: password,
        })
      })
          .then(response => {
          console.log("login response: ", response)
          setUser(user)
          setPassword(password)
          if(response.status === 200) {
            setIsLoggedIn(true)
            return history.push("/search");
          }
          }) 
          .catch(error => console.log(error));
  }
  

  return (
    <div>
    <h3>{greeting}</h3>
    <form className='register' onSubmit={handleSubmit}>
      <input type='text' className='username' onChange={handleUsernameChange} />
      <input type='password' className='username' onChange={handlePasswordChange} />
      <button type='submit'>Register Here</button>
    </form>
    <p>{user}</p>
    {/* <p>{password}</p> */}
    </div>
  )
}

export default Login;

//from Recoil docs

// const currentUserIDState = atom({
//   key: 'CurrentUserID',
//   default: 1,
// });

// const currentUserNameState = selector({
//   key: 'CurrentUserName',
//   get: ({get}) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });


// const currentUserNameQuery = selector({
//   key: 'CurrentUserName',
//   get: async ({get}) => {
//     const response = await myDBQuery({
//       userID: get(currentUserIDState),
//     });
//     return response.name;
//   },
// });

// function CurrentUserInfo() {
//   const userName = useRecoilValue(currentUserNameQuery);
//   return <div>{userName}</div>;
//}

//how to handle rendering before the above promise resolves (react.suspense)
// function MyApp() {
//   return (
//     <RecoilRoot>
//       <React.Suspense fallback={<div>Loading...</div>}>
//         <CurrentUserInfo />
//       </React.Suspense>
//     </RecoilRoot>
//   );
// }