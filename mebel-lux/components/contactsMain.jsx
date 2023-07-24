import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <main id="contacts-main">
        <h1 className="contacts-title">Контакти</h1>
        <h4 className="phone-title"><span>Телефон:</span> 0898688821</h4>
        <h4 className="email-title"><span>Email:</span> mebellux@abv.bg</h4>
        <h4 className="addres-title">Адрес: <span className="addres-span">гр. Велинград, ул. "Чавдар Войвода" 29, 4600</span></h4>
        <div className="inputs-container">
            <input type="text" placeholder="Име"/>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Телефон"/>
            <textarea type="text" placeholder="Съобщение"/>
        </div>
        <button className="submit-btn" type="submit">Изпрати</button>
      </main>
    </>
  );
}
