import React, { useState } from "react";
import { Button, Container, ContainerFlexSameFlex, ScrollView, TextCustom, TextInput } from "./Styled";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, View } from "react-native";

const images = [
	{
		id: "1",
		uri: "https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: "2",
		uri: "https://images.unsplash.com/photo-1518365658347-c4906efc5636?q=80&w=3122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: "3",
		uri: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];
const DetailRoutine = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const renderItem = ({ item }) => <Image source={{ uri: item.uri }} style={{ width: 363, height: 500 }} resizeMode="cover" />;

	const onViewableItemsChanged = ({ viewableItems }) => {
		if (viewableItems.length > 0) {
			setCurrentIndex(viewableItems[0].index || 0);
		}
	};
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Container $backgroundColor={"#1b1b1d"} $padding={"15px"} $gap={"15px"}>
				<ContainerFlexSameFlex $flex={"2"} $padding={"0px"}>
					<FlatList
						data={images}
						horizontal
						pagingEnabled
						showsHorizontalScrollIndicator={false}
						keyExtractor={(item) => item.id}
						renderItem={renderItem}
						onViewableItemsChanged={onViewableItemsChanged}
						viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
					/>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							marginTop: 10,
						}}
					></View>
				</ContainerFlexSameFlex>
				<ContainerFlexSameFlex $backgroundColor={"#bd54eb"} $borderRadius={"20px"} $column>
					<TextCustom $fontSize={"18px"} $fontWeight={"bold"}>
						Exercise 1
					</TextCustom>
					<ContainerFlexSameFlex>
						<ScrollView>
							<TextCustom $textAlign={"left"}>
								Adipisicing velit aute esse ex aute ut deserunt id nostrud. Nisi cupidatat mollit aliqua occaecat duis cillum et fugiat. Cupidatat adipisicing id mollit veniam non.
								Adipisicing occaecat labore incididunt do mollit qui dolor irure enim eu incididunt reprehenderit minim. In aute ipsum commodo aliqua sunt duis magna in.
								Adipisicing velit aute esse ex aute ut deserunt id nostrud. Nisi cupidatat mollit aliqua occaecat duis cillum et fugiat. Cupidatat adipisicing id mollit veniam non.
								Adipisicing occaecat labore incididunt do mollit qui dolor irure enim eu incididunt reprehenderit minim. In aute ipsum commodo aliqua sunt duis magna in.
							</TextCustom>
						</ScrollView>
					</ContainerFlexSameFlex>
				</ContainerFlexSameFlex>
			</Container>
		</SafeAreaView>
	);
};

export default DetailRoutine;