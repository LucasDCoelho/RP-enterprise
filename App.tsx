import { Routes } from './src/routes';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export default function App() {

  return (
    <Container>
      <Routes />
      <StatusBar translucent barStyle={"light-content"} backgroundColor="transparent" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #0F0F0F;
`;

