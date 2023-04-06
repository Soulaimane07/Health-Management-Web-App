import {FiAlertCircle} from 'react-icons/fi'

export const AlertDanger = (text, center) => {
    return(
        <div className={`alert`} style={center && {justifyContent: "center"}} >
            <span> <FiAlertCircle /> </span>
            {text}
        </div>
    )
}