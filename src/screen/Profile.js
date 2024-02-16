import React from "react";
import { Container, ContainerFlexSameFlex, ScrollView, TextCustom } from "./Styled";
import Ionicons from "react-native-vector-icons/Ionicons";

const Profile = () => {
	return (
		<ScrollView>
			<Container $padding={"15px"}>
				<ContainerFlexSameFlex $gap={"15px"}>
					<ContainerFlexSameFlex
						$column
						$width={"95px"}
						$height={"65px"}
						$borderRadius={"16px"}
						$backgroundColor={"#fff"}
						style={{
							shadowColor: "#000000",
							shadowOffset: {
								width: 0,
								height: 9,
							},
							shadowOpacity: 0.22,
							shadowRadius: 10.24,
							elevation: 13,
							marginTop: 10,
							marginBottom: 10,
						}}
					>
						<TextCustom $color={"#84c2b3"} $fontSize={"17.5"}>
							180 cm
						</TextCustom>
						<TextCustom>Height</TextCustom>
					</ContainerFlexSameFlex>
					<ContainerFlexSameFlex
						$column
						$width={"95px"}
						$height={"65px"}
						$borderRadius={"16px"}
						$backgroundColor={"#fff"}
						style={{
							shadowColor: "#000000",
							shadowOffset: {
								width: 0,
								height: 9,
							},
							shadowOpacity: 0.22,
							shadowRadius: 10.24,
							elevation: 13,
							marginTop: 10,
							marginBottom: 10,
						}}
					>
						<TextCustom $color={"#84c2b3"}>180 cm</TextCustom>
						<TextCustom>Height</TextCustom>
					</ContainerFlexSameFlex>
					<ContainerFlexSameFlex
						$column
						$width={"95px"}
						$height={"65px"}
						$borderRadius={"16px"}
						$backgroundColor={"#fff"}
						style={{
							shadowColor: "#1d161712",
							shadowOffset: {
								width: 0,
								height: 10,
							},
							shadowOpacity: 0.07,
							shadowRadius: 10.24,
							elevation: 13,
							marginTop: 10,
							marginBottom: 10,
						}}
					>
						<TextCustom $color={"#84c2b3"}>180 cm</TextCustom>
						<TextCustom>Height</TextCustom>
					</ContainerFlexSameFlex>
				</ContainerFlexSameFlex>
			</Container>
		</ScrollView>
	);
};

export default Profile;
