export default function Newsletter() {
  return (
    <section className="bg-primary text-white py-16 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Join Polaris Global</h2>
        <p className="text-gray-300 mb-8">Subscribe to receive updates, access to exclusive deals, and more.</p>
        <form className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <button type="submit" className="bg-accent hover:bg-blue-600 px-6 py-3 rounded-full font-bold transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}