"use client";
import { usePathname } from "next/navigation";
import { FadeInMount } from "@/components/motion";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  // Hide footer on the home page
  if (pathname === "/") return null;

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
