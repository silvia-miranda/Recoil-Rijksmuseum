import React from 'react';
import {
  RecoilRoot,
  atom,
  selector
} from 'recoil';



function X () {


  return (
    <>
    </>
  )
}


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