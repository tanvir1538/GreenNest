import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPinterestP, FaHeart } from 'react-icons/fa';
import { RiLeafLine } from 'react-icons/ri';
import logo from '../assets/logo.jpeg';

const Footer = () => {
    return (
        <footer className="bg-emerald-950 text-emerald-100 mt-20 pt-16 pb-8 border-t border-emerald-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-emerald-900/60">
                    {/* Brand Info */}
                    <div className="md:col-span-2 space-y-4">
                        <Link to="/" className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-white">
                            {logo ? (
                                <img className="w-9 h-9 rounded-full object-cover ring-2 ring-emerald-500/30" src={logo} alt="GreenNest" />
                            ) : (
                                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                                    <RiLeafLine className="text-xl" />
                                </div>
                            )}
                            <span>
                                Green<span className="text-emerald-400">Nest</span>
                            </span>
                        </Link>
                        <p className="text-emerald-200/80 text-sm leading-relaxed max-w-md">
                            Your serene digital sanctuary for discovering, caring for, and adopting healthy indoor plants. We help bring peaceful green vibes and purified air to every room in your home.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-emerald-900/60 hover:bg-emerald-600 text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="text-lg" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-emerald-900/60 hover:bg-emerald-600 text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="text-base" />
                            </a>
                            <a
                                href="https://pinterest.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-emerald-900/60 hover:bg-emerald-600 text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                                aria-label="Pinterest"
                            >
                                <FaPinterestP className="text-base" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-base mb-4 tracking-wide uppercase text-xs">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5 text-sm text-emerald-200/80">
                            <li>
                                <Link to="/plants" className="hover:text-emerald-400 transition-colors">
                                    Browse Plants
                                </Link>
                            </li>
                            <li>
                                <a href="#plant-tips" className="hover:text-emerald-400 transition-colors">
                                    Plant Care Tips
                                </a>
                            </li>
                            <li>
                                <a href="#green-experts" className="hover:text-emerald-400 transition-colors">
                                    Green Experts
                                </a>
                            </li>
                            <li>
                                <a href="#eco-decor" className="hover:text-emerald-400 transition-colors">
                                    Eco Decor Ideas
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Policies & Support */}
                    <div>
                        <h4 className="text-white font-semibold text-base mb-4 tracking-wide uppercase text-xs">
                            Support & Legal
                        </h4>
                        <ul className="space-y-2.5 text-sm text-emerald-200/80">
                            <li>
                                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                                    Contact Support
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="hover:text-emerald-400 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:text-emerald-400 transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300/60 gap-4">
                    <p>© 2025 GreenNest. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Cultivated with <FaHeart className="text-emerald-500 text-xs" /> for plant lovers everywhere.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
