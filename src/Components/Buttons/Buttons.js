import { Post } from "../Functions/CRUD"

export const CreateBtn = (text, path, user, condittion, fun) => {
    return (
        <button
            disabled={!condittion}
            className={`CreateBtn ${!condittion && "disabledBtn"}`}
            onClick={()=> Post(path, user, fun &&(fun))}
        > 
            {text} 
        </button>
    )
}