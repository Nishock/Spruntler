import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

type SocialIconType = {
  icon: any;
  href: string;
  color: string;
};

const socialIcons: SocialIconType[] = [
  { icon: faInstagram, href: "https://www.instagram.com/spruntler?igsh=MWRwMmtsdXp6a3k2bA==", color: "hover:text-pink-500" },
  { icon: faLinkedin, href: "https://www.linkedin.com/company/spruntler/", color: "hover:text-blue-700" },
];

type SocialItemProps = {
  social: SocialIconType;
};

const SocialItem: React.FC<SocialItemProps> = ({ social }) => (
  <li className="mx-3">
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-400 text-2xl transition-all duration-300 ${social.color} hover:-translate-y-1`}
    >
      <FontAwesomeIcon icon={social.icon} />
    </a>
  </li>
);

export default function SiteFooter() {
  return (
    <footer className="py-1">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Link
              href="/"
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Spruntler
            </Link>
          </div>
          <ul className="flex justify-center items-center mb-8">
            {socialIcons.map((social, i) => (
              <SocialItem social={social} key={i} />
            ))}
          </ul>

          <div className="border-t border-gray-800 w-full max-w-2xl mx-auto mb-6" />

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Spruntler. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
