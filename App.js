import { useState } from "react";
import AuthContext from "./src/store/Auth";
import MainStack from "./src/navigators/MainStack";
import { StatusBar } from "react-native";

export default function App() {
	const [login, setLogin] = useState(false);
	return (
		<>
			<StatusBar backgroundColor="#1b1b1d" barStyle="light-content" />
			<AuthContext.Provider value={{ login, setLogin }}>
				<MainStack />
			</AuthContext.Provider>
		</>
	);
}
