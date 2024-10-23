import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const github_url = process.env.GITHUB_USERNAME
    ? `https://github.com/${process.env.GITHUB_USERNAME}`
    : "";
  const linked_in_url = process.env.LINKED_IN_USER_ID
    ? `https://www.linkedin.com/in/${process.env.LINKED_IN_USER_ID}/`
    : "";
  const mailto_url = process.env.EMAIL ? `mailto:${process.env.EMAIL}` : "";

  return (
    <footer className="flex p-2 justify-center gap-6 bg-slate-600">
      <Link
        href={github_url}
        target="_blank"
        rel="noopener noreferrer"
        className="my-4 text-white"
      >
        <FaGithub size={30} />
      </Link>
      <Link
        href={linked_in_url}
        target="_blank"
        rel="noopener noreferrer"
        className="my-4 text-white"
      >
        <FaLinkedin size={30} />
      </Link>
      <Link href={mailto_url} className="my-4 text-white">
        <FaEnvelope size={30} />
      </Link>
    </footer>
  );
}

const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
    backgroundColor: "#282c34",
  },
  icon: {
    margin: "0 1rem",
    color: "white",
    textDecoration: "none",
  },
};
