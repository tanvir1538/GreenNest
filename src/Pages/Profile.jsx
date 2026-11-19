import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { FiUser, FiMail, FiImage, FiCheck, FiEdit2 } from 'react-icons/fi';
import { RiLeafLine } from 'react-icons/ri';

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);

    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [isEditing, setIsEditing] = useState(false);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        if (user) {
            setName(user.displayName || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user]);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            toast.error('Name cannot be empty');
            return;
        }

        setUpdating(true);
        updateUserProfile(name, photoURL)
            .then(() => {
                setUpdating(false);
                setIsEditing(false);
                toast.success('Profile updated successfully in real-time!');
            })
            .catch((err) => {
                setUpdating(false);
                toast.error(err.message || 'Failed to update profile');
            });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-10">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 tracking-wider uppercase px-3 py-1 bg-emerald-100 rounded-full mb-3">
                    <RiLeafLine />
                    <span>Member Sanctuary</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                    My Green Profile
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                    Manage your account identity, profile picture, and botanical preferences.
                </p>
            </div>

            <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden">
                {/* Banner Header */}
                <div className="h-36 bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
                </div>

                {/* Profile Card Body */}
                <div className="px-6 sm:px-10 pb-10 pt-0 relative">
                    {/* Avatar with Ring */}
                    <div className="-mt-16 sm:-mt-20 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 mb-8">
                        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                            <div className="relative">
                                <img
                                    src={
                                        user?.photoURL ||
                                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
                                    }
                                    alt={user?.displayName || 'User Profile'}
                                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-white shadow-xl bg-white"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80';
                                    }}
                                />
                                <span className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full" />
                            </div>

                            <div className="space-y-1">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {user?.displayName || 'Anonymous Plant Caretaker'}
                                </h2>
                                <p className="text-sm text-gray-500 flex items-center justify-center sm:justify-start gap-1.5">
                                    <FiMail className="text-emerald-600" />
                                    <span>{user?.email}</span>
                                </p>
                            </div>
                        </div>

                        {!isEditing && (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="btn btn-sm sm:btn-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200 rounded-xl font-semibold gap-2"
                            >
                                <FiEdit2 />
                                <span>Edit Profile</span>
                            </button>
                        )}
                    </div>

                    {/* Information Grid or Edit Form */}
                    {isEditing ? (
                        <form onSubmit={handleUpdateProfile} className="bg-emerald-50/50 p-6 sm:p-8 rounded-2xl border border-emerald-100 space-y-5">
                            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                                <FiEdit2 className="text-emerald-700" />
                                <span>Update Profile Details</span>
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                        Display Name
                                    </label>
                                    <div className="relative">
                                        <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="input input-bordered w-full pl-10 pr-4 rounded-xl border-gray-200 text-sm bg-white"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                        Photo URL
                                    </label>
                                    <div className="relative">
                                        <FiImage className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="url"
                                            value={photoURL}
                                            onChange={(e) => setPhotoURL(e.target.value)}
                                            className="input input-bordered w-full pl-10 pr-4 rounded-xl border-gray-200 text-sm bg-white"
                                            placeholder="https://example.com/avatar.jpg"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsEditing(false);
                                        setName(user?.displayName || '');
                                        setPhotoURL(user?.photoURL || '');
                                    }}
                                    className="btn btn-sm btn-ghost text-gray-500 rounded-xl"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={updating}
                                    className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl border-none gap-2 px-5"
                                >
                                    {updating ? (
                                        <span className="loading loading-spinner loading-xs" />
                                    ) : (
                                        <>
                                            <FiCheck />
                                            <span>Update Profile</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
                                <span className="text-xs text-gray-400 font-medium">Display Name</span>
                                <p className="text-base font-bold text-gray-800">
                                    {user?.displayName || 'Not Provided'}
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
                                <span className="text-xs text-gray-400 font-medium">Email Address</span>
                                <p className="text-base font-bold text-gray-800 truncate">
                                    {user?.email}
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
                                <span className="text-xs text-gray-400 font-medium">Account Status</span>
                                <p className="text-base font-bold text-emerald-700 flex items-center gap-1.5">
                                    <FiCheck className="text-emerald-600" />
                                    <span>Active Caretaker</span>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
