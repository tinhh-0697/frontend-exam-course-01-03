import styled from 'styled-components';
import { fontFamily } from '../variable';
import { breakpoints } from '../mixins/responsive';

export const Wrap = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.main};
  font-family: ${fontFamily.fontBase};

  @media (max-width: ${breakpoints.md}) {
    position: relative;
    display: block;
  }
`;

export const Main = styled.section`
  flex: 1;
`;

export const MainContent = styled.div`
  @media (max-width: ${breakpoints.md}) {
    height: ${(props) => (props.path ? '100%' : '100vh')};
  }
`;
