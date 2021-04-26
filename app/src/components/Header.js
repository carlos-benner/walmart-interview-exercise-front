import AlertWidget from './AlertWidget';
import Navbar from './Navbar';
import '../styles/Header.css';

const Header = ({ searchFunction, msg }) => {
    return (
        <div className='header'>
            {msg && <AlertWidget msg={msg}></AlertWidget>}
            <Navbar searchFunction={searchFunction}></Navbar>
        </div>
    );
};

export default Header;
