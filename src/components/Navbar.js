import { Link } from 'react-router-dom'
export const Navbar = () => {

    function myfunction() {
        var x = document.getElementsByClassName("nav");
        Array.from(x).forEach((x) => {
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        })
    }
    
    return (
        <>
            <nav>
                {/* <Link to='/'>Home</Link>
                 <Link to='/about'>About</Link> */}

                <section id="hero">
                    <header>
                        <div className="nav-toggle" onClick={myfunction}>
                            <p>Menu</p><span></span>
                        </div>
                        <ul className="nav">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contacts</Link></li>
                        </ul>
                    </header>
                </section>
            </nav>

        </>
    )
}