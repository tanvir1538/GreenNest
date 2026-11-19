import { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff, FiMail, FiLock, FiAlertCircle } from 'react-icons/fi';
import { RiLeafLine } from 'react-icons/ri';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        signIn(email, password)
            .then((result) => {
                setLoading(false);
                toast.success(`Welcome back, ${result.user.displayName || 'Plant Lover'}!`);
                navigate(from, { replace: true });
            })
            .catch((err) => {
                setLoading(false);
                let message = err.message;
                if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password') {
                    message = 'Invalid email or password. Please try again.';
                } else if (err.code === 'auth/user-not-found') {
                    message = 'No account found with this email.';
                } else if (err.code === 'auth/too-many-requests') {
                    message = 'Too many failed login attempts. Please reset your password or try later.';
                }
                setError(message);
                toast.error(message);
            });
    };

    const handleGoogleSignIn = () => {
        setError('');
        setLoading(true);

        signInWithGoogle()
            .then((result) => {
                setLoading(false);
                toast.success(`Welcome, ${result.user.displayName || 'Plant Lover'}!`);
                navigate(from, { replace: true });
            })
            .catch((err) => {
                setLoading(false);
                setError(err.message);
                toast.error(err.message);
            });
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md bg-white rounded-3xl border border-emerald-100 shadow-xl p-8 sm:p-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-3">
                        <RiLeafLine className="text-2xl" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                        Login to GreenNest
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Welcome back! Enter your botanical sanctuary.
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
                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email field */}
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

                    {/* Password field with toggle */}
                    <div>
                        <div className="flex items-center justify-between mb-1.5">
                            <label className="block text-xs font-semibold text-gray-700">
                                Password
                            </label>
                            {/* Forgot password link passing typed email */}
                            <Link
                                to="/forgot-password"
                                state={{ email }}
                                className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="relative">
                            <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                placeholder="••••••••"
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
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold border-none rounded-xl shadow-md shadow-emerald-600/30 text-sm mt-3"
                    >
                        {loading ? <span className="loading loading-spinner loading-sm" /> : 'Login'}
                    </button>
                </form>

                {/* Divider */}
                <div className="divider my-6 text-xs text-gray-400">OR CONTINUE WITH</div>

                {/* Google Sign-in Button */}
                <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                    className="btn btn-outline w-full border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl font-medium text-sm flex items-center justify-center gap-3 normal-case shadow-xs"
                >
                    <FcGoogle className="text-xl" />
                    <span>Sign in with Google</span>
                </button>

                {/* Signup redirect link */}
                <p className="text-center text-xs text-gray-500 mt-8">
                    Don&apos;t have an account yet?{' '}
                    <Link
                        to="/signup"
                        state={{ from: location.state?.from }}
                        className="text-emerald-700 font-bold hover:underline"
                    >
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
