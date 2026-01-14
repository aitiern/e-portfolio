export type SocialPlatform = "email" | "linkedin" | "github" | "medium" | "resume";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}
