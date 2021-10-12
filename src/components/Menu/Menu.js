import './Menu.scss'

const Menu = ({menuOpen, setMenuOpen}) => {
    const closeItems = () => {
        setMenuOpen(false)
    }
    return(
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=> closeItems}>
                    <a href='#intro'>HOME</a>
                </li>
                <li onClick={()=> closeItems}>
                    <a href='#about'>ABOUT ME</a>
                </li>
                <li onClick={()=> closeItems}>
                    <a href='#education'>ACADEMICS</a>
                </li>
                <li onClick={()=> closeItems}>
                    <a href='#expertise'>EXPERTISE</a>
                </li>
                <li onClick={()=> closeItems}>
                    <a href='#project'>PROJECTS</a>
                </li>
                <li onClick={()=> closeItems}>
                    <a href='#contact'>CONTACT</a>
                </li>
            </ul>
        </div>
    )
}
export default Menu