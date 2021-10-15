import { FC, ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ButtonGithub from "../components/ButtonGithub";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "../styles/Layout.module.css";

interface Props {
    children?: ReactNode;
    showHero?: boolean;
}

const Layout: FC<Props> = ({ children, showHero = false }) => {
    return (
        <div className={styles.Layout}>
            <Header withHero={showHero} />
            {showHero && <Hero />}
            <main>
                <Breadcrumbs />
                {children}
            </main>
            <Footer />
            <ButtonGithub />
        </div>
    );
};

export default Layout;
