import '../styles/Navbar.css';
import AccountWidget from './AccountWidget';
import CartWidget from './CartWidget';
import Logo from './Logo';
import SearchBox from './SearchBox';

const Navbar = ({ searchFunction }) => {
    return (
        <nav>
            <div className='container'>
                <Logo></Logo>
                <SearchBox searchFunction={searchFunction}></SearchBox>
                <AccountWidget></AccountWidget>
                <CartWidget></CartWidget>
            </div>
        </nav>
    );
};

export default Navbar;
