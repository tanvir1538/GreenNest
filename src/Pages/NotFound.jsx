import { Link } from 'react-router-dom';
import { RiLeafLine } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 shadow-inner">
                <RiLeafLine className="text-4xl animate-bounce" />
            </div>
            <span className="text-6xl sm:text-7xl font-extrabold text-emerald-800 tracking-tight mb-2">
                404
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Lost in the Foliage?
            </h1>
            <p className="text-gray-500 text-sm sm:text-base max-w-md mb-8">
                The botanical page you are looking for has been pruned or transplanted to another sanctuary.
            </p>
            <Link
                to="/"
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white font-semibold border-none rounded-xl px-6 gap-2 shadow-lg shadow-emerald-600/30"
            >
                <FaHome />
                <span>Return to Home</span>
            </Link>
        </div>
    );
};

export default NotFound;
