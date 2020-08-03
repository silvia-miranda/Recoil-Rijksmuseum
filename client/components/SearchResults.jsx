import {selector, atom, useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import React from 'react';
import { searchValue, results, currentSearchValQuery, searchHistory, SearchValQuery } from "../atoms.js";

import ArtItem from './ArtItem.jsx';


function SearchResults() {
  const items = useRecoilValue(SearchValQuery)
  //console.log('items: ', items)
  const { artObjects } = items;
  console.log("artObjects: ", artObjects)
  //const currentSearch = useRecoilValue(currentSearchValQuery);
  //const friends = useRecoilValue(friendsInfoQuery);
  //const searchVal = useRecoilState(searchValue);
  const arr = [];
  artObjects.map(result => 
    arr.push(<ArtItem key={result.id} item={result} src={result.links.self} />)
  )
  return (
    <div id='searchResults'>
   { arr }
    </div>

  );
}


export default SearchResults;