import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
`;

export const OneToThree = styled.div`
  display: flex;
  justify-content: center;

  button {
    font-size: 3rem;
    margin-left: 1rem;
    margin-top: 2rem;
    background-color: blue;
    color: white;
    width: 3rem;
    height: 4rem;
    text-align: center;
    pointer-events: none;
  }
`;

export const FourToSix = styled.div`
  display: flex;
  justify-content: center;

  button {
    font-size: 3rem;
    margin-left: 1rem;
    margin-top: 2rem;
    background-color: blue;
    color: white;
    width: 3rem;
    height: 4rem;
    text-align: center;
    pointer-events: none;
  }
`;

export const SevenToNine = styled.div`
  display: flex;
  justify-content: center;

  button {
    font-size: 3rem;
    margin-left: 1rem;
    margin-top: 2rem;
    background-color: blue;
    color: white;
    width: 3rem;
    height: 4rem;
    text-align: center;
    pointer-events: none;
  }
`;

export const Zero = styled.div`
  display: flex;
  justify-content: center;

  button {
    font-size: 3rem;
    margin-left: 1rem;
    margin-top: 2rem;
    background-color: blue;
    color: white;
    width: 3rem;
    height: 4rem;
    text-align: center;
    pointer-events: none;
  }
`;

export const OneToThreeClick = styled.div`
  display: flex;
  justify-content: center;

  button {
    font-size: 3rem;
    margin-left: 1rem;
    background-color: blue;
    color: white;
    width: 3rem;
    height: 4rem;
    text-align: center;
  }

  button:active {
    background-color: red;
  }
`;
export const FourToSixClick = styled.div`
  display: flex;
  justify-content: center;

  button {
    font-size: 3rem;
    margin-left: 1rem;
    margin-top: 2rem;
    background-color: blue;
    color: white;
    width: 3rem;
    height: 4rem;
    text-align: center;
  }

  button:active {
    background-color: red;
  }
`;

export const SevenToNineClick = styled.div`
  display: flex;
  justify-content: center;

  button {
    font-size: 3rem;
    margin-left: 1rem;
    margin-top: 2rem;
    background-color: blue;
    color: white;
    width: 3rem;
    height: 4rem;
    text-align: center;
  }

  button:active {
    background-color: red;
  }
`;

export const ZeroClick = styled.div`
  display: flex;
  justify-content: center;

  button {
    font-size: 3rem;
    margin-left: 1rem;
    margin-top: 2rem;
    background-color: blue;
    color: white;
    width: 3rem;
    height: 4rem;
    text-align: center;
  }

  button:active {
    background-color: red;
  }
`;

export const EffectNumber = styled.button`
  button {
    font-size: 3rem;
    margin-left: 1rem;
    margin-top: 2rem;
    color: white;
    width: 3rem;
    height: 4rem;
    text-align: center;
    pointer-events: none;
    background-color: black;
  }

  &.button {
    animation: ${blink} 0.5s infinite;
  }
`;
