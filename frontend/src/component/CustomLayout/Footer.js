import './Footer.css';

const Footer = () => {
    const backToTopHandler = () => {
        window.scrollTo(0, 0);
    }
    return (
        <footer className='layout-footer'>
            <p>Copyright &copy; 2022</p>
            <button className='footer-btn' onClick={() => backToTopHandler()}>Back To Top</button>
        </footer>
    );
}

export default Footer;