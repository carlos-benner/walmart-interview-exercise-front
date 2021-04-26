import Navbar from './Navbar';

const Header = ({ searchFunction }) => {
    return (
        <div>
            <Navbar searchFunction={searchFunction}></Navbar>
        </div>
    );
};

export default Header;
