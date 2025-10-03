import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <a href="https://github.com/Alexa643" target="_blank">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/georgiana-alexandra-anghelescu242/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="anghelescugeorgiana242@gmail.com">Email</a>
      </div>
      <p>© {new Date().getFullYear()} Andrei – Toate drepturile rezervate.</p>
    </footer>
  )
}
