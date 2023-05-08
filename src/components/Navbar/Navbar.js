import styles from "./Navbar.module.css"
function Navbar (){
    return (
        <div className = {styles.container}>
            <nav className = {styles.Navbar}>
                <div>
                    <h1 className = {styles.Navbar__brand}>Movie App</h1>
                </div>
                <div>
                    <ul className = {styles.Navbar__list}>
                        <li className = {styles.Navbar__item}>Home</li>
                        <li className = {styles.Navbar__item}>Add Movie</li>
                        <li className = {styles.Navbar__item}>Popular</li>
                        <li className = {styles.Navbar__item}>Now Playing</li>
                        <li className = {styles.Navbar__item}>Top Rated</li>
                    </ul>
                </div>
            </nav>
        </div>
    );     
}

export default Navbar;