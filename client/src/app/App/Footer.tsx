import React from 'react';
import '../css/Footer.css'; // Импорт стилей
// Типизация для компонента Footer
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/about" className="footer-link">О нас</a>
          <a href="/contact" className="footer-link">Контакты</a>
          <a href="/privacy" className="footer-link">Политика конфиденциальности</a>
          <a href="/terms" className="footer-link">Условия использования</a>
        </div>
        <div className="footer-copy">
          <p>© 2024 Все права не защищены</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
