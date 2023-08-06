import React from "react";

export default function Contacts() {
  function sendEmail() {
    // functionality
  }
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Контакти</h1>
      <h4 className="text-lg mb-2">
        <span className="font-semibold">Телефон:</span> 0898688821
      </h4>
      <h4 className="text-lg mb-2">
        <span className="font-semibold">Email:</span> mebellux@abv.bg
      </h4>
      <h4 className="text-lg mb-4">
        Адрес:{" "}
        <span className="font-semibold">
          гр. Велинград, ул. &quot;Чавдар Войвода&quot; 29, 4600
        </span>
      </h4>
      <form className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Име"
          required
          className="px-4 py-2 border rounded"
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          className="px-4 py-2 border rounded"
        />
        <input
          name="phone"
          type="text"
          placeholder="Телефон"
          required
          className="px-4 py-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Съобщение"
          className="px-4 py-2 border rounded"
        />
        <button
          className="px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          type="submit"
          onSubmit={sendEmail}
        >
          Изпрати
        </button>
      </form>
    </section>
  );
}
