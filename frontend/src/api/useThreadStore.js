import toast from 'react-hot-toast';
import { useAppContext } from '../context/AppContext';
import { useState } from 'react';

const useThreadStore = () => {
    const [loading, setLoading] = useState(false);
    const [threads, setThreads] = useState({});
    const { backendUrl } = useAppContext();

    const getThreads = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${backendUrl}/api/threads/getThreads`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            setThreads(data.threads);
        }
        catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    };

    const createThread = async (threadData)  => {
        setLoading(true);
        try {
            const res = await fetch(`${backendUrl}/api/threads/createThread`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(threadData)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            setThreads(...threads, data.newThread);
        }
        catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    return { loading, threads, getThreads };
}

export default useThreadStore;