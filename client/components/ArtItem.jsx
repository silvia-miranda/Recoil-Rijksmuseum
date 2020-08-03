import {selector, atom, useRecoilValue} from 'recoil';
import React from 'react';
import { results} from '../atoms.js'



function ArtItem(props) {
  //const queryResults = useRecoilValue(results);
  

  return (
    <div id='artItem'>
      <span>{props.item.longTitle}</span>
      <img src={props.src} />
    </div>
   
  );
}


export default ArtItem;