import { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProdiver';

function Menu({ content, href }) {
    const { menu, subMenu } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);
    const { userInfo, handleLogOut } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);

    const handleClickShowLogin = () => {
        if (content === 'Sign in' && !userInfo) {
            setType('login');
            setIsOpen(true);
        }
    };

    const handleRenderText = (content) => {
        if (content === 'Sign in' && userInfo) {
            return `Hello: ${userInfo?.username}`;
        } else {
            return content;
        }
    };

    const handleHover = () => {
        if (content === 'Sign in' && userInfo) {
            setIsShowSubMenu(true);
        }
    };

    return (
        <div
         className={menu}
          onClick={handleClickShowLogin}
          onMouseEnter={handleHover}
          >
            {handleRenderText(content)}
            {isShowSubMenu && <div onClick={handleLogOut} onMouseLeave={() => setIsShowSubMenu(false)} className={subMenu}>
                LOG OUT</div>}
        </div>
    );
}

export default Menu;
