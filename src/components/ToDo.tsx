import React from "react";
import { useSetRecoilState } from "recoil";
import { categoryState, IOption, IToDo, makeOptions, toDoState } from "../atoms";

function ToDo({ text, id, category }: IToDo) {
  const setToDos = useSetRecoilState(categoryState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      // 수정하고 싶은 인덱스의 넘버를 가져온다.
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      // const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span style={{marginRight:"10px"}}>{text}</span>
      {Object.values(toDoState).map((toDoState) => category !== toDoState && (
        <button name={toDoState} onClick={onClick}>
          {toDoState}
        </button>
      ))}
       {/* {category !== Categories.DOING && (
         <button name={Categories.DOING} onClick={onClick}>
           {Categories.DOING}
         </button>
       )}
       {category !== Categories.TO_DO && (
         <button name={Categories.TO_DO} onClick={onClick}>
           {Categories.TO_DO}
         </button>
       )}
       {category !== Categories.DONE && (
         <button name={Categories.DONE} onClick={onClick}>
           {Categories.DONE}
         </button>
       )} */}
    </li>
  );
}

export default ToDo;
