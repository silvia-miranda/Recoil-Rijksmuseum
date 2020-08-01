import {selector, atom, useRecoilValue} from 'recoil';
import React from 'react';
import { myQuery } from '../atoms.js'
import ResultsSection from './ResultsSection.jsx';


function SearchResults() {
  const queryResults = useRecoilValue(myQuery);
  console.log("results", queryResults)
  //const [result, setResult] = useRecoilState(resultsAtom); 

  return (
    <div>
      {queryResults}
    </div>
  );
}


export default SearchResults;