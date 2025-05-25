import React, { useContext } from 'react'
import { StepperContext } from '@/contexts/SteperProvider';
import Contents from '@/pages/Cart/components/contents/Contents';

export default function ContentStep() {
    const {currentStep} = useContext(StepperContext)
        
        const handleRenderContent = () => {
            switch (currentStep) {
                case 1:
                    return <Contents />;
                case 2:
                    return <div>2</div>;
                case 3:
                    return <div>3</div>;
            }
        }
  return (
    <>{handleRenderContent()}</>
  )
}
