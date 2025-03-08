import {useState} from 'react'
import toast from 'react-hot-toast'

const useGetAnalytics = () => {
    const [loading, setLoading] = useState(false);
    const getAnalytics = async() => {
        setLoading(true)
        try {
            const res = await fetch("http://localhost:3000/api/stats",{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await res.json();
            if(!res.ok || !data){
                throw new Error(data.message)
            }
            return data[0];
        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false)
        }
    }
    return {loading, getAnalytics}
}

export default useGetAnalytics;