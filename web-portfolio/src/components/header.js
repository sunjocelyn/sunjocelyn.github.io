import styles from './header.module.css'; 

const NavPanel = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>JOCELYN SUN</div>
            <nav>
                <ul className={styles.nav}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavPanel;