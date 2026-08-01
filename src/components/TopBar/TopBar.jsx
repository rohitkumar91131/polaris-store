import { FiPhone, FiMail, FiMapPin, FiGlobe } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="hidden md:flex justify-between items-center px-8 py-2 bg-secondary text-xs text-gray-600 border-b">
      <div className="flex gap-6">
        <span className="flex items-center gap-2 hover:text-accent cursor-pointer"><FiPhone /> +1 (800) 123-4567</span>
        <span className="flex items-center gap-2 hover:text-accent cursor-pointer"><FiMail /> support@polarisglobal.com</span>
      </div>
      <div className="flex gap-6">
        <span className="flex items-center gap-2 hover:text-accent cursor-pointer"><FiMapPin /> Store Location</span>
        <span className="flex items-center gap-2 hover:text-accent cursor-pointer"><FiGlobe /> English (USD)</span>
      </div>
    </div>
  );
}