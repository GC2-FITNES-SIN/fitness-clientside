import React from "react";
import { Container, ContainerFlexSameFlex, ScrollView, TextCustom } from "./Styled";
import AreaChart from "../components/AreaChart";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "react-native";

const HistoryRunning = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar backgroundColor="#1b1b1d" barStyle="light-content" />
			<ScrollView>
				<Container $padding={"15px"} $backgroundColor={"#1b1b1d"} $gap={"15px"}>
					<ContainerFlexSameFlex $gap={"15px"} $column $justifyContent={"space-between"} $alignItems={"center"}>
						<TextCustom $textAlign={"left"} $color={"#bd54eb"}>
							Running History
						</TextCustom>
						<AreaChart />
					</ContainerFlexSameFlex>
					{/* Card History Running */}
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
