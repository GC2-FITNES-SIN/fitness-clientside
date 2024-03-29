import React, { useCallback, useContext, useEffect, useState } from "react";
import { Button, Container, ContainerFlexSameFlex, ProfileRounded, ScrollView, TextCustom } from "./Styled";
import * as SecureStore from "expo-secure-store";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContext from "../store/Auth";
import { Axios } from "../utils";
import { useFocusEffect } from "@react-navigation/native";

const Profile = () => {
	const [userRoutines, setUserRoutines] = useState([]);

	const { profile, setProfile, bmi, setLogin, setBmi } = useContext(AuthContext);
	const pressHandler = () => {
		console.log("touchhh");
	};

	// useEffect(() => {
	// 	Axios({
	// 		url: "/user-routines",
	// 		method: "get",
	// 		headers: {
	// 			Authorization: "Bearer " + SecureStore.getItem("access_token"),
	// 		},
	// 	}).then((res) => {
	// 		// console.log(res.data, "========== USER ROUTINES =========", res.data[0].routineData);
	// 		setUserRoutines(res.data[0].routineData);
	// 	});
	// }, []);

	useFocusEffect(
		useCallback(() => {
			Axios({
				url: "/user-routines",
				method: "get",
				headers: {
					Authorization: "Bearer " + SecureStore.getItem("access_token"),
				},
			}).then((res) => {
				// console.log(res.data, "========== USER ROUTINES =========", res.data[0].routineData);
				setUserRoutines(res.data[0].routineData);
			});
		}, [])
	);

	console.log(userRoutines, "<<<<<<<<<<<<");

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<Container $padding={"15px"} $backgroundColor={"#1b1b1d"}>
					{/* name section */}
					<ContainerFlexSameFlex $gap={"15px"} $justifyContent={"space-between"} $alignItems={"center"}>
						<ProfileRounded src="https://plus.unsplash.com/premium_photo-1689703068866-5fcba89130ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" />
						<ContainerFlexSameFlex $flex={2} $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								{profile.username}
							</TextCustom>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
								Lose Fat Program
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $flex={2} $justifyContent={"flex-end"}>
							<Button onPress={pressHandler} style={{ paddingHorizontal: 20, paddingVertical: 10 }} $backgroundColor={"#bd54eb"} $borderRadius={"16px"}>
								<TextCustom $color={"#fff"}>Edit</TextCustom>
							</Button>
						</ContainerFlexSameFlex>
					</ContainerFlexSameFlex>

					{/* weight, height, age section */}
					<ContainerFlexSameFlex $gap={"15px"}>
						<ContainerFlexSameFlex
							$column
							$width={"95px"}
							$height={"65px"}
							$borderRadius={"16px"}
							$backgroundColor={"#252527"}
							style={{
								shadowColor: "#000",
								shadowOffset: {
									width: 0,
									height: 1,
								},
								shadowOpacity: 0.22,
								shadowRadius: 2.22,
								elevation: 3,
							}}
						>
							<TextCustom $color={"#bd54eb"} $fontSize={"15px"}>
								{profile.height ? profile.height : "-"} cm
							</TextCustom>
							<TextCustom $fontSize={"12.5px"}>Height</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex
							$column
							$width={"95px"}
							$height={"65px"}
							$borderRadius={"16px"}
							$backgroundColor={"#252527"}
							style={{
								shadowColor: "#000",
								shadowOffset: {
									width: 0,
									height: 1,
								},
								shadowOpacity: 0.22,
								shadowRadius: 2.22,
								elevation: 3,
							}}
						>
							<TextCustom $color={"#bd54eb"} $fontSize={"15px"}>
								{profile?.weight} kg
							</TextCustom>
							<TextCustom $fontSize={"12.5px"}>Weight</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex
							$column
							$width={"95px"}
							$height={"65px"}
							$borderRadius={"16px"}
							$backgroundColor={"#252527"}
							style={{
								shadowColor: "#000",
								shadowOffset: {
									width: 0,
									height: 1,
								},
								shadowOpacity: 0.22,
								shadowRadius: 2.22,
								elevation: 3,
							}}
						>
							<TextCustom $color={"#bd54eb"} $fontSize={"15px"}>
								{profile?.age}
							</TextCustom>
							<TextCustom $fontSize={"12.5px"}>Age</TextCustom>
						</ContainerFlexSameFlex>
					</ContainerFlexSameFlex>

					{/* BMI Section */}
					<ContainerFlexSameFlex
						$gap={"15px"}
						$backgroundColor={"#252527"}
						$column
						style={{
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 1,
							},
							shadowOpacity: 0.22,
							shadowRadius: 2.22,
							elevation: 3,
							marginTop: 10,
							marginBottom: 10,
						}}
						$borderRadius={"16px"}
						$padding={"25px"}
					>
						<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
							{bmi.result}
						</TextCustom>
						<ContainerFlexSameFlex $justifyContent={"center"}>
							{bmi.result == "Obese" && <Image source={require("../../assets/obes.png")} style={{ width: 100, height: 100, objectFit: "contain" }} />}
							{bmi.result == "Overweight" && <Image source={require("../../assets/Overweight.png")} style={{ width: 100, height: 100, objectFit: "contain" }} />}
							{bmi.result == "Normal" && <Image source={require("../../assets/Normal.png")} style={{ width: 100, height: 100, objectFit: "contain" }} />}
							{bmi.result == "Underweight" && <Image source={require("../../assets/obes.png")} style={{ width: 100, height: 100, objectFit: "contain" }} />}
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column $gap={"10px"} $justifyContent={"center"}>
							<TextCustom>Your ideal weight :</TextCustom>
							<TextCustom $color={"#bd54eb"}>{bmi.ideal}</TextCustom>
						</ContainerFlexSameFlex>
					</ContainerFlexSameFlex>

					{/* details Section */}
					<ContainerFlexSameFlex
						style={{
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 1,
							},
							shadowOpacity: 0.22,
							shadowRadius: 2.22,
							elevation: 3,
							marginTop: 10,
							marginBottom: 10,
						}}
						$column
						$borderRadius={"16px"}
						$padding={"25px"}
						$backgroundColor={"#252527"}
					>
						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								Name
							</TextCustom>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
								{profile?.name ? profile.name : "-"}
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								Username
							</TextCustom>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
								{profile.username ? profile.username : "-"}
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								Email
							</TextCustom>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
								{profile.email}
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								Phone Number
							</TextCustom>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
								{profile.phonenumber ? profile.phonenumber : "-"}
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								Gender
							</TextCustom>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
								{profile.gender ? profile.gender : "-"}
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								Weight
							</TextCustom>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
								{profile.weight} Kg
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								Height
							</TextCustom>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
								{profile.height} cm
							</TextCustom>
						</ContainerFlexSameFlex>
					</ContainerFlexSameFlex>

					<ContainerFlexSameFlex
						style={{
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 1,
							},
							shadowOpacity: 0.22,
							shadowRadius: 2.22,
							elevation: 3,
							marginTop: 10,
							marginBottom: 10,
						}}
						$column
						$borderRadius={"16px"}
						$padding={"25px"}
						$backgroundColor={"#252527"}
					>
						<TextCustom $fontSize={"20px"} $fontWeight={"bold"}>
							Routines
						</TextCustom>
						<ContainerFlexSameFlex $gap={"10px"} $column>
							{userRoutines &&
								userRoutines.map((el, i) => {
									console.log(el, "el ==========");
									return (
										<Button $backgroundColor="transparent" $padding={"0px"} key={i} onPress={() => navigation.navigate("DetailRoutine", { id: el._id })}>
											<ContainerFlexSameFlex $borderRadius={"16px"} $flex={"1"} style={{ position: "relative", zIndex: 1 }} $column key={i}>
												<ContainerFlexSameFlex $flex={"1"} $height={"150px"} $padding={"0px"} $borderRadius={"16px"} style={{ overflow: "hidden" }}>
													<Image
														source={{
															uri: el.routineImageStart,
														}}
														style={{ width: "100%", height: "100%", objectFit: "fill" }}
													/>
												</ContainerFlexSameFlex>
												<ContainerFlexSameFlex $column>
													<ContainerFlexSameFlex $height={"50%"}>
														<TextCustom $fontSize={"16px"} $fontWeight={"normal"}>
															{el.routineName}
														</TextCustom>
													</ContainerFlexSameFlex>
												</ContainerFlexSameFlex>
											</ContainerFlexSameFlex>
										</Button>
									);
								})}
						</ContainerFlexSameFlex>
					</ContainerFlexSameFlex>

					<Button
						$borderRadius={"50px"}
						$backgroundColor={"#bd54eb"}
						style={{
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 1,
							},
							shadowOpacity: 0.22,
							shadowRadius: 2.22,
							elevation: 3,
							marginTop: 5,
							marginBottom: 5,
						}}
						onPress={async () => {
							console.log("masuk");
							SecureStore.deleteItemAsync("access_token");
							SecureStore.deleteItemAsync("access_Token");
							SecureStore.deleteItemAsync("profile");
							SecureStore.deleteItemAsync("bmi");
							setBmi();
							setProfile();
							setLogin(false);
						}}
					>
						<TextCustom $color={"white"} $textAlign={"center"}>
							Logout
						</TextCustom>
					</Button>
				</Container>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Profile;
