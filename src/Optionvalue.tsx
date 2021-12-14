import React from "react";
import { useSetRecoilState } from "recoil";
import { IOption } from "./atoms";


function Optionvalue({ text, id, category}: IOption) {
  // const setToDos = useSetRecoilState(toDoState);
  // const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const {
  //     currentTarget: { name },
  //   } = event;
  //   setToDos((oldToDos) => {
  //     // 수정하고 싶은 인덱스의 넘버를 가져온다.
  //     const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
  //     // const oldToDo = oldToDos[targetIndex];
  //     const newToDo = { text, id, category: name as any };
  //     return [
  //       ...oldToDos.slice(0, targetIndex),
  //       newToDo,
  //       ...oldToDos.slice(targetIndex + 1),
  //     ];
  //   });
  // };

  return (
    <li>
      <span>{text}</span>
      {/* {Object.values(Categories).map((Categories) => category !== Categories && (
        <button name={Categories} onClick={onClick}>
          {Categories}
        </button>
      ))} */}
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

export default Optionvalue;
