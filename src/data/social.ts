import type { SocialLink } from "../types/SocialLink";

export const socialLinks: SocialLink[] = [
  {
    platform: "email",
    label: "Email",
    href: "mailto:YOUR_EMAIL_HERE",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/YOUR_PROFILE_HERE",
  },
  {
    platform: "github",
    label: "GitHub",
    href: "https://github.com/YOUR_USERNAME_HERE",
  },
  {
    platform: "medium",
    label: "Medium",
    href: "https://medium.com/@YOUR_HANDLE_HERE",
  },
  // Optional: add later when you have a PDF in /public
  // {
  //   platform: "resume",
  //   label: "Resume",
  //   href: "/resume.pdf",
  // },
];
