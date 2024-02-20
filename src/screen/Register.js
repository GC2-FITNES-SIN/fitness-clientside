import React, { useState } from "react";
import { Button, Container, ContainerFlexSameFlex, ScrollView, TextCustom, TextInput } from "./Styled";
import { SafeAreaView, Modal, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Register = () => {
	const navigation = useNavigation();
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [weight, setWeight] = useState();
	const [height, setHeight] = useState();
	const [age, setAge] = useState();
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedGender, setSelectedGender] = useState(null);
	const genderOptions = ["Male", "Female", "Other"];

	const submitForm = async (event) => {
		try {
			// const data = await axios.post(
			// 	"http://localhost:3000/register",
			// 	{ username, email, password, weight, height, age, selectedGender },
			// 	{ headers: { "Content-Type": "application/x-www-form-urlencoded" } }
			// );

			const data = await fetch("http://192.168.100.78/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: `username=${username}&email=${email}&password=${password}&weight=${weight}&height=${height}&age=${age}&selectedGender=${selectedGender}`,
			}).then((res) => res.json());

			console.log(data, "<<<<");

			// navigation("Login")
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Container $padding={"15px"} $backgroundColor={"#1b1b1d"}>
				<ContainerFlexSameFlex $column $justifyContent={"center"}>
					<TextCustom $fontSize={"20px"} $color={"white"}>
						Hey there,
					</TextCustom>
					<TextCustom $fontWeight={"700"} $fontSize={"20px"} $color={"white"}>
						Create an Account
					</TextCustom>
				</ContainerFlexSameFlex>
				<ContainerFlexSameFlex $column $gap={"10px"} $justifyContent={"center"} $flex={"4"} $padding={"0px"}>
					<ScrollView>
						<ContainerFlexSameFlex>
							<TextInput
								value={username}
								onChangeText={setUsername}
								$backgroundColor={"#F7F8F8"}
								$borderRadius={"14px"}
								$height={"48px"}
								placeholder="Username"
								$fontSize={"12px"}
								$color={"#000"}
							/>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex>
							<TextInput
								value={email}
								onChangeText={setEmail}
								$backgroundColor={"#F7F8F8"}
								$borderRadius={"14px"}
								$height={"48px"}
								placeholder="Email"
								$fontSize={"12px"}
								$color={"#000"}
							/>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex>
							<TextInput
								value={password}
								onChangeText={setPassword}
								$backgroundColor={"#F7F8F8"}
								$borderRadius={"14px"}
								$height={"48px"}
								placeholder="Password"
								secureTextEntry
								$fontSize={"12px"}
								$color={"#000"}
							/>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $justifyContent={"space-between"}>
							<TextInput
								value={weight}
								onChangeText={setWeight}
								$backgroundColor={"#F7F8F8"}
								$borderRadius={"14px"}
								$width={"45%"}
								$height={"48px"}
								placeholder="Weight"
								$fontSize={"12px"}
								$color={"#000"}
							/>
							<TextInput
								value={height}
								onChangeText={setHeight}
								$backgroundColor={"#F7F8F8"}
								$borderRadius={"14px"}
								$width={"45%"}
								$height={"48px"}
								placeholder="Height"
								$fontSize={"12px"}
								$color={"#000"}
							/>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex>
							<TextInput
								value={age}
								onChangeText={setAge}
								$backgroundColor={"#F7F8F8"}
								$borderRadius={"14px"}
								$height={"48px"}
								placeholder="Age"
								$fontSize={"12px"}
								$color={"#000"}
							/>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $justifyContent={"center"}>
							<TouchableOpacity onPress={() => setModalVisible(true)}>
								<View style={{ backgroundColor: "#F7F8F8", borderRadius: 14, height: 48, justifyContent: "center" }}>
									<TextCustom $fontSize={"12px"} $width={"322px"} $color={"#686868"}>
										{selectedGender || "Select Gender"}
									</TextCustom>
								</View>
							</TouchableOpacity>
							<Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
								<View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
									<View style={{ backgroundColor: "#FFFFFF", borderRadius: 14, padding: 20, width: 100, gap: 10 }}>
										{genderOptions.map((option, index) => (
											<TouchableOpacity
												key={index}
												onPress={() => {
													setSelectedGender(option);
													setModalVisible(false);
												}}
											>
												<TextCustom $fontSize={"14px"} $color={"#686868"}>
													{option}
												</TextCustom>
											</TouchableOpacity>
										))}
									</View>
								</View>
							</Modal>
						</ContainerFlexSameFlex>
					</ScrollView>
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
