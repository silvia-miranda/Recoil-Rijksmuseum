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

export const myQuery = selector({
  key: 'MyDBQuery',
  get: async ({ get }) => {
    return await getSearchResults();
    
    }
});