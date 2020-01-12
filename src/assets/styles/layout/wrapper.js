import styled from 'styled-components';

export const Wrap = styled.section`
  display: flex;
  font-family: 'Rubik', sans-serif;

  @media (max-width: 1140px) {
    position: relative;
  }
`;

export const Main = styled.section`
  flex: 1;
`;

export const MainContent = styled.div`
  height: 100%;

  @media (max-width: 1140px) {
    position: absolute;
    left: 0;
  }

  @media (max-width: 740px) {
    min-width: 500px;
  }
`;
