// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} Yi Yang Lin</span>
        <span className="muted">Let's Connect!</span>
      </div>
    </footer>
  );
}
