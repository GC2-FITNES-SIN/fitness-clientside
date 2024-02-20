import React, { useContext } from "react";
import { Button, Container, ContainerFlexSameFlex, ProfileRounded, ScrollView, TextCustom } from "./Styled";
import * as SecureStore from "expo-secure-store";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContext from "../store/Auth";

const Profile = () => {
	const pressHandler = () => {
		console.log("touch");
	};

	const { setLogin } = useContext(AuthContext);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<Container $padding={"15px"} $backgroundColor={"#1b1b1d"}>
					{/* name section */}
					<ContainerFlexSameFlex $gap={"15px"} $justifyContent={"space-between"} $alignItems={"center"}>
						<ProfileRounded src="https://plus.unsplash.com/premium_photo-1689703068866-5fcba89130ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" />
						<ContainerFlexSameFlex $flex={2} $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								Stefani Wong
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
								180 cm
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
								180 cm
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
								180 cm
							</TextCustom>
							<TextCustom $fontSize={"12.5px"}>Height</TextCustom>
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
							Overweight
						</TextCustom>
						<ContainerFlexSameFlex $justifyContent={"center"}>
							<Image source={require("../../assets/obes.png")} style={{ width: 100, height: 100, objectFit: "contain" }} />
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
								Stefani Wong
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								Username
							</TextCustom>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
								Stefani Wong
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								Email
							</TextCustom>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
								StefaniWong@gmail.com
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								Phone Number
							</TextCustom>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
								0812xxxxx
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								Gender
							</TextCustom>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
								Non Biner
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								Weight
							</TextCustom>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
								70 Kg
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								Height
							</TextCustom>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
								168
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"17.5px"} $fontWeight={"bold"} $textAlign={"left"}>
								Weight
							</TextCustom>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
								70 Kg
							</TextCustom>
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
							SecureStore.deleteItemAsync("access_Token");
							SecureStore.deleteItemAsync("profile");
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
