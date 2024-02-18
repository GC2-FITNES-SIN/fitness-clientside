import { PieChart } from "react-native-gifted-charts";
const PieChartCustom = () => {
	const pieData = [
		{ value: 20, color: "#96f4e3", text: "UW" },
		{ value: 20, color: "#c3f164", text: "Normal" },
		{ value: 20, color: "#f78f1a", text: "OW" },
		{ value: 20, color: "#fe5a5a", text: "Obesity" },
	];

	return <PieChart data={pieData} showText textColor="white" radius={65} fontWeight="bold" textSize={6.5} focusOnPress={false} showValuesAsLabels />;
};

export default PieChartCustom;
