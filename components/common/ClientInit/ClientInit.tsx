"use client";
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { useAOS } from "@/hooks/useAnimations";

export default function ClientInit(): null {
  const pathname = usePathname();
  useAOS();

  useLayoutEffect(() => {
    const pageClasses = ["home", "about", "portfolio", "contact", "blog", "blog-post"];
    const body = document.body;

    pageClasses.forEach((cls) => body.classList.remove(cls));
    body.classList.add("has-default-menu");

    if (pathname === "/") {
      body.classList.add("home");
      return;
    }

    if (pathname === "/about") {
      body.classList.add("about");
      return;
    }

    if (pathname === "/portfolio") {
      body.classList.add("portfolio");
      return;
    }

    if (pathname === "/contact") {
      body.classList.add("contact");
      return;
    }

    if (pathname.startsWith("/blog/")) {
      body.classList.add("blog-post");
      return;
    }

    if (pathname === "/blog") {
      body.classList.add("blog");
      return;
    }
  }, [pathname]);

  return null;
}
