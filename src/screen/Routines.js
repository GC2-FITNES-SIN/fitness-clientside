import React, { useEffect, useState } from "react";
import { Container, ContainerFlexSameFlex, ScrollView, TextCustom } from "./Styled";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import * as SecureStore from 'expo-secure-store'

const Routines = () => {
	const [routines, setRoutines] = useState([]);
	const fetch = async (value) => {
		try {
			const { data } = await axios({
				url: "https://4a12-139-228-111-126.ngrok-free.app/routines",
				method: "GET",
				headers: {
					Authorization: "Bearer " + SecureStore.getItem("access_token"),
				},
			});
			console.log(data, "<<< INI DATA ROUTINE");
			setRoutines(data);
		} catch (error) {
			console.log(error, '<<< error');
		}
	};

	useEffect(() => {
		fetch();
	}, []);
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar backgroundColor="#1b1b1d" barStyle="light-content" />
			<ScrollView>
				<Container>
					<ContainerFlexSameFlex $column $backgroundColor={"#1b1b1d"} $padding={"15px"} $gap={"15px"}>
						<TextCustom $textAlign={"left"} $color={"#bd54eb"}>
							Workout Routines
						</TextCustom>
						{/* loop here */}
						<ContainerFlexSameFlex $column $gap={"5px"}>
							<TextCustom $fontSize={"24px"} $color={"white"} $fontWeight={"700"} $textAlign={"left"}>
								Obesity
							</TextCustom>
							<ContainerFlexSameFlex $width={"100%"} $borderRadius={"16px"} $flex={"1"}>
								<ContainerFlexSameFlex $flex={"1"} $width={"150px"} $height={"150px"} style={{ position: "relative", overflow: "hidden" }}>
									<Image
										source={{
											uri: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9keSUyMG1hc3MlMjBpbmRleCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
										}}
										style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16, zIndex: 10 }}
									/>
								</ContainerFlexSameFlex>
								<ContainerFlexSameFlex $flex={"1"} $width={"150px"} $height={"150px"} style={{ position: "relative" }}>
									<Image
										source={{
											uri: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9keSUyMG1hc3MlMjBpbmRleCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
										}}
										style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16, zIndex: 10 }}
									/>
								</ContainerFlexSameFlex>
								<ContainerFlexSameFlex $flex={"1"} $width={"150px"} $height={"150px"} style={{ position: "relative" }}>
									<Image
										source={{
											uri: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9keSUyMG1hc3MlMjBpbmRleCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
										}}
										style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16, zIndex: 10 }}
									/>
								</ContainerFlexSameFlex>
							</ContainerFlexSameFlex>
						</ContainerFlexSameFlex>
						{/* end loop*/}

						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"24px"} $color={"white"} $fontWeight={"700"} $textAlign={"left"}>
								OverWeight
							</TextCustom>
							<ContainerFlexSameFlex $width={"100%"} $borderRadius={"16px"} $flex={"1"}>
								<ContainerFlexSameFlex $flex={"1"} $width={"150px"} $height={"150px"} style={{ position: "relative" }}>
									<Image
										source={{
											uri: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9keSUyMG1hc3MlMjBpbmRleCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
										}}
										style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16, zIndex: 10 }}
									/>
								</ContainerFlexSameFlex>
								<ContainerFlexSameFlex $flex={"1"} $width={"150px"} $height={"150px"} style={{ position: "relative" }}>
									<Image
										source={{
											uri: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9keSUyMG1hc3MlMjBpbmRleCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
										}}
										style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16, zIndex: 10 }}
									/>
								</ContainerFlexSameFlex>
								<ContainerFlexSameFlex $flex={"1"} $width={"150px"} $height={"150px"} style={{ position: "relative" }}>
									<Image
										source={{
											uri: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9keSUyMG1hc3MlMjBpbmRleCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
										}}
										style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16, zIndex: 10 }}
									/>
								</ContainerFlexSameFlex>
							</ContainerFlexSameFlex>
						</ContainerFlexSameFlex>

						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"24px"} $color={"white"} $fontWeight={"700"} $textAlign={"left"}>
								Normal
							</TextCustom>
							<ContainerFlexSameFlex $width={"100%"} $borderRadius={"16px"} $flex={"1"}>
								<ContainerFlexSameFlex $flex={"1"} $width={"150px"} $height={"150px"} style={{ position: "relative" }}>
									<Image
										source={{
											uri: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9keSUyMG1hc3MlMjBpbmRleCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
										}}
										style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16, zIndex: 10 }}
									/>
								</ContainerFlexSameFlex>
								<ContainerFlexSameFlex $flex={"1"} $width={"150px"} $height={"150px"} style={{ position: "relative" }}>
									<Image
										source={{
											uri: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9keSUyMG1hc3MlMjBpbmRleCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
										}}
										style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16, zIndex: 10 }}
									/>
								</ContainerFlexSameFlex>
								<ContainerFlexSameFlex $flex={"1"} $width={"150px"} $height={"150px"} style={{ position: "relative" }}>
									<Image
										source={{
											uri: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9keSUyMG1hc3MlMjBpbmRleCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
										}}
										style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16, zIndex: 10 }}
									/>
								</ContainerFlexSameFlex>
							</ContainerFlexSameFlex>
						</ContainerFlexSameFlex>

						<ContainerFlexSameFlex $column>
							<TextCustom $fontSize={"24px"} $color={"white"} $fontWeight={"700"} $textAlign={"left"}>
								Underweight
							</TextCustom>
							<ContainerFlexSameFlex $width={"100%"} $borderRadius={"16px"} $flex={"1"}>
								<ContainerFlexSameFlex $flex={"1"} $width={"150px"} $height={"150px"} style={{ position: "relative" }}>
									<Image
										source={{
											uri: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9keSUyMG1hc3MlMjBpbmRleCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
										}}
										style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16, zIndex: 10 }}
									/>
								</ContainerFlexSameFlex>
								<ContainerFlexSameFlex $flex={"1"} $width={"150px"} $height={"150px"} style={{ position: "relative" }}>
									<Image
										source={{
											uri: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9keSUyMG1hc3MlMjBpbmRleCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
										}}
										style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16, zIndex: 10 }}
									/>
								</ContainerFlexSameFlex>
								<ContainerFlexSameFlex $flex={"1"} $width={"150px"} $height={"150px"} style={{ position: "relative" }}>
									<Image
										source={{
											uri: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9keSUyMG1hc3MlMjBpbmRleCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
										}}
										style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16, zIndex: 10 }}
									/>
								</ContainerFlexSameFlex>
							</ContainerFlexSameFlex>
						</ContainerFlexSameFlex>
					</ContainerFlexSameFlex>
				</Container>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Routines;
