import {selector, atom, useRecoilValue} from 'recoil';
import React from 'react';
import { results} from '../atoms.js'



function ArtItem(props) {
  //const queryResults = useRecoilValue(results);
  

  return (
    <div id='artItem'>
      
      <img height="300" src={props.src} />
      <p>{props.item.longTitle}</p>
    </div>
   
  );
}


export default ArtItem;