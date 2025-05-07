import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';
export default function InputCommon({
    label,
    type,
    isRequired = false,
    ...props
}) {
    const { labelInput, boxInput, container, boxIcon, errMsg } = styles;
    const {formik, id} = props
    const isPassword = type === 'password';
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const isShowTextPassword =
        type === 'password' && showPassword ? 'text' : type;
    const isErr = formik.touched[id] && formik.errors[id];
    const messageError = formik.errors[id];
        return (
        <div className={container}>
            <div className={labelInput}>
                {label}
                {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={isShowTextPassword}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}
                {isErr && <div className={errMsg}>{messageError}</div>}
            </div>
        </div>
    );
}
