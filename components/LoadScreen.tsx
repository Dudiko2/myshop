import { CSSProperties, FC } from "react";
import { Container, Spinner } from "react-bootstrap";

interface Props {
    show: boolean;
}

const LoadScreen: FC<Props> = ({ show }) => {
    return (
        <Container
            style={{ ...wrapperStyles, display: show ? "block" : "none" }}
            fluid
        >
            <Container style={styles}>
                <Spinner animation="border" />
            </Container>
        </Container>
    );
};

// should move to css modules
const wrapperStyles: CSSProperties = {
    position: "fixed",
    top: 0,
    zIndex: 100,
    backgroundColor: "white",
    opacity: 0.7,
};

const styles: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
};

export default LoadScreen;
