export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-4 tracking-tighter">POLARIS<span className="text-accent">.</span></h3>
          <p className="mb-4">Your global partner for premium industrial supplies, safety gear, and professional tools.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-accent">About Us</a></li>
            <li><a href="#" className="hover:text-accent">Careers</a></li>
            <li><a href="#" className="hover:text-accent">Store Locator</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Customer Service</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-accent">Contact Us</a></li>
            <li><a href="#" className="hover:text-accent">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-accent">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-accent">Power Tools</a></li>
            <li><a href="#" className="hover:text-accent">Safety Gear</a></li>
            <li><a href="#" className="hover:text-accent">Workwear</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Polaris Global Store. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}