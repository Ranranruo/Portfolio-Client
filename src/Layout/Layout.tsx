import { Outlet } from "react-router-dom"
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";

// 레이아웃 컴포넌트
const Layout: React.FC = () => {
    return (
        <>
            {/* <Header /> */}
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}
export default Layout;