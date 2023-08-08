
import {HeaderWrapper, NavIcons} from "./Header.styled.ts";
import {ReactComponent as IgniteLogo} from  '../../assets/Header/logoIgnite.svg'
import {ReactComponent as HistoryIcon} from  '../../assets/Header/historyIcon.svg'
import {ReactComponent as TimerIcon} from  '../../assets/Header/timerIcon.svg'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <HeaderWrapper>
                <IgniteLogo/>

            <NavIcons>
                <NavLink to={'/'}>
                    <TimerIcon/>
                </NavLink>

                <NavLink to={'/history'}>
                    <HistoryIcon/>
                </NavLink>
            </NavIcons>
        </HeaderWrapper>
    );
}

export default Header;