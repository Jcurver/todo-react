import { atom, selector } from "recoil";

// export interface Categories {
//   text: string;
// }

export const categoryState = atom({
  key: "category",
  default: [],
});

// export interface IToDo {
//   text: string;
//   category: {};
//   id: number;
// }



// export const toDoState = atom<IOption[]>({
//   key: "toDo",
//   default: [],
// });

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(makeOptions);
    const category = get(categoryState);
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

