import { addProductToCart } from '@/apis/cartService';

export const handleAddProductToCartCommon = (
    userId,
    setIsOpen,
    setType,
    toast,
    sizeChoose,
    productId,
    quantity,
    setIsLoading,
    handleGetListProductCart
) => {
    if(!userId) {
                setIsOpen(true);
                setType('login');
                toast.warning('Please login to add product to cart');
                return;
            }
    
            if(!sizeChoose) {
                toast.warning('Please choose size');
                return;
            }
    
            const data = {
                userId,
                productId,
                quantity,
                size: sizeChoose,
            }
    
            setIsLoading(true);
    
            addProductToCart(data).then((res) => {
                toast.success('Add product to cart successfully');
                setIsOpen(true);
                setType('cart');
                setIsLoading(false);
                handleGetListProductCart(userId, 'cart');
            }).catch((err) => {
                toast.error('Add product to cart failed');
                setIsLoading(false);
            });
};
