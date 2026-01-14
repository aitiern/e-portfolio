import { socialLinks } from "../data/social";

type Props = {
  className?: string;
};

export default function SocialLinks({ className = "" }: Props) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-50 transition"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
