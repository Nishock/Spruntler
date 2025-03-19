import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faVimeo,
  faDropbox,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import Link from "next/link";

const socialIcons = [
  { icon: faTwitter, href: "#!", color: "hover:text-blue-400" },
  { icon: faFacebook, href: "#!", color: "hover:text-blue-600" },
  { icon: faVimeo, href: "#!", color: "hover:text-green-400" },
  { icon: faDropbox, href: "#!", color: "hover:text-blue-500" },
  { icon: faGithub, href: "#!", color: "hover:text-gray-200" },
];

const SocialItem = ({ social }) => (
  <li className="mx-3">
    <a
      href={social.href}
      className={`text-gray-400 text-2xl transition-all duration-300 ${social.color} hover:-translate-y-1`}
    >
      <FontAwesomeIcon icon={social.icon} />
    </a>
  </li>
);

SocialItem.propTypes = {
  social: PropTypes.object.isRequired,
};

export default function SiteFooter() {
  return (
    <footer className="  py-1">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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