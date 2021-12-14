import { atom, selector } from "recoil";

export interface Categories {
  text: string;
  category:{},
  id:number;
}
// toDos 배열
export const categoryState = atom<Categories[]>({
  key: "category",
  default: [],
});

export interface IToDo {
  text: string;
  category: {};
  id: number;
}



export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(categoryState);
    const category = get(makeOptions);
    return toDos.filter((toDo) => toDo.category === category );
  },
});
export interface IOption {
  text: string;
  category:{},
  id:number;
}
export const makeOptions = atom<IOption[]>({
  key: "option",
  default: [],
})

