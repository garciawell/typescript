import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInputStyled, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />
      <TextInputStyled
        placeholderTextColor="#666360"
        keyboardAppearance="dark"
        {...rest}
      />
    </Container>
  );
};

export default Input;
