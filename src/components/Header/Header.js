import React from 'react';
import styled from 'styled-components';
import SpaceBottom from '../Space/SpaceBottom';

const StyledContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  & > div {
    width: 100%;
   
    h1 {
      font-family: 'Lora', serif;
      font-weight: 400;
      font-size: 2.5rem;
    }

    
  }
`

const Header = () => {
  return (
    <StyledContainer>
      <div className="jumbotron">
        <h1>All Products</h1>
        
        <SpaceBottom length={30}/>
        <p>A 360° look at Lumin</p>
        <SpaceBottom length={30}/>
      </div>
     
    </StyledContainer>
  );
}



export default Header;
