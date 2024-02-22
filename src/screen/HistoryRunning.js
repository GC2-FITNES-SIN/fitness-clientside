import React, { useCallback, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Container, ContainerFlexSameFlex, ScrollView, TextCustom } from "./Styled";
import AreaChart from "../components/AreaChart";
import { SafeAreaView } from "react-native-safe-area-context";
import { Axios, convertTime, roundNumber, ymd } from "../utils";
import { useFocusEffect } from "@react-navigation/native";

const HistoryRunning = () => {
	const [history, setHistory] = useState([]);
	const token = SecureStore.getItem("access_token");

	const fetchDataHistory = async () => {
		try {
			const { data } = await Axios({
				method: "GET",
				url: "/running-history",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			console.log("HISTORY: ", data);

			setHistory(data.data);
		} catch (err) {
			console.log(err, "historyrunning");
		}
	};

	// useEffect(() => {
	// 	fetchDataHistory();
	// }, []);

	useFocusEffect(
		useCallback(() => {
			fetchDataHistory();
		}, [])
	);

	console.log(history, "<<<<<<<< |||");
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<Container $padding={"15px"} $backgroundColor={"#1b1b1d"} $gap={"15px"}>
					<ContainerFlexSameFlex $gap={"15px"} $column $justifyContent={"space-between"} $alignItems={"center"}>
						<TextCustom $textAlign={"left"} $color={"#bd54eb"}>
							Running History
						</TextCustom>
						{history.length > 0 && <AreaChart data={history} />}
					</ContainerFlexSameFlex>
					{/* Card History Running */}
					{history.length > 0 ? (
						history.map((item, i) => {
							return (
								<>
									<ContainerFlexSameFlex $padding={"15px"} $gap={"15px"} $borderRadius={"16px"} $backgroundColor={"#fff"} key={i}>
										<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"} key={i}>
											<TextCustom $fontSize={"12.5px"} $fontWeight={"bold"} $textAlign={"left"} $color={"#bd54eb"}>
												Durations
											</TextCustom>
											<TextCustom $fontSize={"10px"} $color={"black"} $textAlign={"left"}>
												{convertTime(item.duration)}
											</TextCustom>
										</ContainerFlexSameFlex>
										<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"} key={i}>
											<TextCustom $fontSize={"12.5px"} $fontWeight={"bold"} $textAlign={"left"} $color={"#bd54eb"}>
												Distance
											</TextCustom>
											<TextCustom $fontSize={"10px"} $color={"black"} $textAlign={"left"}>
												{roundNumber(item.distance)} KM
											</TextCustom>
										</ContainerFlexSameFlex>
										<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"} key={i}>
											<TextCustom $fontSize={"12.5px"} $fontWeight={"bold"} $textAlign={"left"} $color={"#bd54eb"}>
												Location
											</TextCustom>
											<TextCustom $fontSize={"10px"} $color={"black"} $textAlign={"left"}>
												XXXXX
											</TextCustom>
										</ContainerFlexSameFlex>
										<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
											<TextCustom $fontSize={"12.5px"} $fontWeight={"bold"} $textAlign={"left"} $color={"#bd54eb"}>
												Date
											</TextCustom>
											<TextCustom $fontSize={"10px"} $color={"black"} $textAlign={"left"}>
												{ymd(item.createdAt)}
											</TextCustom>
										</ContainerFlexSameFlex>
									</ContainerFlexSameFlex>
								</>
							);
						})
					) : (
						<ContainerFlexSameFlex $padding={"15px"} $backgroundColor={"#1b1b1d"} $gap={"15px"} $height={"500px"} $justifyContent={"center"} $alignItems={"center"}>
							<TextCustom $fontSize={"20px"} $fontWeight={"bold"} $textAlign={"center"}>
								No Running History
							</TextCustom>
						</ContainerFlexSameFlex>
					)}

					{/* end loop */}
				</Container>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HistoryRunning;
