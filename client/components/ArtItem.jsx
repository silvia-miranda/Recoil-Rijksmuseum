import {selector, atom, useRecoilValue} from 'recoil';
import React from 'react';
import { results} from '../atoms.js'



function ArtItem() {
  const queryResults = useRecoilValue(results);
  

  return (
    <div>
   {ArtItem}
    </div>
   
  );
}


export default ArtItem;