import React, { useState } from "react";
import { Button, Container, ContainerFlexSameFlex, TextCustom } from "./Styled";
import { Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";

const Running = () => {
	const [isRunning, setIsRunning] = useState(false);
	const [location, setLocation] = useState([]);

	const isRunningToggle = () => {
		setIsRunning(!isRunning);
	};

	console.log(isRunning, "<<");

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Container $padding={"15px"} $backgroundColor={"#1b1b1d"}>
				{isRunning && (
					<ContainerFlexSameFlex
						$column
						$justifyContent={"center"}
						alignItems={"center"}
						style={{
							shadowColor: "#1b1b1d",
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
					>
						<TextCustom $color={"#bd54eb"} $fontSize={"40px"} $fontWeight={"bold"}>
							15:43:02
						</TextCustom>
						<TextCustom $fontSize={"15px"} $color={"#bd54eb"}>
							duration
						</TextCustom>
					</ContainerFlexSameFlex>
				)}
				<ContainerFlexSameFlex
					$flex={"4"}
					$column
					$padding={"0px"}
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
				>
					<Image
						source={{ uri: "https://awsimages.detik.net.id/visual/2023/09/06/google-maps-ktt-asean_169.png?w=650" }}
						style={{ width: "100%", height: "100%", borderRadius: 16 }}
					/>
				</ContainerFlexSameFlex>
				{isRunning && (
					<ContainerFlexSameFlex
						$backgroundColor={"white"}
						$gap={"5px"}
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
					>
						<ContainerFlexSameFlex $column $justifyContent={"center"} $alignItems={"center"} $padding={"0px"} $backgroundColor={"white"} $gap={"3px"}>
							<FontAwesome name="running" size={30} color="#bd54eb" />
							<TextCustom $fontSize={"16px"} $fontWeight={"bold"} $color={"#bd54eb"}>
								5.4 Km
							</TextCustom>
							<TextCustom $fontSize={"12px"} $fontWeight={"bold"} $color={"#bd54eb"}>
								Distance
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column $justifyContent={"center"} $alignItems={"center"} $padding={"0px"} $backgroundColor={"white"} $gap={"3px"}>
							<FontAwesome name="burn" size={30} color="#bd54eb" />
							<TextCustom $fontSize={"16px"} $fontWeight={"bold"} $color={"#bd54eb"}>
								238 Kal
							</TextCustom>
							<TextCustom $fontSize={"12px"} $fontWeight={"bold"} $color={"#bd54eb"}>
								Calories
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column $justifyContent={"center"} $alignItems={"center"} $padding={"0px"} $backgroundColor={"white"} $gap={"3px"}>
							<FontAwesome name="heartbeat" size={30} color="#bd54eb" />
							<TextCustom $fontSize={"16px"} $fontWeight={"bold"} $color={"#bd54eb"}>
								128 Bpm
							</TextCustom>
							<TextCustom $fontSize={"12px"} $fontWeight={"bold"} $color={"#bd54eb"}>
								Heart Rate
							</TextCustom>
						</ContainerFlexSameFlex>
					</ContainerFlexSameFlex>
				)}
				<ContainerFlexSameFlex $column $justifyContent={"center"} $alignItems={"center"}>
					<Button
						onPress={isRunningToggle}
						$backgroundColor={"#bd54eb"}
						$width={"80px"}
						$height={"80px"}
						$borderRadius={"50px"}
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
					></Button>

					<FontAwesome
						name={isRunning ? "stop-circle" : "play-circle"}
						size={30}
						color="white"
						style={{
							position: "absolute",
						}}
					/>
				</ContainerFlexSameFlex>
			</Container>
		</SafeAreaView>
	);
};

export default Running;
