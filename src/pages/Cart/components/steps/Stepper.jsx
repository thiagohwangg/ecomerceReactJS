import React, { useContext } from 'react'
import styles from '../../styles.module.scss'
import cls from 'classnames';
import { StepperContext } from '@/contexts/SteperProvider';

export default function Stepper({number, content, isDisabled}) {
  const {setCurrentStep} = useContext(StepperContext)
    const {stepper, numberStep, textStep, isDisabledNumber, isDisabledText} = styles
  return (
    <div className={stepper} onClick={() => setCurrentStep(number)}>
        <div className={cls(numberStep, {[isDisabledNumber]: isDisabled})}>{number}</div>
        <div className={cls(textStep, {[isDisabledText]: isDisabled})}>{content}</div>
    </div>
  )
}
