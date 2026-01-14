import SocialLinks from "../components/SocialLinks";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto mt-12 px-6">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-gray-600 mb-8">
        The fastest way to reach me is email or LinkedIn. I’m open to internships, research,
        and collaborative projects.
      </p>

      <div className="p-6 border rounded-xl shadow-sm bg-white">
        <h2 className="text-xl font-semibold mb-4">Links</h2>
        <SocialLinks />
      </div>
    </div>
  );
}
