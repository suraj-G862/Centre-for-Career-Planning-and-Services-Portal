import {useState} from 'react'
import toast from 'react-hot-toast'
import {useAuthContext} from '../context/AuthContext.jsx'
 
 const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    const login = async (email, password) => {
        const success = handleInputError(email, password);
        if(!success) return;
        setLoading(true)
        try{
            const res = await fetch("http://localhost:3000/api/auth/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})
            
            })
            const data = await res.json();
            if(!res.ok){
                throw new Error(data.message)
            }
            localStorage.setItem("ccps-user", JSON.stringify(data))
            setAuthUser(data)
        }
        catch(error){ 
            toast.error(error.message);
        }
        finally{
            setLoading(false) 
        }
    }
    return {loading, login} 
 }

 export default useLogin;

 function handleInputError(email, password){
    if(!email || !password){
        toast.error('All fields are required')
        return false;
    } 
    return true;
}
