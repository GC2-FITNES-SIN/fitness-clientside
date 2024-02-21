import { PieChart } from "react-native-gifted-charts";
const PieChartCustom = ({ data }) => {
	const pieData = [
		{ value: 20, color: "#bd54eb", text: data, shiftX: 15, shiftY: -15 },
		{ value: 20, color: "#fff" },
		{ value: 20, color: "#fff" },
		{ value: 20, color: "#fff" },
	];

	return <PieChart data={pieData} showText textColor="white" radius={75} fontWeight="bold" textSize={10} focusOnPress={false} showValuesAsLabels />;
};

export default PieChartCustom;
