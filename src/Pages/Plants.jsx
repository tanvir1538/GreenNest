import { useState, useEffect, useMemo } from 'react';
import PlantCard from '../Components/PlantCard';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { RiLeafLine } from 'react-icons/ri';

const Plants = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('default');

    useEffect(() => {
        fetch('/plants.json')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to load plants');
                return res.json();
            })
            .then((data) => {
                setPlants(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const categories = useMemo(() => {
        const unique = new Set(plants.map((p) => p.category));
        return ['All', ...Array.from(unique)];
    }, [plants]);

    const filteredPlants = useMemo(() => {
        return plants
            .filter((plant) => {
                const matchesCategory =
                    selectedCategory === 'All' || plant.category.toLowerCase() === selectedCategory.toLowerCase();
                const matchesSearch =
                    plant.plantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    plant.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    plant.description.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesCategory && matchesSearch;
            })
            .sort((a, b) => {
                if (sortBy === 'price-asc') return a.price - b.price;
                if (sortBy === 'price-desc') return b.price - a.price;
                if (sortBy === 'rating-desc') return b.rating - a.rating;
                return 0;
            });
    }, [plants, selectedCategory, searchQuery, sortBy]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 tracking-wider uppercase px-3 py-1 bg-emerald-100 rounded-full mb-3">
                    <RiLeafLine />
                    <span>Botanical Catalog</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                    Explore All Indoor Plants
                </h1>
                <p className="text-gray-600 text-sm sm:text-base mt-2">
                    Browse our lush collection of air purifiers, hardy low-light survivors, and striking tropical foliage.
                </p>
            </div>

            {/* Filter and Search Bar */}
            <div className="bg-white p-5 rounded-2xl border border-emerald-100/80 shadow-xs mb-8 space-y-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Search Input */}
                    <div className="relative w-full md:w-96">
                        <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        <input
                            type="text"
                            placeholder="Search plant by name, category..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="input input-bordered w-full pl-10 pr-4 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-gray-50/50 text-sm"
                        />
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                        <label htmlFor="sort-select" className="text-xs font-semibold text-gray-500 whitespace-nowrap flex items-center gap-1">
                            <FiFilter /> Sort By:
                        </label>
                        <select
                            id="sort-select"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="select select-bordered select-sm rounded-xl border-gray-200 text-xs font-medium"
                        >
                            <option value="default">Featured</option>
                            <option value="rating-desc">Highest Rating</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-gray-100">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-200 ${
                                selectedCategory === cat
                                    ? 'bg-emerald-600 text-white shadow-xs'
                                    : 'bg-emerald-50/70 text-emerald-800 hover:bg-emerald-100'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Plants Grid */}
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <div key={n} className="bg-white rounded-2xl h-80 animate-pulse border border-gray-100 p-4 flex flex-col justify-between">
                            <div className="bg-gray-200 h-44 rounded-xl w-full" />
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-200 rounded w-3/4" />
                                <div className="h-4 bg-gray-200 rounded w-1/2" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : filteredPlants.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-emerald-200 p-8 max-w-md mx-auto">
                    <RiLeafLine className="text-5xl text-emerald-400 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-gray-800 mb-1">No plants found</h3>
                    <p className="text-sm text-gray-500 mb-5">
                        Try modifying your search query or reset the category filter.
                    </p>
                    <button
                        onClick={() => {
                            setSearchQuery('');
                            setSelectedCategory('All');
                        }}
                        className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl"
                    >
                        Reset Filters
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredPlants.map((plant) => (
                        <PlantCard key={plant.plantId} plant={plant} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Plants;
