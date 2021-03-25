import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  & > div {
    max-width: 1220px;
    width: 100%;
    margin: 0 auto;

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
      <div>
        <h1>All Products</h1>
        
        <p>A 360° look at Lumin</p>
        
      </div>
     
    </StyledContainer>
  );
}



export default Header;
