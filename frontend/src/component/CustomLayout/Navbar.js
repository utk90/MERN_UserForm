import './Navbar.css';

const Navbar = (e) => {
    return (
        <>
            <nav className='navbar'>
                <div className="navbar-link-container">
                    <div className="navbar-link">
                        <a href={`/`}>Home</a>
                        <a href={`/new/user`}>Create user</a>
                    </div>
                </div>
            </nav >
        </>
    );
}

export default Navbar;