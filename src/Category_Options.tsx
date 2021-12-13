import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import {  makeOptions } from "./atoms";


const CateOptDiv = styled.div`
  height: auto;

  word-break: break-all;
`;
const Option = styled.span`
  font-size: 30px;
`;



interface IForm {
  optiontext: string;
}

function Category_Options() {
  const setOption = useSetRecoilState(makeOptions);
  const {register,handleSubmit,setValue} = useForm<IForm>();

  const handleOption = ({optiontext}: IForm) => {

    setOption((oldOptions) => [
      
      { text: optiontext, id: Date.now(), category:{optiontext} },
      ...oldOptions,
    ])
    setValue("optiontext","");
  }
    


  return (
    <CateOptDiv>
      <Option>Make Category</Option>
      <hr />
      <form onSubmit={handleSubmit(handleOption)}>
        <input {...register("optiontext",{required:"please write"}) } type="text" placeholder="write what you want..." id="input" />
        <button>Make!</button>
        <ul id="option"></ul>
      </form>
    </CateOptDiv>
  );
}

export default Category_Options;
