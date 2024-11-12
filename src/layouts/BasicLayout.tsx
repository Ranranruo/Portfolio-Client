import { ReactNode } from "react";

type BasicLayoutProps = {
    children: ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
    return (
        <>
            <header></header>
            {children}
            <footer></footer>
        </>
    );
};

export default BasicLayout;
