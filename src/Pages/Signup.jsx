import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff, FiUser, FiMail, FiImage, FiLock, FiAlertCircle } from 'react-icons/fi';
import { RiLeafLine } from 'react-icons/ri';

const Signup = () => {
    const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Password validation logic
    const validatePassword = (pwd) => {
        if (pwd.length < 6) {
            return 'Password must be at least 6 characters long.';
        }
        if (!/[A-Z]/.test(pwd)) {
            return 'Password must contain at least one uppercase letter (A-Z).';
        }
        if (!/[a-z]/.test(pwd)) {
            return 'Password must contain at least one lowercase letter (a-z).';
        }
        return '';
    };

    const handleSignup = (e) => {
        e.preventDefault();
        setError('');

        // 1. Password validation check
        const pwdError = validatePassword(password);
        if (pwdError) {
            setError(pwdError);
            toast.error(pwdError);
            return;
        }

        setLoading(true);

        const defaultAvatar =
            photoURL.trim() ||
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';

        createUser(email, password)
            .then(() => {
                // Update profile with Name and Photo
                return updateUserProfile(name, defaultAvatar);
            })
            .then(() => {
                setLoading(false);
                toast.success('Registration successful! Welcome to GreenNest.');
                navigate('/');
            })
            .catch((err) => {
                setLoading(false);
                let message = err.message;
                if (err.code === 'auth/email-already-in-use') {
                    message = 'An account with this email already exists. Please log in.';
                } else if (err.code === 'auth/weak-password') {
                    message = 'Password is too weak. Please pick a stronger password.';
                }
                setError(message);
                toast.error(message);
            });
    };

    const handleGoogleSignIn = () => {
        setError('');
        setLoading(true);

        signInWithGoogle()
            .then(() => {
                setLoading(false);
                toast.success('Successfully signed in with Google!');
                navigate('/');
            })
            .catch((err) => {
                setLoading(false);
                setError(err.message);
                toast.error(err.message);
            });
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md bg-white rounded-3xl border border-emerald-100 shadow-xl p-8 sm:p-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-3">
                        <RiLeafLine className="text-2xl" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                        Create Your Account
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Join our passionate indoor plant community today.
                    </p>
                </div>

                {/* Inline Error Message */}
                {error && (
                    <div className="mb-6 p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2.5 text-xs text-rose-700 font-medium">
                        <FiAlertCircle className="text-base shrink-0" />
                        <span>{error}</span>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSignup} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Full Name
                        </label>
                        <div className="relative">
                            <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                            <input
                                type="text"
                                required
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input input-bordered w-full pl-10 pr-4 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm bg-gray-50/50"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Email Address
                        </label>
                        <div className="relative">
                            <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                            <input
                                type="email"
                                required
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input input-bordered w-full pl-10 pr-4 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm bg-gray-50/50"
                            />
                        </div>
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Photo URL
                        </label>
                        <div className="relative">
                            <FiImage className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                            <input
                                type="url"
                                placeholder="https://example.com/avatar.jpg"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                className="input input-bordered w-full pl-10 pr-4 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm bg-gray-50/50"
                            />
                        </div>
                        <span className="text-[11px] text-gray-400 mt-1 block">Optional (default photo will be used if blank)</span>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Password
                        </label>
                        <div className="relative">
                            <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                placeholder="Min 6 chars with uppercase & lowercase"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input input-bordered w-full pl-10 pr-11 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm bg-gray-50/50"
                            />
                            {/* Password Toggle Button */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <FiEyeOff className="text-base" /> : <FiEye className="text-base" />}
                            </button>
                        </div>
                        {/* Validation hints */}
                        <div className="text-[11px] text-gray-400 mt-1.5 space-y-0.5">
                            <p className={password.length >= 6 ? 'text-emerald-600 font-medium' : ''}>
                                • At least 6 characters
                            </p>
                            <p className={/[A-Z]/.test(password) ? 'text-emerald-600 font-medium' : ''}>
                                • At least one uppercase letter (A-Z)
                            </p>
                            <p className={/[a-z]/.test(password) ? 'text-emerald-600 font-medium' : ''}>
                                • At least one lowercase letter (a-z)
                            </p>
                        </div>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold border-none rounded-xl shadow-md shadow-emerald-600/30 text-sm mt-4"
                    >
                        {loading ? <span className="loading loading-spinner loading-sm" /> : 'Register'}
                    </button>
                </form>

                {/* Divider */}
                <div className="divider my-6 text-xs text-gray-400">OR REGISTER WITH</div>

                {/* Google Sign-in Button */}
                <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                    className="btn btn-outline w-full border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl font-medium text-sm flex items-center justify-center gap-3 normal-case shadow-xs"
                >
                    <FcGoogle className="text-xl" />
                    <span>Sign up with Google</span>
                </button>

                {/* Login redirect link */}
                <p className="text-center text-xs text-gray-500 mt-8">
                    Already have an account?{' '}
                    <Link to="/login" className="text-emerald-700 font-bold hover:underline">
                        Log in here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
