import LogoComponent from "./LogoComponent";
import NavComponent from "./NavComponent";
import SearchComponent from "./SearchComponent";
import TitleComponent from "./TitleComponent";

const Header = function () {
    return (
        <div className="main-header">
            <div className="logo-title">
                <LogoComponent />
                <TitleComponent />
            </div>
            <SearchComponent />
            <NavComponent />
        </div>
    );
};

export default Header;
