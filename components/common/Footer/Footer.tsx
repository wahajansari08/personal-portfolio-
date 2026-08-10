"use client";
import { FadeInMount } from "@/components/motion";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <FadeInMount delay={0.12}>
      <p>
        Copyright © {year}{" "}
        <Link href="https://wahaj.pk" target="_blank">
          wahaj.pk.
        </Link>{" "}
        Some Rights Reserved.
      </p>
      </FadeInMount>
    </footer>
  );
}
