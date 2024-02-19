import React from "react";
import { Image } from "react-native";
import { Container, Button, ScrollView, ContainerFlexSameFlex, TextCustom } from "./Styled";
import PieChartCustom from "../components/PieChartCustom";
import OverlayImage from "../components/OverlayImage";
import { SafeAreaView } from "react-native-safe-area-context";
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
			<Container $backgroundColor={"#1b1b1d"}>
				<ContainerFlexSameFlex
					$backgroundColor={"#1b1b1d"}
					$gap={"15px"}
					$padding={"25px 10px"}
					style={{
						borderTopLeftRadius: 25,
						borderTopRightRadius: 25,
						marginTop: -50,
					}}
				>
					<ContainerFlexSameFlex $column $gap={"5px"} $ackgroundColor={"transparent"}>
						<TextCustom $textAlign={"left"} $fontWeight={"bold"} $fontSize={"25px"}>
							Congratulations! Your BMI Plan is ready to start
						</TextCustom>
						<TextCustom $fontWeight={"bold"} $fontSize={"20px"} $textAlign={"left"} $color={"transparent"}>
							BMI Calculator
						</TextCustom>
						<ContainerFlexSameFlex $backgroundColor={"transparent"} $gap={"5px"} $column>
							<TextCustom $fontSize={"12.5px"} $textAlign={"left"} $color={"#fff"}>
								Your Body Mass Index is{" "}
								<TextCustom $color={"#bd54eb"} $fontSize={"15px"}>
									Overweight
								</TextCustom>
							</TextCustom>
							<Button
								$width={"fit-content"}
								$padding={"7.5px 25px"}
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
								}}
							>
								<TextCustom $fontSize={"12.5px"} $color={"white"} $textAlign={"center"}>
									Show More
								</TextCustom>
							</Button>
						</ContainerFlexSameFlex>
					</ContainerFlexSameFlex>
					<PieChartCustom />
				</ContainerFlexSameFlex>
				{/* Banner */}
				<ContainerFlexSameFlex $padding={"0 20px 20px "} $column $gap={"15px"}>
					<TextCustom $textAlign={"left"} $fontWeight={"bold"} $fontSize={"20px"}>
						Start Your Plan
					</TextCustom>
					<ContainerFlexSameFlex $borderRadius={"16px"} style={{ position: "relative" }}>
						<OverlayImage
							image={
								"https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHdlaWdodCUyMHNjYWxlc3xlbnwwfHwwfHx8MA%3D%3D"
							}
						/>
						<ContainerFlexSameFlex style={{ position: "absolute", bottom: "5%", left: "10%" }} $gap={"10px"} $column>
							<TextCustom $textAlign={"left"} $fontWeight={"bold"} $fontSize={"20px"}>
								Weight Loss Starter
							</TextCustom>
							<Button $width={"fit-content"} $padding={"7.5px 25px"} $borderRadius={"50px"} $backgroundColor={"#bd54eb"}>
								<TextCustom>View More</TextCustom>
							</Button>
						</ContainerFlexSameFlex>
					</ContainerFlexSameFlex>
				</ContainerFlexSameFlex>
			</Container>
		</ScrollView>
	);
};

export default Home;
