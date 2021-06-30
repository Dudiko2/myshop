import { FC, ReactNode } from "react";
import Header from "../components/Header";

interface Props {
	childern?: ReactNode;
}

const Layout: FC<Props> = ({ childern }) => {
	return (
		<>
			<Header />
			{childern}
			{/* Footer */}
		</>
	);
};

export default Layout;
