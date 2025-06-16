const NewsLetter = () => {
  return (
    <div className="bg-yellow-200 py-10 px-4 flex flex-col items-center text-center">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Subscribe to Our Newsletter</h2>
        <p className="text-sm text-gray-700">
          Get updates on latest products & special offers.
        </p>
      </div>

      <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md border border-gray-300 w-full flex-1"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          Subscribe
        </button>
      </form>

      <p className="text-xs text-gray-600 mt-4">
        We respect your privacy. No spam ever.
      </p>
    </div>
  );
};

export default NewsLetter;
