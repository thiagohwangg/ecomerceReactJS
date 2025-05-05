import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';
export default function InputCommon({ label, type, isRequired = false }) {
    const { labelInput, boxInput, container,boxIcon } = styles;
    const isPassword = type === 'password';
    const [showPassword, setShowPassword] = useState(false); 
    const handleShowPassword = () => setShowPassword(!showPassword); 
    const isShowTextPassword = type === 'password' && showPassword ? 'text' : type;
    return (
        <div className={container}>
            <div className={labelInput}>
                {label}
                {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input type={isShowTextPassword} />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}
            </div>
        </div>
    );
}
