import React from 'react';
import {
  RecoilRoot,
  atom,
  selector
} from 'recoil';



const Profile = () => {
  let username = useRecoilValue(username)
  let searchHistory = useRecoilValue(searchHistory)

  return (
    <>
    {username}
    {searchHistory}
    </>
  )
}

export default Profile;