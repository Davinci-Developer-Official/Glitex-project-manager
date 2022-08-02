import Notification from "./Notification";
import Title from "./Title";
import Profile from "./Profile";
import Menu from "./Menu";

function Navbar() {
    return (
    
        <div className='head'>
            <Menu/>
            <Notification />
            <Title/>
            <Profile />
        </div>
    
    );
}

export default Navbar;
