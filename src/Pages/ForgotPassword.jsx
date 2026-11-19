import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { FiMail, FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';

const ForgotPassword = () => {
    const location = useLocation();
    const { resetPassword } = useContext(AuthContext);

    // If navigated from login with prefilled email
    const [email, setEmail] = useState(location.state?.email || '');
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            toast.error('Please enter your account email address');
            return;
        }

        setLoading(true);

        resetPassword(email)
            .then(() => {
                setLoading(false);
                setSent(true);
                toast.success('Password reset email sent! Redirecting to Gmail...');
                // Challenge #2: Functional "Forgot Password" with Gmail redirect
                setTimeout(() => {
                    window.open('https://mail.google.com', '_blank');
                }, 1000);
            })
            .catch((err) => {
                setLoading(false);
                let message = err.message;
                if (err.code === 'auth/user-not-found') {
                    message = 'No user account found with this email.';
                } else if (err.code === 'auth/invalid-email') {
                    message = 'Please provide a valid email address.';
                }
                toast.error(message);
            });
    };

    return (
        <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md bg-white rounded-3xl border border-emerald-100 shadow-xl p-8 sm:p-10">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-3">
                        <RiLockPasswordLine className="text-2xl" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                        Forgot Password?
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Enter your registered email and we&apos;ll send you instructions to reset your password.
                    </p>
                </div>

                {sent ? (
                    <div className="text-center space-y-4">
                        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-800 leading-relaxed">
                            A password reset link has been dispatched to <strong>{email}</strong>.
                            Please check your inbox or spam folder.
                        </div>

                        <a
                            href="https://mail.google.com"
                            target="_blank"
                            rel="noreferrer"
                            className="btn w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold border-none rounded-xl gap-2 shadow-md shadow-emerald-600/30 text-sm"
                        >
                            <span>Open Gmail Inbox</span>
                            <FiExternalLink />
                        </a>

                        <button
                            type="button"
                            onClick={() => setSent(false)}
                            className="text-xs text-gray-500 hover:text-emerald-700 font-medium underline block mx-auto"
                        >
                            Try another email
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleResetPassword} className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                Your Registered Email
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

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold border-none rounded-xl shadow-md shadow-emerald-600/30 text-sm mt-2"
                        >
                            {loading ? (
                                <span className="loading loading-spinner loading-sm" />
                            ) : (
                                'Reset Password & Go to Gmail'
                            )}
                        </button>
                    </form>
                )}

                <div className="text-center mt-8">
                    <Link
                        to="/login"
                        className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:underline"
                    >
                        <FiArrowLeft />
                        <span>Back to Login</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
