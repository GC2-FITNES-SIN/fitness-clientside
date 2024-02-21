import React, { useEffect, useState } from "react";
import { Button, Container, ContainerFlexSameFlex, ScrollView, TextCustom, TextInput } from "./Styled";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, View } from "react-native";
import axios from "axios";
import * as SecureStore from 'expo-secure-store'
import { useRoute } from '@react-navigation/native';


const DetailRoutine = () => {
	const route = useRoute()
	const { id } = route.params
	const [detailRoutine, setDetailRoutine] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);

	let images
	if (detailRoutine.data) {
		images = [
			{
				id: "1",
				uri: detailRoutine.data.routineImageStart,

			},
			{
				id: "2",
				uri: detailRoutine.data.routineImageEnd,

			}
		];
	}
	const renderItem = ({ item }) => <Image source={{ uri: item.uri }} style={{ width: 363, height: 500 }} resizeMode="cover" />;

	const onViewableItemsChanged = ({ viewableItems }) => {
		if (viewableItems.length > 0) {
			setCurrentIndex(viewableItems[0].index || 0);
		}
	};


	const fetchDetailRoutine = async () => {
		try {
			const { data } = await axios({
				url: `http://34.101.140.227/routines/${id}`,
				method: "GET",
				headers: {
					Authorization: "Bearer " + SecureStore.getItem("access_token"),
				},
			});
			setDetailRoutine(data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchDetailRoutine()
	}, [])

	return (

		<Container $backgroundColor={"#1b1b1d"} $padding={"15px"} $gap={"15px"}>
			<ContainerFlexSameFlex $flex={"2"} $padding={"0px"}>
				{detailRoutine.data && <FlatList
					data={images}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item.id}
					renderItem={renderItem}
					onViewableItemsChanged={onViewableItemsChanged}
					viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
				/>
				}
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
				<TextCustom $fontSize={"22px"} $fontWeight={"bold"}>
					{ detailRoutine.data && detailRoutine.data.routineName}
				</TextCustom>
				<ContainerFlexSameFlex $justifyContent={"center"} $alignItems={"center"}>
					<ScrollView>
						<TextCustom $textAlign={"left"} $fontSize={"18px"}>
							{ detailRoutine.data && detailRoutine.data.routineDescription}
						</TextCustom>
					</ScrollView>
				</ContainerFlexSameFlex>
			</ContainerFlexSameFlex>
		</Container>

	);
};

export default DetailRoutine;