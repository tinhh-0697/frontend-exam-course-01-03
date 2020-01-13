import styled from 'styled-components';

export const Wrap = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.main};
  font-family: 'Rubik', sans-serif;

  @media (max-width: 1140px) {
    position: relative;
  }
`;

export const Main = styled.section`
  flex: 1;
`;

export const MainContent = styled.div`
  @media (max-width: 1140px) {
    position: absolute;
    left: 0;
  }

  @media (max-width: 740px) {
    min-width: 500px;
  }
`;
