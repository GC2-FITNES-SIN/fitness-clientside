import React from "react";
import { Button, Container, ContainerFlexSameFlex, ScrollView, TextCustom, TextInput } from "./Styled";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailRoutine = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container $backgroundColor={"#1b1b1d"} $padding={"15px"} $gap={"15px"}>
                <ContainerFlexSameFlex $flex={"2"} $backgroundColor={"white"} $borderRadius={"20px"}>

                </ContainerFlexSameFlex>
                <ContainerFlexSameFlex $backgroundColor={"#bd54eb"} $borderRadius={"20px"} $column>
                    <ContainerFlexSameFlex>
                        <TextCustom>
                            Excersice 1
                        </TextCustom>
                    </ContainerFlexSameFlex>
                    <ContainerFlexSameFlex>
                        <ScrollView>
                            <TextCustom>
                                Adipisicing velit aute esse ex aute ut deserunt id nostrud. Nisi cupidatat mollit aliqua occaecat duis cillum et fugiat. Cupidatat adipisicing id mollit veniam non. Adipisicing occaecat labore incididunt do mollit qui dolor irure enim eu incididunt reprehenderit minim. In aute ipsum commodo aliqua sunt duis magna in.
                            </TextCustom>
                        </ScrollView>
                    </ContainerFlexSameFlex>
                </ContainerFlexSameFlex>
            </Container>
        </SafeAreaView>
    );
};

export default DetailRoutine;






