import {Outlet} from "react-router-dom";
import {LayoutWrapper} from "./DefaultLayout.styled.ts";
import Header from "./GlobalComponents/Header.tsx";

function DefaultLayout() {
    return (
        <LayoutWrapper>
            <Header/>
            <Outlet/>
        </LayoutWrapper>
    );
}

export default DefaultLayout;