import React, {useState} from 'react';
import styled from 'styled-components';
import Tutorial from '../../comps/Tutorial';
import Navigation from  '../../comps/Navigation';

import ArrowRight from '../../assets/right_arrow.png';


const Container  = styled.div`
border: 1px solid black;
width: 414px;
height: 868px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

#text {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 21px;
    width: 100%;
    margin-left: 50px;
    margin-bottom: 30px;
    margin-top: 50px;
}

`;
const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top:50px;
max-width: 90%;
min-width: 90%;
`;




const TutorialPage = () => {

    
    return <Container>
        <Main>
        <Tutorial/>
        </Main>
        <Navigation/>
    </Container>
}

// const TutorialPage = () => {

//     const Step1 = ({Next}) => {
//         return (
//             <Tutorial  bshadow={"none"}
//                         bgcolor={"none"}
//                         icon4={ArrowRight}
//                         onClick={Next}
//                        />
//         )
//     }
    
//     const Step2 = ({NextNext}) => {
//         return (
//             <Tutorial2 
//              onClick={NextNext}/>
//         )
//     }
    
//     const Step3 = ({}) => {
//         const history = useHistory();
    
//         return (
//             <Tutorial3 />
//         )
//     }

//     return  <Container>
//                 <Main >
//                 <StepWizard>
//                     <Step1  />
//                     <Step2 />
//                     <Step3 />
//                 </StepWizard>
//                 </Main>
//              <Navigation />
//             </Container>

// }

export default TutorialPage

