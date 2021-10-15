import { CSSProperties, FC } from "react";
import { Container, Spinner } from "react-bootstrap";
import Layout from "../wrappers/Layout";

const LoadScreen: FC = () => {
    const styles: CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "80vh",
    };
    return (
        <Layout>
            <Container fluid>
                <Container style={styles}>
                    <Spinner animation="border" />
                </Container>
            </Container>
        </Layout>
    );
};

export default LoadScreen;
