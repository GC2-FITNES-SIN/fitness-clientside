import React, { useEffect, useState } from "react";
import { Button, Container, ContainerFlexSameFlex, ScrollView, TextCustom } from "./Styled";
import { Image, ToastAndroid, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

const Routines = () => {
	const [routinesCat, setRoutinesCat] = useState({
		underweight: [],
		normal: [],
		overweight: [],
		obesity: [],
	});
	const fetch = async (value) => {
		try {
			const { data } = await axios({
				url: "http://34.101.140.227/routines",
				method: "GET",
				headers: {
					Authorization: "Bearer " + SecureStore.getItem("access_token"),
				},
			});

			let hasil = {};

			data.data.forEach((el, i) => {
				if (!hasil[el.category]) hasil[el.category] = [];

				hasil[el.category].push(el);
			});

			setRoutinesCat({ ...routinesCat, ...hasil });

			// setRoutines(data);
		} catch (error) {
			console.log(error, "<<< error");
		}
	};

	const addRoutines = async (id, name) => {
		console.log("clicked", id);
		ToastAndroid.show(`Success add routine ${name}`, ToastAndroid.SHORT);
		try {
			const data = await axios({
				url: "http://34.101.140.227/user-routines",
				method: "POST",
				headers: {
					Authorization: "Bearer " + SecureStore.getItem("access_token"),
				},
				data: {
					RoutineId: id,
					scheduleDate: new Date(),
				},
			});

			console.log(data);
		} catch (err) {
			console.log(err, "<<< error");
		}
	};

	useEffect(() => {
		fetch();
	}, []);

	const navigation = useNavigation();
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar backgroundColor="#1b1b1d" barStyle="light-content" />
			<ScrollView>
				<Container $backgroundColor={"#1b1b1d"}>
					<ContainerFlexSameFlex $column $backgroundColor={"#1b1b1d"} $padding={"15px"} $gap={"15px"}>
						<TextCustom $textAlign={"left"} $color={"#bd54eb"} $fontSize={"20px"} $fontWeight={"700"}>
							Workout Routines
						</TextCustom>
						{/* loop here */}

						<ContainerFlexSameFlex $column $gap={"10px"}>
							<TextCustom $fontSize={"20px"} $color={"white"} $fontWeight={"700"} $textAlign={"left"}>
								Obesity
							</TextCustom>
							{routinesCat.obesity.slice(0, 3).map((el, i) => {
								return (
									<>
										<Button $backgroundColor="transparent" $padding={"0px"} key={i} onPress={() => navigation.navigate("DetailRoutine", { id: el._id })}>
											<ContainerFlexSameFlex $borderRadius={"16px"} $flex={"1"} style={{ position: "relative", zIndex: 1 }} key={i}>
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
														<TextCustom $fontSize={"16px"} $fontWeight={"bold"} $color={"#bd54eb"}>
															{el.routineName}
														</TextCustom>
													</ContainerFlexSameFlex>
													<ContainerFlexSameFlex $height={"50%"} $justifyContent={"center"} $alignItems={"center"} $gap={"5px"} $padding={"0px 10px 0px 10px"}>
														<Button
															$width={"100%"}
															$backgroundColor={"#fff"}
															$borderRadius={"8px"}
															style={{ zIndex: 9999, position: "relative" }}
															onPress={() => addRoutines(el._id, el.routineName)}
														>
															<TextCustom $color={"#000"} $fontSize={"12px"} $fontWeight={"bold"}>
																Add Routine
															</TextCustom>
														</Button>
													</ContainerFlexSameFlex>
												</ContainerFlexSameFlex>
											</ContainerFlexSameFlex>
										</Button>
									</>
								);
							})}
						</ContainerFlexSameFlex>
						{/* end loop*/}

						<ContainerFlexSameFlex $column $gap={"10px"}>
							<TextCustom $fontSize={"20px"} $color={"white"} $fontWeight={"700"} $textAlign={"left"}>
								Overweight
							</TextCustom>
							{routinesCat.overweight.slice(0, 3).map((el, i) => {
								return (
									<>
										<Button $backgroundColor="transparent" $padding={"0px"} key={i} onPress={() => navigation.navigate("DetailRoutine", { id: el._id })}>
											<ContainerFlexSameFlex $borderRadius={"16px"} $flex={"1"} style={{ position: "relative", zIndex: 1 }} key={i}>
												<ContainerFlexSameFlex $flex={"1"} $height={"150px"} $padding={"0px"} $borderRadius={"16px"} style={{ overflow: "hidden" }}>
													<Image
														source={{
															uri: el.routineImageStart,
														}}
														style={{ width: "100%", height: "100%", objectFit: "fill", zIndex: 10 }}
													/>
												</ContainerFlexSameFlex>
												<ContainerFlexSameFlex $column>
													<ContainerFlexSameFlex $height={"50%"}>
														<TextCustom $fontSize={"16px"} $fontWeight={"bold"} $color={"#bd54eb"}>
															{el.routineName}
														</TextCustom>
													</ContainerFlexSameFlex>
													<ContainerFlexSameFlex $height={"50%"} $justifyContent={"center"} $alignItems={"center"} $gap={"5px"} $padding={"0px 10px 0px 10px"}>
														<Button
															onPress={() => addRoutines(el._id, el.routineName)}
															$width={"100%"}
															$backgroundColor={"#fff"}
															$borderRadius={"8px"}
															style={{ zIndex: 9999, position: "relative" }}
														>
															<TextCustom $color={"#000"} $fontSize={"12px"} $fontWeight={"bold"}>
																Add Routine
															</TextCustom>
														</Button>
													</ContainerFlexSameFlex>
												</ContainerFlexSameFlex>
											</ContainerFlexSameFlex>
										</Button>
									</>
								);
							})}
						</ContainerFlexSameFlex>

						<ContainerFlexSameFlex $column $gap={"10px"}>
							<TextCustom $fontSize={"20px"} $color={"white"} $fontWeight={"700"} $textAlign={"left"}>
								Normal
							</TextCustom>
							{routinesCat.normal.slice(0, 3).map((el, i) => {
								return (
									<>
										<Button $backgroundColor="transparent" $padding={"0px"} key={i} onPress={() => navigation.navigate("DetailRoutine", { id: el._id })}>
											<ContainerFlexSameFlex $borderRadius={"16px"} $flex={"1"} style={{ position: "relative", zIndex: 1 }} key={i}>
												<ContainerFlexSameFlex $flex={"1"} $height={"150px"} $padding={"0px"} $borderRadius={"16px"} style={{ overflow: "hidden" }}>
													<Image
														source={{
															uri: el.routineImageStart,
														}}
														style={{ width: "100%", height: "100%", objectFit: "fill", zIndex: 10 }}
													/>
												</ContainerFlexSameFlex>
												<ContainerFlexSameFlex $column>
													<ContainerFlexSameFlex $height={"50%"}>
														<TextCustom $fontSize={"16px"} $fontWeight={"bold"} $color={"#bd54eb"}>
															{el.routineName}
														</TextCustom>
													</ContainerFlexSameFlex>
													<ContainerFlexSameFlex $height={"50%"} $justifyContent={"center"} $alignItems={"center"} $gap={"5px"} $padding={"0px 10px 0px 10px"}>
														<Button
															onPress={() => addRoutines(el._id, el.routineName)}
															$width={"100%"}
															$backgroundColor={"#fff"}
															$borderRadius={"8px"}
															style={{ zIndex: 9999, position: "relative" }}
														>
															<TextCustom $color={"#000"} $fontSize={"12px"} $fontWeight={"bold"}>
																Add Routine
															</TextCustom>
														</Button>
													</ContainerFlexSameFlex>
												</ContainerFlexSameFlex>
											</ContainerFlexSameFlex>
										</Button>
									</>
								);
							})}
						</ContainerFlexSameFlex>

						<ContainerFlexSameFlex $column $gap={"10px"}>
							<TextCustom $fontSize={"20px"} $color={"white"} $fontWeight={"700"} $textAlign={"left"}>
								Underweight
							</TextCustom>
							{routinesCat.underweight.slice(0, 3).map((el, i) => {
								return (
									<>
										<Button $backgroundColor="transparent" $padding={"0px"} key={i} onPress={() => navigation.navigate("DetailRoutine", { id: el._id })}>
											<ContainerFlexSameFlex $borderRadius={"16px"} $flex={"1"} style={{ position: "relative", zIndex: 1 }} key={i}>
												<ContainerFlexSameFlex $flex={"1"} $height={"150px"} $padding={"0px"} $borderRadius={"16px"} style={{ overflow: "hidden" }}>
													<Image
														source={{
															uri: el.routineImageStart,
														}}
														style={{ width: "100%", height: "100%", objectFit: "fill", zIndex: 10 }}
													/>
												</ContainerFlexSameFlex>
												<ContainerFlexSameFlex $column>
													<ContainerFlexSameFlex $height={"50%"}>
														<TextCustom $fontSize={"16px"} $fontWeight={"bold"} $color={"#bd54eb"}>
															{el.routineName}
														</TextCustom>
													</ContainerFlexSameFlex>
													<ContainerFlexSameFlex $height={"50%"} $justifyContent={"center"} $alignItems={"center"} $gap={"5px"} $padding={"0px 10px 0px 10px"}>
														<Button
															onPress={() => addRoutines(el._id, el.routineName)}
															$width={"100%"}
															$backgroundColor={"#fff"}
															$borderRadius={"8px"}
															style={{ zIndex: 9999, position: "relative" }}
														>
															<TextCustom $color={"#000"} $fontSize={"12px"} $fontWeight={"bold"}>
																Add Routine
															</TextCustom>
														</Button>
													</ContainerFlexSameFlex>
												</ContainerFlexSameFlex>
											</ContainerFlexSameFlex>
										</Button>
									</>
								);
							})}
						</ContainerFlexSameFlex>
					</ContainerFlexSameFlex>
				</Container>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Routines;
