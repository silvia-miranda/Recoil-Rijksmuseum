import React, { Component, useState } from 'react';
import {
  atom,
  selector,
  useRecoilState,
} from 'recoil';
import {username} from '../atoms.js';


const Login = () => {
  const greeting = "This is where the fun begins!"
  const [user, setUser] = useRecoilState(username);
  // const [password, setPassword] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(Boolean);

  const handleUsernameChange = (e) => {
    console.log(e.target.value)
    setUser(e.target.value)
  }
   
  // const handlePasswordChange = (e) => {
  //    setPassword(e.target.value)
  // }
  // const handleLoginStatus = (e) => {
  //    setIsLoggedIn(e.target.value)
  // }

  const handleSubmit = (e) => {
  // Code to handle submit.
    e.preventDefault();
    setUser(username)
  };

  return (
    <div>
    <h1>{greeting}</h1>
    <form className='register' onSubmit={handleSubmit}>
      <input type='text' className='username' onChange={handleUsernameChange} />
     
      <button type='submit'>Register Here</button>
    </form>
    <p>{username}</p>
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