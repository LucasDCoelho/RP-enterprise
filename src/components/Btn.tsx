import { Pressable, Text } from "react-native";
import  styled  from "styled-components/native/dist/types";

interface btnProps{
    style?: typeof styled;
    btnText: string;
    press?: ()=>{};
}

export function Btn({ style, btnText, press }: btnProps){
    return(
        <>
            <Pressable style={style} onPress={press}>
                <Text style={style}>{btnText}</Text>
            </Pressable>
        </>
    );
}

