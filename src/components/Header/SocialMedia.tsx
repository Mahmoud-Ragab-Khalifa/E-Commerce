"use client";

import { Twitter, Facebook, Instagram } from "lucide-react";

// SOCIAL MEDIA

const socialMedia = [
  {
    name: "x",
    icon: Twitter,
  },
  {
    name: "facebook",
    icon: Facebook,
  },
  {
    name: "instagram",
    icon: Instagram,
  },
];

const SocialMedia = () => {
  return (
    <>
      {socialMedia.map(({ name, icon: Icon }) => (
        <a
          aria-label={`Follow Us On ${name.toUpperCase()}`}
          className="text-white fill-white"
          key={name}
          href={`http://${name}.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size={16} />
        </a>
      ))}
    </>
  );
};

export default SocialMedia;
