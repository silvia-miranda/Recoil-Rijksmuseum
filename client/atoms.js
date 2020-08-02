import { atom, selector } from 'recoil';
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

export const searchValue = atom({
  key: 'searchValue',
  default: '',
});

export const searchHistory = atom({
  key: 'searchHistory',
  default: [],
});

export const results = atom({
  key: 'results',
  default: [],
});

// export const myQuery = selector({
//   key: 'MyDBQuery',
//   get: async ({ get }) => {
//     return await getSearchResults();
    
//     }
// });

export const currentSearchValQuery = selector({
  key: 'CurrentUserInfoQuery',
  get: ({get}) => get(getSearchResults(get(searchValue))),
});

//  `https://www.rijksmuseum.nl/api/en/collection?key=JAzK4fC0&q=${searchVal}&p=1&ps=12&ondisplay=True&st=Objects&ii=0`

export const getSearchResults = selector({
  key: 'searchResultSelector',
  get: async ({ get }) => {
        try{
            const response = await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=JAzK4fC0&q=${searchValue}&p=1&ps=12&ondisplay=True&st=Objects&ii=0`);
            const data = await response.json();
            return data.artObjects;
        }catch(error){
            throw error;
        }
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
