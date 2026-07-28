import Link from "next/link";

export default function Custom404() {
  return (
    <div style={{ minHeight: "60vh", display: "grid", placeItems: "center", padding: 24 }}>
      <div style={{ textAlign: "center", maxWidth: 520 }}>
        <h1 style={{ fontSize: 48, marginBottom: 8 }}>404</h1>
        <p style={{ marginBottom: 20 }}>Page not found.</p>
        <Link href="/" style={{ textDecoration: "underline" }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}

