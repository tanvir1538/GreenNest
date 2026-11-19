import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-emerald-50/20 text-gray-800">
            {/* Sticky/Fixed Navbar */}
            <Navbar />

            {/* Main Outlet content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Persistent Footer */}
            <Footer />
        </div>
    );
};

export default HomeLayout;
