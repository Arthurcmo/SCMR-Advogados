import React from 'react';
import './ContactPage.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contato</h2>
        <p><FaMapMarkerAlt /> Av. Exemplo, 123 - São Paulo, SP</p>
        <p><FaPhoneAlt /> (11) 99999-9999</p>
        <p><FaEnvelope /> contato@scm.adv.br</p>

        <div className="socials">
          <h3>Redes Sociais</h3>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>

      <div className="contact-form">
        <h2>Fale conosco</h2>
        <form
          action="https://formsubmit.co/arthur_munhoz@hotmail.com"
          method="POST"
        >
          <div className="form-group">
            <input type="text" name="name" placeholder="Nome" required />
            <input type="email" name="email" placeholder="E-mail" required />
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Telefone" />
            <input type="text" name="company" placeholder="Empresa" />
          </div>
          <div className="form-group">
            <input type="text" name="position" placeholder="Cargo" />
            <input type="text" name="state" placeholder="Estado" />
            <input type="text" name="country" placeholder="País" />
          </div>
          <div className="form-group">
            <select name="source" placeholder="Como nos Conheceu?" required>
              <option value="">Como nos conheceu?</option>
              <option value="indicação">Indicação</option>
              <option value="linkedin">LinkedIn</option>
              <option value="google">Google</option>
              <option value="instagram">Instagram</option>
              <option value="outro">Outro</option>
            </select>          
          </div>
          <div className="form-group">
            <input type="text" name="subject" placeholder="Assunto"  />
          </div>
          <input type="hidden" name="_next" value="http://localhost:5173/obrigado" /> 
          <textarea name="message" placeholder="Mensagem" rows="5" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
