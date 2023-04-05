import {FiAlertCircle} from 'react-icons/fi'

export const AlertDanger = (text) => {
    return(
        <div className='alert'>
            <span> <FiAlertCircle /> </span>
            {text}
        </div>
    )
}