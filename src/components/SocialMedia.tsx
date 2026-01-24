"use client";

// SOCIAL MEDIA
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const socialMedia = [
  {
    name: "x",
    icon: XIcon,
  },
  {
    name: "facebook",
    icon: FacebookIcon,
  },
  {
    name: "instagram",
    icon: InstagramIcon,
  },
];
const SocialMedia = () => {
  return (
    <>
      {socialMedia.map((item) => (
        <a
          className="text-white"
          key={item.name}
          href={`http://${item.name}.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <item.icon sx={{ fontSize: 16 }} />
        </a>
      ))}
    </>
  );
};

export default SocialMedia;
