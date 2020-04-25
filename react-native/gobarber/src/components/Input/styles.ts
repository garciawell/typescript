import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isError: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 55px;
  padding: 016px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #232129;

  ${(props) =>
    props.isError &&
    css`
      border: 2px solid #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #ff9000;
    `}

  flex-direction: row;
  align-items: center;
`;

export const TextInputStyled = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  height: 40px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
