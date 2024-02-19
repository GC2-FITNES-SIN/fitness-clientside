import React from "react";
import { Button, Container, ContainerFlexSameFlex, TextCustom } from "./Styled";
import { Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5"

const Running = () => {
	return (
		<Container $padding={"40px 15px 15px 15px"}>
			<ContainerFlexSameFlex $column $justifyContent={"center"} alignItems={"center"} style={{
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
				$borderRadius={"16px"}>
				<TextCustom $color={"grey"} $fontSize={"40px"} $fontWeight={"bold"}>
					15:43:02
				</TextCustom>
				<TextCustom $fontSize={"15px"} $color={"grey"} >
					duration
				</TextCustom>
			</ContainerFlexSameFlex>
			<ContainerFlexSameFlex $flex={"4"} $column $padding={"0px"} style={{
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
				$borderRadius={"16px"}>
				<Image
					source={{ uri: 'https://awsimages.detik.net.id/visual/2023/09/06/google-maps-ktt-asean_169.png?w=650' }}
					style={{ width: '100%', height: '100%', borderRadius: 16 }}
				/>
			</ContainerFlexSameFlex>
			<ContainerFlexSameFlex $backgroundColor={"#84c2b3"} $gap={"5px"} style={{
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
				$borderRadius={"16px"}>
				<ContainerFlexSameFlex $column $justifyContent={"center"} $alignItems={"center"} $padding={"0px"} $backgroundColor={"#84c2b3"} $gap={"3px"}>
					<FontAwesome name="running" size={30} color="white" />
					<TextCustom $fontSize={"16px"} $fontWeight={"bold"} $color={"white"}>
						5.4 Km
					</TextCustom>
					<TextCustom $fontSize={"12px"} $fontWeight={"bold"} $color={"white"}>
						Distance
					</TextCustom>
				</ContainerFlexSameFlex>
				<ContainerFlexSameFlex $column $justifyContent={"center"} $alignItems={"center"} $padding={"0px"} $backgroundColor={"#84c2b3"} $gap={"3px"}>
					<FontAwesome name="burn" size={30} color="white" />
					<TextCustom $fontSize={"16px"} $fontWeight={"bold"} $color={"white"}>
						238 Kal
					</TextCustom>
					<TextCustom $fontSize={"12px"} $fontWeight={"bold"} $color={"white"}>
						Calories
					</TextCustom>
				</ContainerFlexSameFlex>
				<ContainerFlexSameFlex $column $justifyContent={"center"} $alignItems={"center"} $padding={"0px"} $backgroundColor={"#84c2b3"} $gap={"3px"}>
					<FontAwesome name="heartbeat" size={30} color="white" />
					<TextCustom $fontSize={"16px"} $fontWeight={"bold"} $color={"white"}>
						128 Bpm
					</TextCustom>
					<TextCustom $fontSize={"12px"} $fontWeight={"bold"} $color={"white"}>
						Heart Rate
					</TextCustom>
				</ContainerFlexSameFlex>
			</ContainerFlexSameFlex>
			<ContainerFlexSameFlex $column $justifyContent={"center"} $alignItems={"center"}>
				<Button $backgroundColor={"#b4b4b4"} $width={"100px"} $height={"100px"} $borderRadius={"50px"} style={{
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
				}}>
				</Button>
				<FontAwesome name="play-circle" size={30} color="white" style={{
					position: 'absolute'
				}} />
			</ContainerFlexSameFlex>
		</Container>
	);
};

export default Running;
