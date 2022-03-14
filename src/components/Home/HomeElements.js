import styled from "styled-components";

export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HomeContent = styled.div`
  z-index: 3;
 
  position: absolute;
  padding: 8px 24px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-left: -50%;
  margin-top: -5%;
  @media screen and (max-width: 900px) {
    margin-left: 0;
    align-items: center;
    padding: 2px 24px;
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    margin-top: -10%;
    align-items: center;
    padding: 2px 24px;
    width: 100%;
  }
`;

export const HomeH1 = styled.h1`
  color: #fff;
  font-size: 5rem;
  font-weight: bolder;
  text-align: center;
  font-family: 'Work Sans', sans-serif;

  
  @media screen and (max-width: 480px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 3.2rem;
  }
`;
export const HomeP = styled.p`
  // margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  margin-right: 10px;

  @media screen and (max-width: 900px) {
    margin-top: 24px;
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-right: 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
    margin-right: 0;
  }
`;