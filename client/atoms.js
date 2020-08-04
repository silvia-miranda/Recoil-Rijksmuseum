import { atom, selector } from 'recoil';
import regeneratorRuntime from "regenerator-runtime";

export const username = atom({
  key: 'username',
  default: '',
});

export const password = atom({
  key: 'password',
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

export const value = atom({
  key: 'value',
  default: '',
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
      const url = `https://www.rijksmuseum.nl/api/en/collection?key=JAzK4fC0&q=${searchVal}&p=1&ps=15&ondisplay=True&st=Objects&ii=0`
      return await fetch (url)
        .then(response => response.json())
        .then(response => {
      // const [result, setResult] = useRecoilState(results); 
      // setResult(result.push(response));
      console.log("response is: ", response)
      console.log("url is: ", url)
      return response;
    })
    },
});

export const resultLength = selector({
  key: 'resultLength',
  get: async ({get}) => {
    const results = await get(SearchValQuery)
    console.log('results', results)
    return results.artObjects.length;
  }
})

export const results = atom({
  key: 'results',
  default: currentSearchValQuery,
});


export const backgroundColor = atom({
  key: 'backgroundColor',
  default: 'white'
})

export const textColor = atom({
  key: 'textColor',
  default: 'black'
})
 