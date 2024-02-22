import React from "react";
import { Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { convertTime, roundNumber } from "../utils";

const AreaChart = (data) => {
	const data1 = [
		{ date: "Nov", value: 70 },
		{ date: "Nov", value: 36 },
		{ date: "Nov", value: 50 },
		{ date: "Nov", value: 40 },
		{ date: "Nov", value: 18 },
		{ date: "Nov", value: 38 },
	];

	const dataConvert = data.data.map((el, i) => {
		console.log(el);
		return {
			date: `${new Date(el.createdAt).toLocaleString("default", { month: "short" })}`,
			value: +el.duration,
			duration: convertTime(el.duration),
		};
	});

	return (
		<View
			style={{
				paddingLeft: 20,
				backgroundColor: "#1C1C1C",
			}}
		>
			<LineChart
				areaChart
				curved
				data={dataConvert}
				hideDataPoints
				spacing={68}
				color1="#fff"
				color2="#56acce"
				startFillColor1="#8a56ce"
				startFillColor2="#56acce"
				endFillColor1="#8a56ce"
				endFillColor2="#56acce"
				startOpacity={0.9}
				endOpacity={0.2}
				initialSpacing={0}
				noOfSections={4}
				yAxisColor="white"
				yAxisThickness={0}
				rulesType="solid"
				rulesColor="gray"
				yAxisTextStyle={{ color: "gray" }}
				yAxisLabelSuffix="%"
				xAxisColor="#fff"
				pointerConfig={{
					pointerStripUptoDataPoint: true,
					pointerStripColor: "#fff",
					pointerStripWidth: 2,
					strokeDashArray: [2, 5],
					pointerColor: "#fff",
					radius: 4,
					pointerLabelWidth: 100,
					pointerLabelHeight: 120,
					pointerLabelComponent: (items) => {
						return (
							<View
								style={{
									height: 120,
									width: 100,
									backgroundColor: "#fff",
									borderRadius: 4,
									justifyContent: "center",
									paddingLeft: 16,
								}}
							>
								<Text style={{ color: "black", fontSize: 12 }}>{items[0].date}</Text>
								<Text style={{ color: "black", fontWeight: "bold" }}>Duration: {items[0].value}</Text>
								{/* <Text style={{ color: "black", fontWeight: "bold" }}>{items[0].duration}</Text> */}
							</View>
						);
					},
				}}
			/>
		</View>
	);
};

export default AreaChart;
