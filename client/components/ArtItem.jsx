import {selector, atom, useRecoilValue} from 'recoil';
import React from 'react';
import { results, backgroundColor, textColor} from '../atoms.js'



function ArtItem(props) {
  const color = useRecoilValue(backgroundColor);
  const text = useRecoilValue(textColor);
  

  return (
    <div id='artItem' style={{backgroundColor:color,color:text}}>
      
      <img height="300" src={props.src} />
      <p>{props.item.longTitle}</p>
      
      {/* <p>{props.item.principalOrFirstMaker}</p> */}
    </div>
   
  );
}


export default ArtItem;