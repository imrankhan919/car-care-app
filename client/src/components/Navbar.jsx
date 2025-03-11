import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-primary">
            AutoFix Pro
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="#services"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              My Complaints
            </Link>
            <Link
              to="#about"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Raise Complaint
            </Link>

            {!user ? (
              <>
                <Link
                  to="/login"
                  className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-medium bg-gray-400"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all duration-300 font-medium bg-blue-500"
                >
                  Register
                </Link>
              </>
            ) : (
              <a
                to="/register"
                className="text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all duration-300 font-medium bg-red-500"
              >
                Logout
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
