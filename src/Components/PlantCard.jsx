import { Link } from 'react-router-dom';
import { FaStar, FaLeaf } from 'react-icons/fa';
import { BsShieldCheck } from 'react-icons/bs';

const PlantCard = ({ plant }) => {
    const {
        plantId,
        plantName,
        category,
        price,
        rating,
        image,
        careLevel,
        availableStock,
        providerName
    } = plant;

    const careBadgeColor = {
        Easy: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        Moderate: 'bg-amber-100 text-amber-800 border-amber-200',
        Expert: 'bg-purple-100 text-purple-800 border-purple-200'
    }[careLevel] || 'bg-gray-100 text-gray-800 border-gray-200';

    return (
        <div className="group bg-white rounded-2xl overflow-hidden border border-emerald-100/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            {/* Image & Badges */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                    src={image}
                    alt={plantName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-md text-emerald-800 shadow-sm border border-emerald-100">
                        {category}
                    </span>
                </div>

                {/* Care Level */}
                <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full border shadow-sm ${careBadgeColor}`}>
                        {careLevel}
                    </span>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                    {/* Rating & Stock */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <div className="flex items-center gap-1 text-amber-500 font-semibold">
                            <FaStar />
                            <span>{rating}</span>
                            <span className="text-gray-400 font-normal">/ 5.0</span>
                        </div>
                        <span className={`font-medium ${availableStock > 0 ? 'text-emerald-700' : 'text-rose-500'}`}>
                            {availableStock > 0 ? `${availableStock} in stock` : 'Out of stock'}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-1 mb-1">
                        {plantName}
                    </h3>

                    {/* Provider */}
                    <p className="text-xs text-gray-500 flex items-center gap-1.5 mb-4">
                        <BsShieldCheck className="text-emerald-600" />
                        <span>By {providerName}</span>
                    </p>
                </div>

                {/* Price & Action */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div>
                        <span className="text-xs text-gray-400 block font-medium">Price</span>
                        <span className="text-xl font-extrabold text-emerald-700">${price}</span>
                    </div>

                    <Link
                        to={`/plant/${plantId}`}
                        className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 text-white font-medium border-none rounded-xl px-4 shadow-sm shadow-emerald-600/20"
                    >
                        <FaLeaf className="text-xs" />
                        <span>View Details</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;
