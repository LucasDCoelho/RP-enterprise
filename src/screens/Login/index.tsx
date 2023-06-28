import { Text } from "react-native";
import { AccountForm } from "../../components/Forms/AccountForm";
import styled from "styled-components/native";

export function Login(){
    return(
        <Container>
            <Text>Divino Assist</Text>
            <AccountForm />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: #0F0F0F;
    align-items: center;
    justify-content: center;
`