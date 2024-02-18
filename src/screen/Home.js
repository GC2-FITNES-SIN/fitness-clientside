import React from "react";
import { Dimensions, Image, View } from "react-native";
import { Text } from "react-native-paper";
import { Container, Button, ScrollView, ContainerFlexSameFlex, TextCustom } from "./Styled";
import PieChartCustom from "../components/PieChartCustom";

const Home = () => {
	return (
		<ScrollView>
			<ContainerFlexSameFlex $padding={"0"}>
				<Image
					source={{
						uri: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9keSUyMG1hc3MlMjBpbmRleCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
					}}
					style={{ width: "100%", height: 400, objectFit: "cover" }}
				/>
			</ContainerFlexSameFlex>
			<Container>
				<ContainerFlexSameFlex
					$backgroundColor={"#fff"}
					$borderRadius={"10px"}
					$gap={"15px"}
					$padding={"15px 10PX"}
					style={{
						shadowColor: "#000",
						shadowOffset: {
							width: 0,
							height: 1,
						},
						borderTopLeftRadius: 15,
						borderTopRighttRadius: 15,
						shadowOpacity: 0.22,
						shadowRadius: 2.22,
						elevation: 3,
						marginTop: -50,
					}}
				>
					<ContainerFlexSameFlex $column $gap={"5px"}>
						<TextCustom $fontWeight={"bold"} $fontSize={"20px"} $textAlign={"left"}>
							BMI Calculator
						</TextCustom>
						<TextCustom $fontSize={"12.5px"} $textAlign={"left"}>
							You Have an Overweight BMI
						</TextCustom>
						<Button
							$width={"fit-content"}
							$padding={"7.5px 25px"}
							$borderRadius={"50px"}
							$backgroundColor={"#84c2b3"}
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
						>
							<TextCustom $fontSize={10} $color={"white"} $textAlign={"center"}>
								Show More
							</TextCustom>
						</Button>
					</ContainerFlexSameFlex>
					<PieChartCustom />
				</ContainerFlexSameFlex>
			</Container>
		</ScrollView>
	);
};

export default Home;
