import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-primary">
            AutoFix Pro
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium bg-gray-400"
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
              <>
                <Link
                  to="/car/all-complaints"
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  My Complaints
                </Link>
                <Link
                  to="/car/raise-complaint"
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  Raise Complaint
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all duration-300 font-medium bg-red-500"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
