import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import logo from '../assets/logo.jpeg';
import toast from 'react-hot-toast';
import { FiLogOut, FiUser } from 'react-icons/fi';
import { RiLeafLine } from 'react-icons/ri';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logged out successfully');
                navigate('/');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const navLinkClass = ({ isActive }) =>
        `px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
            isActive
                ? 'bg-emerald-100 text-emerald-800 font-semibold'
                : 'text-gray-600 hover:text-emerald-700 hover:bg-emerald-50'
        }`;

    const links = (
        <>
            <li>
                <NavLink to="/" className={navLinkClass}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/plants" className={navLinkClass}>
                    Plants
                </NavLink>
            </li>
            <li>
                <NavLink to="/profile" className={navLinkClass}>
                    My Profile
                </NavLink>
            </li>
        </>
    );

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="navbar min-h-16 px-0">
                    <div className="navbar-start gap-2">
                        {/* Mobile dropdown */}
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-50 mt-3 w-56 p-3 shadow-lg border border-gray-100 gap-1"
                            >
                                {links}
                            </ul>
                        </div>

                        {/* Brand Logo */}
                        <Link to="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-emerald-800 hover:opacity-90 transition">
                            {logo ? (
                                <img className="w-9 h-9 rounded-full object-cover ring-2 ring-emerald-500/20" src={logo} alt="GreenNest" />
                            ) : (
                                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                                    <RiLeafLine className="text-xl" />
                                </div>
                            )}
                            <span className="flex items-center">
                                Green<span className="text-emerald-600">Nest</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex items-center gap-2">
                            {links}
                        </ul>
                    </div>

                    {/* Navbar End / Auth buttons */}
                    <div className="navbar-end gap-3">
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar ring-2 ring-emerald-500/30 hover:ring-emerald-500 transition duration-200"
                                    title={user.displayName || user.email}
                                >
                                    <div className="w-10 rounded-full">
                                        <img
                                            src={
                                                user.photoURL ||
                                                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
                                            }
                                            alt={user.displayName || 'User Profile'}
                                            referrerPolicy="no-referrer"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';
                                            }}
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu dropdown-content bg-base-100 rounded-2xl z-50 mt-3 w-60 p-3 shadow-xl border border-gray-100"
                                >
                                    <li className="menu-title px-4 py-2 border-b border-gray-100 mb-1">
                                        <p className="font-semibold text-gray-800 text-sm truncate">
                                            {user.displayName || 'Plant Lover'}
                                        </p>
                                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                    </li>
                                    <li>
                                        <Link to="/profile" className="flex items-center gap-2 py-2.5 text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg">
                                            <FiUser className="text-emerald-600" />
                                            <span>My Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogOut}
                                            className="flex items-center gap-2 py-2.5 text-rose-600 hover:bg-rose-50 rounded-lg font-medium"
                                        >
                                            <FiLogOut />
                                            <span>Logout</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link
                                    to="/login"
                                    className="btn btn-ghost btn-sm sm:btn-md font-medium text-emerald-800 hover:bg-emerald-50 rounded-xl"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="btn btn-sm sm:btn-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium border-none shadow-sm shadow-emerald-600/30 rounded-xl"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
