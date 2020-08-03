import React, { useState } from 'react';
import {
  useRecoilState, useResetRecoilState, useRecoilValue,
} from 'recoil';
import { searchValue, value, resultLength, currentSearchValQuery, results, searchHistory, SearchValQuery } from "../atoms.js";

import SearchResults from './SearchResults.jsx'


const Search = () => {

  const [val, setVal] = useRecoilState(value)
  const [searchVal, setSearchVal] = useRecoilState(searchValue)
  const [history, setHistory] = useRecoilState(searchHistory); 
  const reset = useResetRecoilState(value);
  //const result = useRecoilValue(results);

  const handleChange = (e) => {
    e.preventDefault();
    setVal(e.target.value)
    console.log("val before reset: ", val)
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //const searchString = getRecoilState(value)
    setSearchVal(val.split(' ').join('+'))
    console.log("value:", val)
    //setHistory(searchHistory.push(val))
    setHistory((history) => [...history, val])
    console.log("searchHistory:", history)
    reset(val);
    console.log("after reset: ", val)
    //console.log("results in search: ", result)
    // console.log("searchVal: ", searchVal)
  }
 
  //0: {links: {…}, id: "nl-SK-A-4691", objectNumber: "SK-A-4691", title: "Zelfportret", hasImage: true, …}

  return (
    <div id="search">
      
        <h1>Search for an artist below!</h1> 
        <h3>Here are some recent searches to get you started:</h3>
        <div>{history.map(searchItem => <span>{searchItem}    </span>)}</div>
        <form className='searchForm' value={val} onSubmit={handleSubmit} >
          <input type='text' className='searchBar' onChange={handleChange} />
          <button type='submit'>Search</button>
        </form>
      <React.Suspense fallback={<div>Loading...</div>}>
        <SearchResults />
      </React.Suspense>
  </div>
  )
}

export default Search;

// const currentSearchValState = atom({
//   key: 'CurrentSearchVal',
//   default: '',
// });

// const museumQuery = selectorFamily({
//   key: 'museumQuery',
//   get: searchVal => async () => {
//     const response = await myDBQuery({searchVal});
//     if (response.error) {
//       throw response.error;
//     }
//     return response;
//   },
// });

// const myDBQuery = (searchVal) => {
//   let url = `https://www.rijksmuseum.nl/api/en/collection?key=JAzK4fC0&q=${searchVal}&p=1&ps=12&ondisplay=True&st=Objects&ii=0`
//     fetch(url)
//     .then(response => response.json())
//     .then(response => {
//       console.log(url)
//       setResult(results.push(response.artObjects))
//       console.log("results: ", result)
//       console.log("response: ", response)
//   }

// const searchInfoQuery = selector({
//   key: 'SearchInfoQuery',
//   get: ({get}) => get(museumQuery(get(currentSearchValState))),
// });

// const artInfoQuery = selector({
//   key: 'ArtInfoQuery',
//   get: ({get}) => {
//     const {artList} = get(currentUserInfoQuery);
//     return artList.map(artID => get(searchInfoQuery(artID)));
//   },
// });

// function CurrentUserInfo() {
//   const currentSearchResults = useRecoilValue(searchInfoQuery);
// //this is where the db query is actually made?? 
//   const returnVals = useRecoilValue(SearchInfoQuery);
//   const setCurrentSearchVal = useSetRecoilState(currentSearchValState);
//   return (
//     <div>
//       <h1>{currentSearchValState}</h1>
//       <ul>
//         {returnVals.map(artItem =>
//           <li key={artItem.img} onClick={() => setCurrentSearchVal(artItem.img)}>
//             {artItem.name}
//           </li>
//         )}
//       </ul>
//     </div>
//   );
// }

//   return (
//     <div id="search">
//       <h1>Search for some art below... it's not on the page, but it might be in your console!</h1> 
//       <form className='searchForm' onSubmit={() => setCurrentSearchVal(returnVals))}>
//       <input type='text' className='username' onChange={handleChange} />
//       <button type='submit'>Search</button>
//       </form>
//       <React.Suspense fallback={<div>Loading...</div>}>
//       <SearchResults />
//       </React.Suspense>
//     </div>
//   )
// }


// export default Search;