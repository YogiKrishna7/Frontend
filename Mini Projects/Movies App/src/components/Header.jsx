import LogoComponent from "./LogoComponent";
import NavComponent from "./NavComponent";
import SearchComponent from "./SearchComponent";
import TitleComponent from "./TitleComponent";

const Header = function ({s}) {
    return (
        <div className="main-header">
            <div className="logo-title">
                <LogoComponent />
                <TitleComponent />
            </div>
            <SearchComponent obj = {s}/>
            <NavComponent />
        </div>
    );
};

export default Header;
