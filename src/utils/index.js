import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const Axios = axios.create({
	baseURL: "http://34.101.140.227",
	headers: {
		Authorization: `Bearer ${SecureStore.getItem("access_Token")}`,
		"content-type": "application/x-www-form-urlencoded",
	},
});

export const convertTime = (duration) => {
	const hrs = ~~(duration / 3600);
	const mins = ~~((duration % 3600) / 60);
	const secs = ~~duration % 60;

	let ret = "";

	if (hrs > 0) {
		ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
	}

	ret += "" + mins + ":" + (secs < 10 ? "0" : "");
	ret += "" + secs;

	return ret;
};

export const roundNumber = (number) => {
	return Math.round(number);
};

export const calculateBMI = (weight, height, gender) => {
	if (!weight || !height) return {};
	let img;
	const bmi = weight / ((height / 100) * (height / 100));
	const result = bmiCategory(bmi);
	const ideal = idealWeight(height, gender);

	switch (result) {
		case "Underweight":
			img = "../assets/underweight.png";
			break;
		case "Normal":
			img = "../assets/Normal.png";
			break;
		case "Overweight":
			img = "../assets/overweight.png";
			break;
		case "Obese":
			img = "../assets/obese.png";
			break;
		default:
			img = "../assets/obese.png";
			break;
	}

	return {
		bmi,
		result,
		img,
		ideal,
	};
};

const bmiCategory = (bmi) => {
	if (bmi < 18.5) {
		return "Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		return "Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		return "Overweight";
	} else {
		return "Obese";
	}
};

const idealWeight = (height, gender) => {
	if (gender === "male") {
		return (height - 100) * 0.9;
	} else if (gender === "female") {
		return (height - 100) * 0.8;
	} else {
		return null;
	}
};
