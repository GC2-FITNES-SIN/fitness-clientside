import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Container, ContainerFlexSameFlex, ScrollView, TextCustom } from "./Styled";
import AreaChart from "../components/AreaChart";
import { SafeAreaView } from "react-native-safe-area-context";
import { Axios } from "../utils";

const HistoryRunning = () => {
	const [history, setHistory] = useState([]);
	const test = SecureStore.getItem("access_Token");

	const fetchDataHistory = async () => {
		try {
			const { data } = await Axios({
				method: "GET",
				url: "/running-history",
				headers: {
					Authorization: `Bearer ${test}`,
				},
			});

			console.log("HISTORY: ", data);

			setHistory(data.data);
		} catch (err) {
			console.log(err, "historyrunning");
		}
	};

	useEffect(() => {
		fetchDataHistory();
	}, []);

	console.log(history, "<<<<<<<<");
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<Container $padding={"15px"} $backgroundColor={"#1b1b1d"} $gap={"15px"}>
					<ContainerFlexSameFlex $gap={"15px"} $column $justifyContent={"space-between"} $alignItems={"center"}>
						<TextCustom $textAlign={"left"} $color={"#bd54eb"}>
							Running History
						</TextCustom>
						<AreaChart />
					</ContainerFlexSameFlex>
					{/* Card History Running */}
					{history.length > 0 &&
						history.map((item, i) => {
							console.log(item, "history");
							return (
								<>
									<ContainerFlexSameFlex $padding={"15px"} $gap={"15px"} $borderRadius={"16px"} $backgroundColor={"#fff"} key={i}>
										<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
											<TextCustom $fontSize={"12.5px"} $fontWeight={"bold"} $textAlign={"left"} $color={"#bd54eb"}>
												Durations 1
											</TextCustom>
											<TextCustom $fontSize={"10px"} $color={"black"} $textAlign={"left"}>
												{item.duration} min
											</TextCustom>
										</ContainerFlexSameFlex>
										<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
											<TextCustom $fontSize={"12.5px"} $fontWeight={"bold"} $textAlign={"left"} $color={"#bd54eb"}>
												Running Distance
											</TextCustom>
											<TextCustom $fontSize={"10px"} $color={"black"} $textAlign={"left"}>
												12 KM
											</TextCustom>
										</ContainerFlexSameFlex>
										<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
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
												02-02-2024
											</TextCustom>
										</ContainerFlexSameFlex>
									</ContainerFlexSameFlex>
								</>
							);
						})}

					{/* end loop */}
					<ContainerFlexSameFlex $padding={"15px"} $gap={"15px"} $borderRadius={"16px"} $backgroundColor={"#fff"}>
						<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
							<TextCustom $fontSize={"12.5px"} $fontWeight={"bold"} $textAlign={"left"} $color={"#bd54eb"}>
								Durations
							</TextCustom>
							<TextCustom $fontSize={"10px"} $color={"black"} $textAlign={"left"}>
								51 min
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
							<TextCustom $fontSize={"12.5px"} $fontWeight={"bold"} $textAlign={"left"} $color={"#bd54eb"}>
								Running Distance
							</TextCustom>
							<TextCustom $fontSize={"10px"} $color={"black"} $textAlign={"left"}>
								12 KM
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
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
								02-02-2024
							</TextCustom>
						</ContainerFlexSameFlex>
					</ContainerFlexSameFlex>
					<ContainerFlexSameFlex $padding={"15px"} $gap={"15px"} $borderRadius={"16px"} $backgroundColor={"#fff"}>
						<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
							<TextCustom $fontSize={"12.5px"} $fontWeight={"bold"} $textAlign={"left"} $color={"#bd54eb"}>
								Durations
							</TextCustom>
							<TextCustom $fontSize={"10px"} $color={"black"} $textAlign={"left"}>
								51 min
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
							<TextCustom $fontSize={"12.5px"} $fontWeight={"bold"} $textAlign={"left"} $color={"#bd54eb"}>
								Running Distance
							</TextCustom>
							<TextCustom $fontSize={"10px"} $color={"black"} $textAlign={"left"}>
								12 KM
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
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
								02-02-2024
							</TextCustom>
						</ContainerFlexSameFlex>
					</ContainerFlexSameFlex>
					<ContainerFlexSameFlex $padding={"15px"} $gap={"15px"} $borderRadius={"16px"} $backgroundColor={"#fff"}>
						<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
							<TextCustom $fontSize={"12.5px"} $fontWeight={"bold"} $textAlign={"left"} $color={"#bd54eb"}>
								Durations
							</TextCustom>
							<TextCustom $fontSize={"10px"} $color={"black"} $textAlign={"left"}>
								51 min
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
							<TextCustom $fontSize={"12.5px"} $fontWeight={"bold"} $textAlign={"left"} $color={"#bd54eb"}>
								Running Distance
							</TextCustom>
							<TextCustom $fontSize={"10px"} $color={"black"} $textAlign={"left"}>
								12 KM
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
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
								02-02-2024
							</TextCustom>
						</ContainerFlexSameFlex>
					</ContainerFlexSameFlex>
					<ContainerFlexSameFlex $padding={"15px"} $gap={"15px"} $borderRadius={"16px"} $backgroundColor={"#fff"}>
						<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
							<TextCustom $fontSize={"12.5px"} $fontWeight={"bold"} $textAlign={"left"} $color={"#bd54eb"}>
								Durations
							</TextCustom>
							<TextCustom $fontSize={"10px"} $color={"black"} $textAlign={"left"}>
								51 min
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
							<TextCustom $fontSize={"12.5px"} $fontWeight={"bold"} $textAlign={"left"} $color={"#bd54eb"}>
								Running Distance
							</TextCustom>
							<TextCustom $fontSize={"10px"} $color={"black"} $textAlign={"left"}>
								12 KM
							</TextCustom>
						</ContainerFlexSameFlex>
						<ContainerFlexSameFlex $column $height={"100%"} $gap={"10px"} $alignItems={"center"} $justifyContent={"space-between"}>
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
								02-02-2024
							</TextCustom>
						</ContainerFlexSameFlex>
					</ContainerFlexSameFlex>
				</Container>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HistoryRunning;
