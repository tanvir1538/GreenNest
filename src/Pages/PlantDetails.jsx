import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { FaStar, FaArrowLeft, FaCheckCircle, FaCalendarCheck } from 'react-icons/fa';
import { RiLeafLine, RiPlantLine } from 'react-icons/ri';
import { BsShieldCheck } from 'react-icons/bs';

const PlantDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);

    // Consultation form state
    const [name, setName] = useState(user?.displayName || '');
    const [email, setEmail] = useState(user?.email || '');
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetch('/plants.json')
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((p) => String(p.plantId) === String(id));
                setPlant(found || null);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        if (user) {
            if (!name && user.displayName) setName(user.displayName);
            if (!email && user.email) setEmail(user.email);
        }
    }, [user, name, email]);

    const handleBookConsultation = (e) => {
        e.preventDefault();
        if (!name.trim() || !email.trim()) {
            toast.error('Please provide your name and email');
            return;
        }

        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            toast.success(
                `Consultation booked for ${plant?.plantName}! Our expert will email you at ${email}.`,
                { duration: 4000 }
            );
            // Clear form
            setName('');
            setEmail('');
        }, 600);
    };

    if (loading) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
                <span className="loading loading-spinner loading-lg text-emerald-600"></span>
                <p className="text-gray-500 text-sm">Gathering botanical details...</p>
            </div>
        );
    }

    if (!plant) {
        return (
            <div className="max-w-lg mx-auto my-20 p-8 text-center bg-white rounded-3xl border border-gray-100 shadow-sm">
                <RiPlantLine className="text-5xl text-emerald-400 mx-auto mb-3" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Plant Not Found</h2>
                <p className="text-sm text-gray-500 mb-6">
                    The requested indoor plant does not exist in our catalog.
                </p>
                <Link to="/plants" className="btn bg-emerald-600 text-white rounded-xl">
                    Back to Plants
                </Link>
            </div>
        );
    }

    const {
        plantName,
        category,
        price,
        rating,
        description,
        image,
        availableStock,
        careLevel,
        providerName
    } = plant;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Back button */}
            <Link
                to="/plants"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 mb-8 transition"
            >
                <FaArrowLeft />
                <span>Back to All Plants</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left: Large Image & Quick Specs */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="relative aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-emerald-100 bg-gray-100">
                        <img
                            src={image}
                            alt={plantName}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-800 shadow-sm">
                            {category}
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-2xl border border-emerald-100/70 text-center shadow-xs">
                            <span className="text-xs text-gray-400 block font-medium">Care Level</span>
                            <span className="text-sm font-bold text-emerald-700">{careLevel}</span>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-emerald-100/70 text-center shadow-xs">
                            <span className="text-xs text-gray-400 block font-medium">Stock Status</span>
                            <span className={`text-sm font-bold ${availableStock > 0 ? 'text-emerald-700' : 'text-rose-500'}`}>
                                {availableStock > 0 ? `${availableStock} Available` : 'Sold Out'}
                            </span>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-emerald-100/70 text-center shadow-xs">
                            <span className="text-xs text-gray-400 block font-medium">Satisfaction</span>
                            <span className="text-sm font-bold text-amber-500 flex items-center justify-center gap-1">
                                <FaStar /> {rating}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right: Plant Info & Book Consultation Form */}
                <div className="lg:col-span-6 space-y-8">
                    <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 tracking-wider uppercase mb-2">
                            <RiLeafLine />
                            <span>Verified Indoor Specimen</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                            {plantName}
                        </h1>

                        <div className="flex items-center gap-3 mt-3 text-sm text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <BsShieldCheck className="text-emerald-600" />
                                <span>Curated by <strong className="text-gray-700">{providerName}</strong></span>
                            </span>
                            <span>•</span>
                            <span className="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-md text-xs">
                                In Stock
                            </span>
                        </div>

                        <div className="my-5">
                            <span className="text-xs text-gray-400 font-medium block">Adoption Price</span>
                            <div className="text-3xl font-extrabold text-emerald-700">${price}</div>
                        </div>

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed bg-emerald-50/40 p-4 rounded-2xl border border-emerald-100/60">
                            {description}
                        </p>
                    </div>

                    {/* Book Consultation Form */}
                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-emerald-200/80 shadow-md">
                        <div className="flex items-center gap-2.5 mb-2">
                            <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                                <FaCalendarCheck className="text-base" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">
                                    Book a Plant Consultation
                                </h3>
                                <p className="text-xs text-gray-500">
                                    Get custom potting, soil advice, and care schedules from our experts.
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleBookConsultation} className="space-y-4 mt-6">
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                    Your Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="input input-bordered w-full rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm bg-gray-50/50"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                    Your Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input input-bordered w-full rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm bg-gray-50/50"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="btn w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold border-none rounded-xl shadow-md shadow-emerald-600/30 text-sm mt-2 flex items-center justify-center gap-2"
                            >
                                {submitting ? (
                                    <>
                                        <span className="loading loading-spinner loading-sm"></span>
                                        <span>Booking Session...</span>
                                    </>
                                ) : (
                                    <>
                                        <FaCheckCircle />
                                        <span>Book Now</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;
