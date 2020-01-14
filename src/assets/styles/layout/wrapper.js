import styled from 'styled-components';

export const Wrap = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.main};
  font-family: 'Rubik', sans-serif;

  @media (max-width: 1140px) {
    position: relative;
    display: block;
  }
`;

export const Main = styled.section`
  flex: 1;
  @media (max-width: 1140px) {
    height: 100vh;
  }
`;

export const MainContent = styled.div``;
