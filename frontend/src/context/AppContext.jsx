import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showVerifyEmail, setShowVerifyEmail] = useState(false);

    return <AppContext.Provider value={{ backendUrl, showForgotPassword, setShowForgotPassword, showVerifyEmail, setShowVerifyEmail }}>{children}</AppContext.Provider>;
};