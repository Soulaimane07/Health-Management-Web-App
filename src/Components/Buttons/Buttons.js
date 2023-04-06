import { TailSpin } from "react-loader-spinner"
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

export const LoginButton = (text, condition, fun, loading) => {
    return (
        <button 
            onClick={()=> fun()}
            className={`CreateBtn ${!condition && "disabledBtn"} `}
            disabled={!condition}
        >
            <span>
            {loading 
            ?   <TailSpin
                    height="25"
                    width="25"
                    color="white"
                    ariaLabel="tail-spin-loading"
                    radius="0"
                    visible={true}
                    wrapperClass='spiner'
                /> 
            : text
            }
            </span>
        </button>
    )
}

export const GeneralBtn = (text, fun, bgcolor, color) => {
    return (
        <button 
            className="generalBtn" 
            style={{backgroundColor: bgcolor, color: color}}
            onClick={()=> fun()} 
        >
            {text}
        </button>
    )
}