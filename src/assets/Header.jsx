import "./Header.css";

function Header() {
  return (
    <nav>
    <div className="nav-bar">
        <i className='bx bx-menu sidebarOpen' ></i>
        <span className="logo navLogo"><a href="#"><img src="https://img.tapimg.net/market/images/a73b89949cb7859ea2a9ceb8f1a85389.png/appicon" alt="" /> QuizCraft</a></span>

        <div className="menu">
            <div className="logo-toggle">
                <span className="logo"><a href="#">QuizCraft</a></span>
                <i className='bx bx-x siderbarClose'></i>
            </div>

            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Header
