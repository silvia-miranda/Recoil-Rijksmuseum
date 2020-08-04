import {selector, atom, useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import React from 'react';
import { searchValue, resultLength, textColor, backgroundColor, resultsList, searchHistory, SearchValQuery } from "../atoms.js";

import ArtItem from './ArtItem.jsx';


function SearchResults() {
  const items = useRecoilValue(SearchValQuery)
  const searchedTerm = useRecoilValue(searchValue)
  const numofresults = useRecoilValue(resultLength)
  // const [color, setColor] = useRecoilState(backgroundColor);
  // const [text ,setTextColor]=useRecoilState(textColor);
  console.log('num', numofresults)

  
  
  const { artObjects } = items;
  console.log("artObjects: ", artObjects)
 
  const arr = [];
  artObjects.map(result => 
    arr.push(<ArtItem key={result.id} item={result} src={result.webImage.url} />)
  )
  return (
    <div id='searchResults'>
      <h5>You searched for: {searchedTerm}</h5>
      <h5>There are {numofresults} results.</h5>
      <div id='art-wrapper'>
        { arr }
      </div>
    </div>

  );
}


export default SearchResults;