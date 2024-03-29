import styled from "styled-components/native";

// container wrapper
export const Container = styled.SafeAreaView`
	flex: ${(props) => (props.$flex ? $flex : "1")};
	align-items: center;
	justify-content: center;
	padding: ${(props) => (props.$padding ? props.$padding : "0")};
	gap: ${(props) => (props.$gap ? props.$gap : "0")};
	background: ${(props) => (props.$backgroundColor ? props.$backgroundColor : "white")};
`;
export const ContainerFlexSameFlex = styled.View`
	flex: ${(props) => (props.$flex ? props.$flex : "1")};
	flex-direction: ${(props) => (props.$column ? "column" : "row")};
	gap: ${(props) => (props.$gap ? props.$gap : "0px")};
	background: ${(props) => (props.$backgroundColor ? props.$backgroundColor : "transparent")};
	box-shadow: ${(props) => (props.$boxShadow ? props.$boxShadow : "none")};
	justify-content: ${(props) => (props.$justifyContent ? props.$justifyContent : "flex-start")};
	align-items: ${(props) => (props.$alignItems ? props.$alignItems : "flex-start")};
	padding: ${(props) => (props.$padding ? props.$padding : "10px")};
	width: ${(props) => (props.$width ? props.$width : "100%")};
	height: ${(props) => (props.$height ? props.$height : "auto")};
	border-radius: ${(props) => (props.$borderRadius ? props.$borderRadius : "0px")};
	clip-path: ${(props) => (props.$clipPath ? props.$clipPath : "none")};
`;
export const ScrollView = styled.ScrollView`
	flex: 1;
`;

export const Button = styled.TouchableOpacity`
	background: ${(props) => (props.$backgroundColor ? props.$backgroundColor : "white")};
	color: ${(props) => (props.$primary ? "white" : "#BF4F74")};
	font-size: 1em;
	margin: ${(props) => (props.$margin ? props.$margin : "0")};
	padding: ${(props) => (props.$padding ? props.$padding : "10px")};
	border: ${(props) => (props.$border ? props.$border : "none")};
	border-radius: ${(props) => (props.$borderRadius ? props.$borderRadius : "0px")};
	width: ${(props) => (props.$width ? props.$width : "100%")};
	height: ${(props) => (props.$height ? props.$height : "auto")};
	justify-content: ${(props) => (props.$justifyContent ? props.$justifyContent : "flex-start")};
`;
export const TextCustom = styled.Text`
	font-size: ${(props) => (props.$fontSize ? props.$fontSize : "15px")};
	color: ${(props) => (props.$color ? props.$color : "white")};
	font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : "normal")};
	text-align: ${(props) => (props.$textAlign ? props.$textAlign : "center")};
	width: ${(props) => (props.$width ? props.$width : "100%")};
	margin: ${(props) => (props.$margin ? props.$margin : "0")};
`;
export const ProfileRounded = styled.Image`
	border-radius: 50px;
	width: 70px;
	height: 70px;
`;

export const TextInput = styled.TextInput`
	width: ${(props) => (props.$width ? props.$width : "100%")};
	height: ${(props) => (props.$height ? props.$height : "auto")};
	background: ${(props) => (props.$backgroundColor ? props.$backgroundColor : "white")};
	border-radius: ${(props) => (props.$borderRadius ? props.$borderRadius : "0px")};
	padding: ${(props) => (props.$padding ? props.$padding : "10px")};
	font-size: ${(props) => (props.$fontSize ? props.$fontSize : "15px")};
	color: ${(props) => (props.$color ? props.$color : "#fff")};
	font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : "normal")};
`;

