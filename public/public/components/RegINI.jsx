import {Register} from './Register';
import {setUser} from '../store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from 'react-redux'

const RegINI = () => {
    const dispatch = useDispatch();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error)
    }

    return (
        <Register
            title='register'
            handleClick={handleRegister}
        />
    )
}

export {RegINI} 