import './TopBar.scss'
import {Person, Mail} from "@material-ui/icons"

const TopBar = ({menuOpen, setMenuOpen}) => {
    return(
        <div className={"topBar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Sangita Barala</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+1 647-446-4170</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>sangitakhatkar.0425@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopBar