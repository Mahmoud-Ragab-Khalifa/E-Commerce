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
      {socialMedia.map((item) => (
        <a
          className="text-white fill-white"
          key={item.name}
          href={`http://${item.name}.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <item.icon size={16} />
        </a>
      ))}
    </>
  );
};

export default SocialMedia;
