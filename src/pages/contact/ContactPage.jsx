import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Fale conosco</h2>
        <form
          action="https://formsubmit.co/arthur_munhoz@hotmail.com"
          method="POST"
        >
          <div className="form-group">
            <input type="text" name="name" placeholder="Nome *" required />
            <input type="email" name="email" placeholder="E-mail *" required />
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Telefone *" required/>
            <input type="text" name="company" placeholder="Empresa" />
          </div>
          <div className="form-group">
            <select name="source" placeholder="Como nos Conheceu?" >
              <option value="">Como nos conheceu?</option>
              <option value="indicação">Indicação</option>
              <option value="linkedin">LinkedIn</option>
              <option value="google">Google</option>
              <option value="instagram">Instagram</option>
              <option value="outro">Outro</option>
            </select>          
          </div>
          <input type="hidden" name="_next" value="http://localhost:5173/obrigado" /> 
          <div className="form-group">
            <textarea name="message" placeholder="Mensagem" rows="3"></textarea>
          </div >
          <button className="submit"type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
