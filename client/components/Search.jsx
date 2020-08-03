import React, { useState } from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from 'recoil';
import { searchValue, results, currentSearchValQuery, searchHistory, SearchValQuery } from "../atoms.js";

import SearchResults from './SearchResults.jsx'


const Search = () => {

  const [searchVal, setSearchVal] = useRecoilState(searchValue)
  //const setSearchVal = useRecoilState(searchValue);  
  //const queryResults = useRecoilValue(SearchValQuery);
  //const { artObjects } = queryResults;
  //const [result, setResult] = useRecoilState(results); 
  //setResult(result.push(artObjects));
  const setSearchHistory = useSetRecoilState(searchHistory); 
  const history = useRecoilValue(searchHistory); 

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setSearchVal(e.target.value)
    console.log("searchVal: ", searchVal)
  }

  const updateSearchVal = (e) => {
    e.preventDefault();
    //setSearchVal(e.target.value)
    //setSearchHistory(history.push(searchVal))
    // console.log("searchVal: ", searchVal)
  }

  
  
   
//   const currentSearchValQuery = selector({
//     key: 'CurrentUserInfoQuery',
//     get: ({get}) => get(getSearchResults(get(searchVal))),
//   });

// //  `https://www.rijksmuseum.nl/api/en/collection?key=JAzK4fC0&q=${searchVal}&p=1&ps=12&ondisplay=True&st=Objects&ii=0`

//   const getSearchResults = selector({
//     key: 'searchResultSelector',
//     get: searchValue => async () => {
//         const response = await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=JAzK4fC0&q=${searchVal}&p=1&ps=12&ondisplay=True&st=Objects&ii=0`);
//         const data = await response.json();
//       if (response.error) {
//         throw error;
//       }
//       return data.artObjects;
//     }
//   })
  //   e.preventDefault();
  //   console.log('searchVal: ', searchVal);
  //   setSearchHistory(history.push(searchVal))
  //   setSearchVal('')
  //   console.log('history: ', history)
  //   let url = `https://www.rijksmuseum.nl/api/en/collection?key=JAzK4fC0&q=${searchVal}&p=1&ps=12&ondisplay=True&st=Objects&ii=0`
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(url)
  //     setResult(result.push(response.artObjects));
  //     console.log("results: ", result)
  //     console.log("response: ", response)
  //   })
  // }
 
  //0: {links: {…}, id: "nl-SK-A-4691", objectNumber: "SK-A-4691", title: "Zelfportret", hasImage: true, …}

  return (
    <div id="search">
      
        <h1>Search for some art below... it's not on the page, but it might be in your console!</h1> 
        <form className='searchForm' onSubmit={updateSearchVal} >
          <input type='text' className='username' onChange={handleChange} />
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