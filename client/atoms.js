import { atom, selector } from 'recoil';

export const user = atom({
  key: 'user',
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

export const results = atom({
  key: 'results',
  default: [],
});
