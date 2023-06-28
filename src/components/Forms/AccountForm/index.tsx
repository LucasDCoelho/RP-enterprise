import { Btn } from "../../Btn"
import styled from "styled-components/native";


export function AccountForm(){
    return(
        <Form>
            <TInput
                placeholder="Login"
                placeholderTextColor={"#CCCCCC"}
                focusable
            />
             <TInput
                placeholder="Senha"
                placeholderTextColor={"#CCCCCC"}
                focusable
            />

            <Button 
                btnText="Entrar"
            />
        </Form>
        
    );
}

const Form = styled.View`
    border: 1px solid red;
    padding: 30%;
`

const TInput = styled.TextInput`
    background-color: #3D3D3D;
    color: #FF999D;
    width: 100;
`

const Button = styled(Btn)`
    background-color: #2B2B2B;
    color: #FF999D;
    padding: 3%;
    width: 100;
`

