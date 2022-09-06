import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="content" style={{ 'marginTop': '60px' }}>
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;