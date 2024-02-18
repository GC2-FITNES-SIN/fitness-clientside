import * as React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const fruit_0 = require("../../assets/obes.png");
const fruit_1 = require("../../assets/obes.png");
const fruit_2 = require("../../assets/obes.png");

export const fruitItems = [fruit_0, fruit_2, fruit_1];

export const ImageItems = [require("../../assets/obes.png"), require("../../assets/obes.png"), require("../../assets/obes.png")];
const CarouselCustom = () => {
	const PAGE_WIDTH = Dimensions.get("window").width;
	return (
		<>
			<View style={{ flex: 1 }}>
				<Carousel
					loop={true}
					autoPlay={isAutoPlay}
					style={{ width: PAGE_WIDTH, height: 240 }}
					width={PAGE_WIDTH}
					data={[...ImageItems, ...ImageItems]}
					renderItem={({ index, item, animationValue }) => {
						return (
							<Image
								key={index}
								width={PAGE_WIDTH}
								source={{
									uri: item,
								}}
							/>
						);
					}}
					customAnimation={animationStyle}
					scrollAnimationDuration={1200}
				/>
			</View>
		</>
	);
};

export default CarouselCustom;
