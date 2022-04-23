import {Login} from './Login';
import {setUser} from '../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from 'react-redux'

const LoginINI = () => {
    const dispatch = useDispatch();
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error)
    }
    return (
        <Login
            title='sign in'
            handleClick={handleLogin}
        />
    )
}

export {LoginINI}