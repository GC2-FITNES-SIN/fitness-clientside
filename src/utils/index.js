import axios from "axios";

export const Axios = axios.create({
	baseURL: "http://192.168.11.69:3000/",
	headers: {
		Authorization: `Bearer `,
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
