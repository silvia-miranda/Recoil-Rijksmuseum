import React, { useState }from 'react';
import {
  RecoilRoot,
  atom,
  selector, useRecoilState
} from 'recoil';
import { user, loginStatus, loginStatusSelector, searchValue as searchValueAtom, results as resultsAtom } from "../atoms.js";
import regeneratorRuntime from "regenerator-runtime";

const Search = () => {

const [searchVal, setSearchVal] = useRecoilState(searchValueAtom);  
const [result, setResult] = useRecoilState(resultsAtom); 

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchVal(e.target.value)
  }

  const search = (e) => {
    e.preventDefault();
    console.log(searchVal);
    fetch ('https://ghapi.huchen.dev/repositories')
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setResult(
        Object.assign({}, result, {
           response,
        })
      )
    })
  }
 
   
  

  return (
    <div id="search">
      <h1>Search for some shit below... you won't get it. This only returns some github bullshit.</h1> 
      <form className='searchForm' onSubmit={search}>
      <input type='text' className='username' onChange={handleChange} />
      <button type='submit'>Search</button>
      </form>
  </div>
  )
}

export default Search;

