import React, { useContext } from 'react';
import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiCircleList } from 'react-icons/ci';
import styles from '../styles.module.scss';
import { OurShopContext } from '@/contexts/OurShopProvider';
import SelectBox from '@/pages/OurShop/components/SelectBox';

export default function Filter() {
    const {containerFilter, boxIcon, boxLeft,selectBox, boxRight, show, sort} = styles;
    const {showOptions, sortOptions, setSortId, setShowId, setIsShowGrid} = useContext(OurShopContext);
    
    const getValueSelect = (value, type) => {
        if(type === 'sort') {
            setSortId(value);
        } else {
            setShowId(value);
        }
    };

    const handleGetShowGrid = (type) => {
        setIsShowGrid(type === 'grid');
    };

    return (
        <div className={containerFilter}>
            <div className={boxLeft}>
                <SelectBox options={sortOptions} getValue={getValueSelect} type={'sort'} />
                <div className={boxIcon}>
                    <TfiLayoutGrid4 onClick={() => handleGetShowGrid('grid')} style={{ fontSize: '25px', cursor: 'pointer' }} />
                    <div style={{height: '20px', width: '1px', backgroundColor: '#e1e1e1'}}></div>
                    <CiCircleList onClick={() => handleGetShowGrid('list')} style={{ fontSize: '27px', cursor: 'pointer' }} />
                </div>
            </div>

            <div className={boxRight}>
                <div style={{fontSize: '14px', color: '#555'}}>Show</div>
                <SelectBox options={showOptions} getValue={getValueSelect} type={'show'} />
            </div>
        </div>
    );
}
