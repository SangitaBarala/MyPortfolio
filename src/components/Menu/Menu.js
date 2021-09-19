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
                    <a href=''>ABOUT ME</a>
                </li>
                <li onClick={()=> closeItems}>
                    <a href='#academic'>EXPERTISE</a>
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