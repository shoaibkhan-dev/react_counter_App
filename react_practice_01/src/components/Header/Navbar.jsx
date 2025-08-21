import "./Navbar.css"
function Navbar(){
    return (
        <header className="header-container">
          <div>Logo</div>
          <nav>
          <ul className="header-nav">
            <li onClick={() => setCurrentPage("home")}>Home</li>
            <li onClick={() => setCurrentPage("about")}>About</li>
            <li onClick={() => setCurrentPage("contact")}>Contact</li>
            <li onClick={() => setCurrentPage("services")}>Services</li>
          </ul>
          </nav>
          </header>
    )
}

export default Navbar