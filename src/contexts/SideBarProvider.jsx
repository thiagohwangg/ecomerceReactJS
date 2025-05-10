import { createContext, useEffect, useState } from "react";
import { getCart } from "@/apis/cartService";
import Cookies from "js-cookie";


export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [listProductCart, setListProductCart] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const userId = Cookies.get('userId');
    const handleGetListProductCart = (userId, type) => {
        if(userId && type === 'cart') {
            setIsLoading(true);
            getCart(userId).then(res => {
                setListProductCart(res.data);
                setIsLoading(false);
            }).catch(err => {
                setListProductCart([]);
                setIsLoading(false);
            })
            
        }
    };

    useEffect(() => {
        handleGetListProductCart(userId, 'cart');
    }, []);

    const values = {
        isOpen,
        setIsOpen,
        type,
        setType,
        listProductCart,
        handleGetListProductCart,
        isLoading,
    };
    return <SideBarContext.Provider value={values}>{children}</SideBarContext.Provider>;
};
