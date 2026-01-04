import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
    const location = useLocation();
    const querySearch = new URLSearchParams(location.search);
    const step = querySearch.get("step");

    // Convert URL step to number and set as initial activeStep
    // Default to 0 if no step in URL or if invalid
    const initialStep = step ? parseInt(step, 10) : 0;
    const [activeStep, setActiveStep] = React.useState(initialStep);

    React.useEffect(() => {
        // Update activeStep when URL changes
        if (step) {
            const stepNum = parseInt(step, 10);
            if (!isNaN(stepNum) && stepNum >= 0 && stepNum < steps.length) {
                setActiveStep(stepNum);
            }
        }
    }, [step]);

    const navigate = useNavigate();

    const handleNext = () => {
        const nextStep = activeStep + 1;
        setActiveStep(nextStep);
        navigate(`?step=${nextStep}`);
    };

    const handleBack = () => {
        const prevStep = activeStep - 1;
        setActiveStep(prevStep);
        navigate(`?step=${prevStep}`);
    };

    return (
        <div className='px-10 lg:px-20'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                    </React.Fragment>
                ) : (
                    <React.Fragment>

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>



                        </Box>
                        <div className='mt-10'>
                            {step == 1 ? <DeliveryAddressForm /> : <OrderSummary />}
                        </div>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}