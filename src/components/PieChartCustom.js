import { PieChart } from "react-native-gifted-charts";
const PieChartCustom = () => {
	const pieData = [
		{ value: 20, color: "#bd54eb", text: "Overweight", shiftX: 15, shiftY: -15 },
		{ value: 20, color: "#fff" },
		{ value: 20, color: "#fff" },
		{ value: 20, color: "#fff" },
	];

	return <PieChart data={pieData} showText textColor="white" radius={75} fontWeight="bold" textSize={7.5} focusOnPress={false} showValuesAsLabels />;
};

export default PieChartCustom;