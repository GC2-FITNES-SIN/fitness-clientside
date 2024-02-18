import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const GradientCustom = ({ children, gradient }) => {
	return (
		<LinearGradient colors={gradient ? gradient : ["#e234e8", "#1402b5", "#3293f4"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: 100 }}>
			{children}
		</LinearGradient>
	);
};

export default GradientCustom;
