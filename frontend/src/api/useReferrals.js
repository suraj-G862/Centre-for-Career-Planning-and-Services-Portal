import { useState, useEffect } from "react";

export const useReferrals = () => {
    const [referrals, setReferrals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/referrals")
            .then((res) => res.json())
            .then(setReferrals)
            .catch((err) => console.error(err));
    }, []);

    return { referrals };
};