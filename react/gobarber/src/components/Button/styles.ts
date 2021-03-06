import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border-radius: 10px;
  height: 56px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  margin-top: 16px;
  color: #312e38;
  font-weight: 600;
  transition: background-color 0.2s;
  font-size: 16px;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
