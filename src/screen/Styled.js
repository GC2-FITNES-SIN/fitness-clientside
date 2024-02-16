import styled from "styled-components/native";

// container wrapper
export const Container = styled.SafeAreaView`
	flex: ${(props) => (props.$flex ? $flex : "1")};
	align-items: center;
	justify-content: center;
	padding: ${(props) => (props.$padding ? props.$padding : "0")};
	gap: 5px;
	background: #fff;
`;
export const ContainerFlexSameFlex = styled.View`
	flex: 1;
	flex-direction: ${(props) => (props.$column ? "column" : "row")};
	gap: ${(props) => (props.$gap ? props.$gap : "0px")};
	background: ${(props) => (props.$backgroundColor ? props.$backgroundColor : "white")};
	box-shadow: ${(props) => (props.$boxShadow ? props.$boxShadow : "none")};
	justify-content: ${(props) => (props.$justifyContent ? props.$justifyContent : "flex-start")};
	align-items: center;
	padding: 10px;
	width: ${(props) => (props.$width ? props.$width : "100%")};
	height: ${(props) => (props.$height ? props.$height : "auto")};
	border-radius: ${(props) => (props.$borderRadius ? props.$borderRadius : "0px")};
`;

export const Button = styled.Button`
	background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
	color: ${(props) => (props.$primary ? "white" : "#BF4F74")};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid #bf4f74;
`;

export const TextCustom = styled.Text`
	font-size: ${(props) => (props.$fontSize ? props.$fontSize : "15px")};
	color: ${(props) => (props.$color ? props.$color : "black")};
	font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : "normal")};
`;

export const ScrollView = styled.ScrollView`
	flex: 1;
`;
