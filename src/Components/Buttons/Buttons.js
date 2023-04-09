import { TailSpin } from "react-loader-spinner"

export const CreateBtn = (text, condittion, fun) => {
    return (
        <button
            disabled={!condittion}
            className={`CreateBtn ${condittion && "activeBtn"}`}
            onClick={()=> fun}
        > 
            {text}
        </button>
    )
}

export const LoginButton = (text, condition, fun, loading) => {
    return (
        <button 
            onClick={()=> fun()}
            className={`CreateBtn ${condition && "activeBtn"} `}
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

export const GeneralBtn = (text, fun, type) => {
    return (
        <button 
            className={`generalBtn ${type}Btn`}
            onClick={()=> fun()} 
        >
            {text}
        </button>
    )
}


