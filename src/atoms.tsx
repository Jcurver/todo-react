import { atom, selector } from 'recoil';

export interface Category {
  text: string;
  id: number;
}
// toDos 배열
export const categoryState = atom<Category[]>({
  key: 'category',
  default: [],
});

export const selectedCategoryIdState = atom<number | undefined>({
  key: 'selectedCategoryId',
  default: undefined,
});

export interface IToDo {
  text: string;
  categoryId: number;
  id: number;
}

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const todos = get(toDoState);
    const categoryId = get(selectedCategoryIdState);
    return todos.filter((todo) => todo.categoryId === categoryId);
  },
});
