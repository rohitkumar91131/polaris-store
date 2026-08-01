export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div>
          <a href="/" className="inline-block mb-4">
            <img
              src="/assets/logo.webp" // Change extension if needed (logo.webp)
              alt="Polaris"
              className="h-12 w-auto object-contain"
            />
          </a>

          <p className="leading-relaxed">
            Your global partner for premium industrial supplies, safety gear,
            and professional tools.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4">
            Company
          </h4>

          <ul className="space-y-2">
            <li>
              <a href="#" className="transition hover:text-accent">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-accent">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-accent">
                Store Locator
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4">
            Customer Service
          </h4>

          <ul className="space-y-2">
            <li>
              <a href="#" className="transition hover:text-accent">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-accent">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-accent">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4">
            Categories
          </h4>

          <ul className="space-y-2">
            <li>
              <a href="#" className="transition hover:text-accent">
                Power Tools
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-accent">
                Safety Gear
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-accent">
                Workwear
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Polaris Global Store. All rights
          reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="#" className="transition hover:text-white">
            Privacy Policy
          </a>

          <a href="#" className="transition hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}