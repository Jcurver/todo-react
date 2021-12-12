import { useRecoilState, useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <hr />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}

// interface IForm {
//   email: string;
//   firstName: string;
//   lastName: string;
//   userName: string;
//   password: string;
//   password1: string;
//   extraError?: string;
// }
// // useForm을 컴포넌트에서 호출하면 register이랑 handleSubmit이 제공된다.
// function ToDoList() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IForm>({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   });
//   // onValid 함수는 모든 인풋 조건을 만족했을 때 호출된다.
//   const onValid = (data: IForm) => {
//     if (data.password !== data.password1) {
//       setError(
//         "password1",
//         { message: "Password are not the same" },
//         { shouldFocus: true }
//         // shouldFocus : 오류 시 커서를 해당 인폿에 놓는 기능
//       );
//     }
//     // setError("extraError", { message: "Server offline" });
//     // extraError : 전역에 해당하는 에러
//     console.log(data);
//   };
//   console.log(errors);

//   return (
//     <div>
//       <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "Only naver.com emails allowed",
//             },
//           })}
//           placeholder="email"
//         />
//         <span>{errors?.email?.message}</span>
//         <input
//           {...register("firstName", {
//             required: "write here",
//           validate:{ noNico : async (value) => value.includes("nico") ? "no nicos allowed" : true,
//           noNick: (value) => value.includes("nick") ? "no nicks allowed" : true,
//         }

//           })}
//           placeholder="firstName"
//         />
//         <span>{errors?.firstName?.message}</span>

//         <input
//           {...register("lastName", { required: "write here" ,

//         })}
//           placeholder="lastName"
//         />
//         <span>{errors?.lastName?.message}</span>

//         <input
//           {...register("userName", { required: "write here", minLength: 10 })}
//           placeholder="userName"
//         />
//         <span>{errors?.userName?.message}</span>

//         <input
//           {...register("password", { required: "write here" })}
//           placeholder="password"
//         />
//         <span>{errors?.password?.message}</span>

//         <input
//           {...register("password1", {
//             required: "Password is required",
//             minLength: {
//               value: 5,
//               message: "Your password is too short!",
//             },
//           })}
//           placeholder="password1"
//         />
//         <span>{errors?.password1?.message}</span>

//         <button>Add</button>
//         <span>{errors?.extraError?.message}</span>
//       </form>
//     </div>
//   );
// }

export default ToDoList;
