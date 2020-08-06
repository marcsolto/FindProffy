import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/13425122?s=60&v=4"
          alt="Avatar"
        />
        <div>
          <strong>Marcelo Soltowski</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla.
        <br />
        BlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablabla
      </p>
      <footer>
        <p>
          Preço / Hora <strong>R$ 84,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
