import { FaRegCircle, FaTimes } from 'react-icons/fa';
import './Icon.css'

const Icon = ({name}) => {
    if(name=='circle'){
        return <FaRegCircle className='font'/>
    }else if(name=='cross'){
        return <FaTimes className='font'/>
    }else{
        return "" ;
    }
}

export default Icon;
