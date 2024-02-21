import React, { useContext, useState } from "react";
import { Button, Container, ContainerFlexSameFlex, TextCustom, TextInput } from "./Styled";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";
import { Axios, calculateBMI } from "../utils";
import AuthContext from "../store/Auth";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const { login, setLogin, setProfile, setBmi } = useContext(AuthContext);
	const { navigate } = useNavigation();

	const submitForm = () => {
		Axios({
			method: "POST",
			url: "/login",
			data: { email, password },
		})
			.then((res) => {
				const { data } = res;
				const { access_Token, ...user } = data;
				SecureStore.setItem("access_token", access_Token);
				SecureStore.setItem("profile", JSON.stringify(user));
				const bmi = calculateBMI(user.weight, user.height, user.gender);
				SecureStore.setItem("bmi", JSON.stringify(bmi));
				setBmi(bmi);
				setProfile(user);
				setLogin(true);
			})
			.catch((err) => console.log(err));
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Container $padding={"15px"} $backgroundColor={"#1b1b1d"}>
				<ContainerFlexSameFlex $column $justifyContent={"flex-end"}>
					<TextCustom $fontSize={"20px"} $color={"white"}>
						Hey there,
					</TextCustom>
					<TextCustom $fontWeight={"700"} $fontSize={"20px"} $color={"white"}>
						Welcome Back
					</TextCustom>
				</ContainerFlexSameFlex>
				<ContainerFlexSameFlex $column $gap={"15px"} $justifyContent={"center"}>
					<TextInput
						value={email}
						onChangeText={setEmail}
						$backgroundColor={"#F7F8F8"}
						$borderRadius={"14px"}
						$height={"48px"}
						placeholder="Email"
						$fontSize={"12px"}
						$color={"#000"}
					></TextInput>
					<TextInput
						value={password}
						secureTextEntry
						onChangeText={setPassword}
						$backgroundColor={"#F7F8F8"}
						$borderRadius={"14px"}
						$height={"48px"}
						placeholder="Password"
						$fontSize={"12px"}
						$color={"#000"}
					></TextInput>
				</ContainerFlexSameFlex>
				<ContainerFlexSameFlex $column $gap={"10px"} $justifyContent={"center"}>
					<Button
						onPress={submitForm}
						$backgroundColor={"#bd54eb"}
						$height={"60px"}
						$borderRadius={"99px"}
						$padding={"20px 0px 0px 0px"}
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
							Login
						</TextCustom>
					</Button>
					<Button onPress={() => navigate("Register")} $backgroundColor={"transparent"}>
						<TextCustom $fontSize={"14px"} $color={"white"} $textAlign={"center"}>
							Don’t have an account yet? <TextCustom $color={"#bd54eb"}>Register</TextCustom>
						</TextCustom>
					</Button>
				</ContainerFlexSameFlex>
			</Container>
		</SafeAreaView>
	);
};

export default Login;
