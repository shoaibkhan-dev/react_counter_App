import "./Navbar.css"
function Navbar(){
    return (
        <header className="header-container">
          <div>Logo</div>
          <h1>Navbar</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, commodi.</p>
          <nav>
          <ul className="header-nav">
            <li onClick={() => setCurrentPage("home")}>Home</li>
            <li onClick={() => setCurrentPage("about")}>About</li>
            <li onClick={() => setCurrentPage("contact")}>Contact</li>
            <li onClick={() => setCurrentPage("services")}>Services</li>
            <li onClick={() => setCurrentPage("Email")}>Email</li>
          </ul>
          </nav>
          </header>
    )
}

export default Navbar