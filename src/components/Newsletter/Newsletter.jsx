export default function Newsletter() {
  return (
    <section className="bg-primary text-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join Polaris Global
        </h2>

        <p className="text-white/70 mb-8">
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="flex-1 rounded-full border-2 border-gray-300 bg-white px-5 py-3 text-gray-900 placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent"
          />

          <button
            type="submit"
            className="rounded-full bg-accent px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}