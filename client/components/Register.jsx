import React from 'react';
import {
  RecoilRoot,
  atom,
  selector
} from 'recoil';



function Register () {
  const greeting = "This is where the fun begins!"

  return (
    <>
    <h1>{greeting}</h1>
    </>
  )
}

export default Register;