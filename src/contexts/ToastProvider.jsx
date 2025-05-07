import { createContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const value = {
        toast
    };
    return (
        <ToastContext.Provider value={value}>
            <ToastContainer />
            {children}
        </ToastContext.Provider>
    );
};
