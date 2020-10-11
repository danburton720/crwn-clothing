import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
        height: 75vh;  
  }
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageTextHeading = styled.h2`
    font-size: 28px;
    color: #2f8e89;
    @media screen and (max-width: 800px) {
        position: relative;
        top: 10vw;  
    }
`;

export const ErrorImageText = styled.p`
  font-size: 24px;
  color: #2f8e89;    
  text-align: center;  
  @media screen and (max-width: 800px) {
        position: relative;
        top: 5vw;
  }
`;
