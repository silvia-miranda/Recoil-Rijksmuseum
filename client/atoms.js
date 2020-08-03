import { atom, selector, selectorFamily } from 'recoil';
import regeneratorRuntime from "regenerator-runtime";

export const username = atom({
  key: 'username',
  default: '',
});

export const loginStatus = atom({
  key: 'loginStatus',
  default: false
})

export const loginStatusSelector = selector({
  key: 'loginStatusSelector',
  get: ({get}) => get(loginStatus),
})



export const searchHistory = atom({
  key: 'searchHistory',
  default: [],
});

export const results = atom({
  key: 'results',
  default: [],
});


export const searchValue = atom({
  key: 'searchValue',
  default: '',
});

export const currentSearchValQuery = selector({
  key: 'CurrentUserInfoQuery',
  get: ({get}) => get(SearchValQuery(get(searchValue))),
});

//  `https://www.rijksmuseum.nl/api/en/collection?key=JAzK4fC0&q=${searchVal}&p=1&ps=12&ondisplay=True&st=Objects&ii=0`

export const SearchValQuery = selector({
  key: 'searchResultSelector',
  get: async ({ get }) => {
      const searchVal = get(searchValue)
      return await fetch (`https://www.rijksmuseum.nl/api/en/collection?key=JAzK4fC0&q=${searchVal}&p=1&ps=12&ondisplay=True&st=Objects&ii=0`)
        .then(response => response.json())
        .then(response => {
      //const [result, setResult] = useRecoilState(results); 
      // setResult(result.push(response));
      console.log("response is: ", response)
      return response;
    })
    }
});
  
  // fetch (`https://www.rijksmuseum.nl/api/en/collection?key=JAzK4fC0&q=${searchValue}&p=1&ps=12&ondisplay=True&st=Objects&ii=0`)
  //   .then(response => response.json())
  //   .then(response => {
  //     setResult(result.push(response.artObjects));
  //     return result;
  //   })
    
  //   searchVal => async () => {
  //     const response = await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=JAzK4fC0&q=${searchVal}&p=1&ps=12&ondisplay=True&st=Objects&ii=0`);
  //     const data = await response.json();
  //   if (response.error) {
  //     throw error;
  //   }
  //   return data.artObjects;
  // }

//   try{
//     const response = await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=JAzK4fC0&q=${searchValue}&p=1&ps=12&ondisplay=True&st=Objects&ii=0`);
//     const data = await response.json();
//     return data;
// }catch(error){
//     throw error;
// }