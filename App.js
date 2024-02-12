import { useState } from "react";
import AuthContext from "./src/store/Auth";
import MainStack from "./src/navigators/MainStack";

export default function App() {
	const [login, setLogin] = useState(false);
	return (
		<AuthContext.Provider value={{ login, setLogin }}>
			<MainStack />
		</AuthContext.Provider>
	);
}
