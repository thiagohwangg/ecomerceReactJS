import InputCommon from '@components/InputCommon/InputCommon';
import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContext } from '@/contexts/ToastProvider';
import { register } from '@/apis/authService';
import { signIn } from '@/apis/authService';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProdiver';

export default function Login() {
    const { container, title, boxRememberMe, lostPw } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);
    const {setIsOpen} = useContext(SideBarContext);
    const {setUserId} = useContext(StoreContext);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            cfpassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Passwords must match'
            )
        }),
        onSubmit: async (values) => {
            if(isLoading) return;
            const {email, password} = values

            setIsLoading(true)
            if (isRegister) {
                await register({
                    username: email,
                    password
                }).then(res => {
                    toast.success(res.data.message)
                    setIsLoading(false)

                }).catch(err => {
                    toast.error(err.response.data.message)
                setIsLoading(false)
                    
                })
            }

            if(!isRegister) {
                await signIn({
                    username: email,
                    password
                }).then(res => {
                    setIsLoading(false)
                    setIsOpen(false)
                    const {id, token, refreshToken} = res.data
                    setUserId(id)
                    Cookies.set('token', token)
                    Cookies.set('refreshToken', refreshToken)
                    Cookies.set('userId', id)
                    toast.success("Sign in success")
                }).catch(err => {
                    toast.success("Sign in failed")
                    setIsLoading(false)
                })
            }
        }
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };

    return (
        <div className={container}>
            <form onSubmit={formik.handleSubmit}>
                <div className={title}>{isRegister ? 'SIGN IN' : 'LOGIN'}</div>
                <InputCommon
                    id='email'
                    label={'Username or email'}
                    type={'text'}
                    isRequired
                    formik={formik}
                />
                <InputCommon
                    id='password'
                    label={'Password'}
                    type={'password'}
                    isRequired
                    formik={formik}
                />

                {isRegister && (
                    <InputCommon
                        id='cfpassword'
                        label={'Confirm Password'}
                        type={'password'}
                        isRequired
                        formik={formik}
                    />
                )}
                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                )}

                <Button
                    content={isLoading ? 'LOADING...' : isRegister ? 'REGISTER' : 'LOGIN'}
                    type='submit'
                />
            </form>
            <Button
                content={
                    isRegister
                        ? 'Already have an account? Sign in'
                        : "Don't have an account? Sign up"
                }
                type='submit'
                isPrimary={false}
                style={{ marginTop: '10px' }}
                onClick={handleToggle}
            />
            {!isRegister && <div className={lostPw}>Lost your password?</div>}
        </div>
    );
}
