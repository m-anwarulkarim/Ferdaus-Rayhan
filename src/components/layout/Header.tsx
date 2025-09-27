// src/components/Header/Header.tsx
import { ModeToggle } from "../theme/mode-toggle";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        backdropFilter: "blur(10px)",
        zIndex: 10,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "14px 0",
        }}
      >
        <strong>Ferdaus Rayhan</strong>
        <nav style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
