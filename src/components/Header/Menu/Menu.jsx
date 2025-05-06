import { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';

function Menu({ content, href, setIsOpen }) {
    const { menu } = styles;
    const {setType} = useContext(SideBarContext);
    
    const handleClickShowLogin = () => {
        setType('login');
        setIsOpen(true);
    };
    return (
        <div className={menu} onClick={handleClickShowLogin}>
            {content}
        </div>
    );
}

export default Menu;
