import styled from 'styled-components';
import { fontFamily } from 'styles/variable';
import { breakpoints } from 'styles/mixins/responsive';

export const Wrap = styled.section`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.main};
  font-family: ${fontFamily.fontBase};

  @media (max-width: ${breakpoints.md}) {
    position: relative;
    display: block;
    height: 100%;
  }
`;

export const Main = styled.section`
  overflow-y: auto;
  flex: 1;
`;

export const MainContent = styled.div`
  @media (max-width: ${breakpoints.md}) {
    height: ${(props) => (props.path ? '100%' : '100vh')};
    margin-top: 82px;
  }
`;
