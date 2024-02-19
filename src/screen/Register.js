import React from "react";
import { Button, Container, ContainerFlexSameFlex, TextCustom, TextInput } from "./Styled";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Register = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar backgroundColor="#1b1b1d" barStyle="light-content" />
			<Container $padding={"15px"} $backgroundColor={"#1b1b1d"}>
				<ContainerFlexSameFlex $column $justifyContent={"flex-end"}>
					<TextCustom $fontSize={"20px"} $color={"white"}>
						Hey there,
					</TextCustom>
					<TextCustom $fontWeight={"700"} $fontSize={"20px"} $color={"white"}>
						Create an Account
					</TextCustom>
				</ContainerFlexSameFlex>
				<ContainerFlexSameFlex $column $gap={"15px"} $justifyContent={"center"} $padding={"30px 10px 10px 10px"}>
					<TextInput $backgroundColor={"#F7F8F8"} $borderRadius={"14px"} $height={"48px"} placeholder="First Name" $fontSize={"12px"}>

					</TextInput>
					<TextInput $backgroundColor={"#F7F8F8"} $borderRadius={"14px"} $height={"48px"} placeholder="Last Name" $fontSize={"12px"}>

					</TextInput>
					<TextInput $backgroundColor={"#F7F8F8"} $borderRadius={"14px"} $height={"48px"} placeholder="Email" $fontSize={"12px"}>

					</TextInput>
					<TextInput $backgroundColor={"#F7F8F8"} $borderRadius={"14px"} $height={"48px"} placeholder="Password" $fontSize={"12px"}>

					</TextInput>
				</ContainerFlexSameFlex>
				<ContainerFlexSameFlex $column $gap={"10px"} $justifyContent={"center"}>
					<Button $backgroundColor={"#bd54eb"} $height={"60px"} $borderRadius={"99px"} $padding={"20px 0px 0px 0px"}
						style={{
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 10,
							},
							shadowOpacity: 0.3,
							shadowRadius: 22,
							elevation: 3,
							marginTop: 5,
							marginBottom: 5,
						}}
					>
						<TextCustom $fontWeight={"700"} $fontSize={"16px"} $color={"#FFFFFF"}>
							Register
						</TextCustom>
					</Button>
					<TextCustom $fontSize={"14px"} $color={"white"}>
						Already have an account? Login
					</TextCustom>
				</ContainerFlexSameFlex>
			</Container>
		</SafeAreaView>
	);
};

export default Register;
