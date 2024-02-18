import React from "react";
import { Image, StyleSheet, View } from "react-native";

const OverlayImage = ({ image }) => {
	return (
		<View style={{ position: "relative", height: 400, width: "100%", borderRadius: 16, overflow: "hidden" }}>
			<Image
				source={{
					uri: image
						? image
						: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9keSUyMG1hc3MlMjBpbmRleCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
				}}
				style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 16, zIndex: 10, position: "absolute", left: 0, top: 0 }}
			/>
			<View style={styles.overlay} />
		</View>
	);
};

const styles = StyleSheet.create({
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(69,85,117,0.5)",
		zIndex: 100,
		borderRadius: 16,
	},
});

export default OverlayImage;
