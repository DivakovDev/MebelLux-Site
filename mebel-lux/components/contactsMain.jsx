import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <main>
        <h1>Контакти</h1>
        <h4>Телефон: 0898688821</h4>
        <h4>Email: mebellux@abv.bg</h4>
        <h4>Адрес: гр. Велинград, ул. "Чавдар Войвода" 29, 4600</h4>
        <div>
            <input type="text" placeholder="Име"/>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Телефон"/>
            <textarea type="text" placeholder="Съобщение"/>
            <hr />
            <button type="submit">Изпрати</button>
        </div>
          
    
      </main>
    </>
  );
}
