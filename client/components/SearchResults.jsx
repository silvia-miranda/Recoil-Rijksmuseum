import {selector, atom, useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import React from 'react';
import { searchValue, results, currentSearchValQuery, searchHistory, getSearchResults } from "../atoms.js";
import ResultsSection from './ResultsSection.jsx';
import ArtItem from './ArtItem.jsx';


function SearchResults() {
  const queryResults = useRecoilValue(getSearchResults);
  const { data } = queryResults;
  const currentSearch = useRecoilValue(currentSearchValQuery);
  //const friends = useRecoilValue(friendsInfoQuery);
  const searchVal = useSetRecoilState(searchValue);

  return (
    <div>
   {data.map(result => (
     <ArtItem key={result.id} item={result} src={result.src} />
   ))}
    </div>
   
  );
}


export default SearchResults;