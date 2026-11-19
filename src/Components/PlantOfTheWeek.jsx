import { Link } from 'react-router-dom';
import { FaCrown, FaStar, FaWater, FaSun, FaThermometerHalf, FaArrowRight } from 'react-icons/fa';

const PlantOfTheWeek = () => {
    return (
        <section className="my-20">
            <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
                {/* Decorative background glow */}
                <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left details */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
                            <FaCrown className="text-amber-300" />
                            <span>Featured • Plant of the Week</span>
                        </div>

                        <div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                                Monstera Deliciosa
                            </h2>
                            <p className="text-emerald-200/90 text-sm mt-1">
                                Category: Tropical Foliage • Origin: Rainforests of Southern Mexico
                            </p>
                        </div>

                        <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                            Loved worldwide for its stunning split leaves and dramatic tropical silhouette. This week&apos;s curated specimen comes pre-acclimated for indoor conditions, ready to become the majestic centerpiece of your living room.
                        </p>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 pt-2">
                            <div className="bg-emerald-950/60 border border-emerald-700/50 rounded-xl p-3 text-center">
                                <FaWater className="mx-auto text-sky-400 text-lg mb-1" />
                                <span className="text-xs text-emerald-200 block">Water</span>
                                <span className="text-sm font-bold text-white">Every 7-10 Days</span>
                            </div>
                            <div className="bg-emerald-950/60 border border-emerald-700/50 rounded-xl p-3 text-center">
                                <FaSun className="mx-auto text-amber-400 text-lg mb-1" />
                                <span className="text-xs text-emerald-200 block">Light</span>
                                <span className="text-sm font-bold text-white">Bright Indirect</span>
                            </div>
                            <div className="bg-emerald-950/60 border border-emerald-700/50 rounded-xl p-3 text-center">
                                <FaThermometerHalf className="mx-auto text-emerald-400 text-lg mb-1" />
                                <span className="text-xs text-emerald-200 block">Temp</span>
                                <span className="text-sm font-bold text-white">65°F - 85°F</span>
                            </div>
                        </div>

                        {/* Pricing & CTA */}
                        <div className="flex flex-wrap items-center gap-6 pt-2">
                            <div>
                                <span className="text-xs text-emerald-300 block">Special Week Offer</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-extrabold text-white">$38</span>
                                    <span className="text-sm line-through text-emerald-300/60">$48</span>
                                </div>
                            </div>
                            <Link
                                to="/plant/2"
                                className="btn bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold border-none px-6 rounded-xl shadow-lg shadow-amber-400/20"
                            >
                                <span>Discover Details</span>
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>

                    {/* Right Featured Image */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-700/40">
                            <img
                                src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80"
                                alt="Monstera Deliciosa - Plant of the Week"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-emerald-950/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-amber-300 flex items-center gap-1.5 border border-emerald-600/40">
                                <FaStar /> 4.8 Rating
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlantOfTheWeek;
