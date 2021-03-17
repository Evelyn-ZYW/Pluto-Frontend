import React from 'react';
import styled from 'styled-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';

import Button from '@material-ui/core/Button';

import Home from './icons/home.png'
import New from './icons/new.png'
import Puppy from './icons/puppy.png'


const tutorialSteps = [
  {
    label: 'This is the homepage button. Here you will find all the posts. ',
    imgPath:[Home]
  },
  {
    label: 'Click this button to upload a post. Here you will choose a picture and add add a caption.',
    imgPath:[New]
  },

  {
    label: 'Click this button to view your profile. Here you will find all your posts. You can also change your settings here. ',
    imgPath:[Puppy]
  }
  
];



// const useStyles = makeStyles((theme) => ({

//   img: {
//     height: 123,
//     maxWidth: 123,
//     margin:30,
//     overflow: 'hidden',
//     display: 'flex',
//     alignItems: 'center',
  
  
//   },
// }));

const Container = styled.div`
    max-width: 300px;
    min-width: 300px;
    max-height: 557px;
    min-height: 557px;
    border-radius: 35px;
    background: rgba(220, 216, 241, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;

  
`;
// const Main = styled.div`
   
//     align-items: center;
//     justify-content: center;
//     display: flex;
//     margin-bottom:0px;
// `;

const Image = styled.img`
    margin:0px;
    max-width: 123px;
    min-width: 123px;
`;

const Middle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    bottom:0;
`;

const Text = styled.h4`

`;

const Bottom = styled.div`
background: rgba(220, 216, 241, 0.8);
`;

export default function Tutorial() {

// const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
     <Container>

    {/* <Main>
        <Image
                // className={classes.img}
                src={tutorialSteps[activeStep].imgPath}
                alt={tutorialSteps[activeStep].label}
            />
        
        
    </Main>
         */}
  

        <Middle>
        <Image
                // className={classes.img}
                src={tutorialSteps[activeStep].imgPath}
                alt={tutorialSteps[activeStep].label}
            />
        <Text>{tutorialSteps[activeStep].label}</Text>
        </Middle>

         <Bottom>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
           
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            Back
          </Button>
        }
      />
      </Bottom>
       </Container>
    </div>
  );
}


