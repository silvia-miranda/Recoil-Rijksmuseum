import React from 'react';
import {
  useRecoilValue
} from 'recoil';
import { username, resultLength, results, currentSearchValQuery, searchHistory, SearchValQuery } from "../atoms.js";


const Profile = () => {
  const user = useRecoilValue(username)
  const history = useRecoilValue(searchHistory)

  return (
    <div>
    {user}
    
    { history }
    </div>
  )
}

export default Profile;