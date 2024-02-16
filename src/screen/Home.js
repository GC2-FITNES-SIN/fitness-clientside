import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Container, Button } from "./Styled";

const Home = () => {
	return (
		<View>
			<Container $padding={"0 7.5%"} flex={2}>
				<Text>Home 123</Text>
			</Container>
		</View>
	);
};

export default Home;
