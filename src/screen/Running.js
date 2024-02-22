import React, { useCallback, useEffect, useState } from "react";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Container, ContainerFlexSameFlex, TextCustom } from "./Styled";
import * as Location from "expo-location";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { useFocusEffect } from "@react-navigation/core";
import { Axios } from "../utils";
import * as SecureStore from "expo-secure-store";
export default function Running() {
	const [isRunning, setIsRunning] = useState(false);
	const [location, setLocation] = useState([]);
	const [time, setTime] = useState(0);
	const [errorMsg, setErrorMsg] = useState("");
	const [status, setStatus] = useState("");

	// const key = process.env.API_MAP_KEY;
	const key = "AIzaSyAY8BQuOsrMtH090joCx6JV7Nkn_AT0xnA";

	const isRunningToggle = async () => {
		if (isRunning) {
			await pushRunning();
		}

		// setLocation([]);
		setIsRunning(!isRunning);
	};

	const pushRunning = async () => {
		try {
			let body = { cordinates: location, duration: time };
			// body.cordinates.push({ latitude: 38.4220936, longitude: -121.7145457 });
			console.log("body running: ", body);
			await Axios({
				method: "POST",
				url: "/running-history",
				data: body,
				headers: {
					Authorization: `Bearer ${SecureStore.getItem("access_token")}`,
				},
			});

			console.log("success post");
		} catch (error) {
			console.log("error axios: ", error);
		}
	};

	useFocusEffect(
		useCallback(() => {
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let intervalLocation, intervalTime;
			if (status == "granted") {
				if (isRunning) {
					console.log("masuk granted scope true: ", intervalLocation, isRunning, "============", location.length);
					if (location.length === 0) {
						Location.getCurrentPositionAsync({}).then((res) => {
							setLocation([{ latitude: res.coords.latitude, longitude: res.coords.longitude }]);
						});
					}
					intervalLocation = setInterval(async () => {
						const currLocation = await Location.getCurrentPositionAsync({});
						console.log(currLocation, "===========================");

						setLocation((prevValue) => {
							return [...prevValue, { latitude: currLocation.coords.latitude, longitude: currLocation.coords.longitude }];
						});
					}, 10000);

					intervalTime = setInterval(() => {
						setTime((prevValue) => prevValue + 1);
					}, 1000);
				}
			}

			return async () => {
				clearInterval(intervalLocation);
				clearInterval(intervalTime);
				const currLocation = await Location.getCurrentPositionAsync({});
				setLocation((prevValue) => {
					return [...prevValue, { latitude: currLocation.coords.latitude, longitude: currLocation.coords.longitude }];
				});
			};
		}, [status, isRunning])
	);

	useEffect(() => {
		Location.requestForegroundPermissionsAsync().then((res) => {
			setStatus(res.status);
		});
	}, []);

	console.log(isRunning, time, location, "===============");

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Container $padding={"15px"} $backgroundColor={"#1b1b1d"}>
				{!isRunning && location.length != 0 && (
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
					<MapView
						initialRegion={{
							latitude: -6.26051972136238,
							longitude: 106.78170206252449,
							latitudeDelta: 0.01,
							longitudeDelta: 0.01,
						}}
						style={StyleSheet.absoluteFill}
					>
						{/* <MapViewDirections
							origin={{ latitude: -6.26051972136238, longitude: 106.78170206252449 }}
							destination={{ longitude: -6.263254134008508, latitude: 106.7822867640354 }}
							optimizeWaypoints={true}
							apikey="AIzaSyAY8BQuOsrMtH090joCx6JV7Nkn_AT0xnA"
							strokeColor="hotPink"
							strokeWidth={3}
						/> */}
					</MapView>
				</ContainerFlexSameFlex>
				{!isRunning && location.length != 0 && (
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
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: "100%",
		height: "100%",
	},
});
