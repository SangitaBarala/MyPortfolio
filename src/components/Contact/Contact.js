import './Contact.scss'
import pic from '../Images/assets/contactEmail.jpg'
const Contact = () => {
    return(
        <>
            <div className="contacts" id="contact">
                <div className="left">
                    <img src={pic}/>
                </div>
                <div className="right">
                    <h1>Contact Form</h1>
                    <form>
                        <input type="text" placeholder="Name.."/>
                        <input type="text" placeholder="Email.."/>
                        <textarea placeholder="Message..."/>
                        <button type="submit">SEND</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact