import { Link } from "react-router-dom";

export default function Footer() {
     console.log("Render: footer");
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
     
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
         
          <div>
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <ul className="space-y-2">
              <li><Link to="/sign-up" className="hover:text-gray-300">How we operate</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Testimonials</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Vision</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Trustees</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Mode of operation</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Contact</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Queries</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Follow-ups</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Sponsorships</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">Social Media</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Instagram</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Facebook</Link></li>
              <li><Link to="/" className="hover:text-gray-300">YouTube</Link></li>
              <li><Link to="/" className="hover:text-gray-300">X (Twitter)</Link></li>
            </ul>
          </div>
        </div>


        <div className="text-center mb-8">
          <p className="text-xl mb-2 font-semibold">Register here to receive notifications for new arrivals</p>
          <p className="text-gray-400 mb-4">You can opt out any time.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded bg-gray-800 border border-white text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-500"
            >
              Register
            </button>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-4 sm:mb-0">
            <i className="fas fa-shopping-cart" />
            FALLS
          </Link>

          <div className="flex gap-4 text-xl">
            <Link to="/" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f hover:text-blue-500" /></Link>
            <Link to="/" target="_blank" aria-label="Instagram"><i className="fab fa-instagram hover:text-pink-400" /></Link>
            <Link to="/" target="_blank" aria-label="YouTube"><i className="fab fa-youtube hover:text-red-500" /></Link>
            <Link to="/" target="_blank" aria-label="Twitter"><i className="fab fa-twitter hover:text-sky-400" /></Link>
            <Link to="/" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin hover:text-blue-600" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
