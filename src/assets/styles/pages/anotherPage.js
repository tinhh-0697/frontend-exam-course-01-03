import styled from 'styled-components';
import { fontSize } from '../variable';

export const Text = styled.p`
  color: ${({ theme }) => theme.tableTitle};
  text-align: center;
  font-size: ${fontSize.fontSizeXLarge};
`;
