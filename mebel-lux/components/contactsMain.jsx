import { Link } from "react-router-dom";
import emailjs from "emailjs-com"

export default function Main() {
function sendEmail(){
}

  return (
    <>
      <main id="contacts-main">
        <h1 className="contacts-title">Контакти</h1>
        <h4 className="phone-title"><span>Телефон:</span> 0898688821</h4>
        <h4 className="email-title"><span>Email:</span> mebellux@abv.bg</h4>
        <h4 className="addres-title">Адрес: <span className="addres-span">гр. Велинград, ул. "Чавдар Войвода" 29, 4600</span></h4>
        <form className="inputs-container">
            <input name="name" type="text" placeholder="Име" required/>
            <input name="email" type="text" placeholder="Email" required/>
            <input name="phone" type="text" placeholder="Телефон" required/>
            <textarea name="message" type="text" placeholder="Съобщение"/>
            <button className="submit-btn" type="submit" onSubmit={sendEmail}>Изпрати</button>
        </form>
      </main>
    </>
  );
}
