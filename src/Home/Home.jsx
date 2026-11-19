import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../Components/HeroSlider';
import PlantCard from '../Components/PlantCard';
import PlantCareTips from '../Components/PlantCareTips';
import GreenExperts from '../Components/GreenExperts';
import PlantOfTheWeek from '../Components/PlantOfTheWeek';
import EcoDecorIdeas from '../Components/EcoDecorIdeas';
import { RiLeafLine } from 'react-icons/ri';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/plants.json')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to load plant data');
                return res.json();
            })
            .then((data) => {
                // Top Rated plants: sorted by rating descending
                const topRated = [...data].sort((a, b) => b.rating - a.rating).slice(0, 6);
                setPlants(topRated);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {/* 1. Hero Slider Section */}
            <HeroSlider />

            {/* 2. Top Rated Indoor Plants Section */}
            <section className="my-20">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                    <div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 tracking-wider uppercase px-3 py-1 bg-emerald-100 rounded-full mb-3">
                            <RiLeafLine />
                            <span>Customer Favorites</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                            Top Rated Indoor Plants
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl">
                            Hand-picked indoor plants backed by the highest ratings from botanical enthusiasts and urban gardeners.
                        </p>
                    </div>

                    <Link
                        to="/plants"
                        className="btn btn-outline border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white rounded-xl gap-2 text-sm font-semibold w-fit"
                    >
                        <span>View All Plants</span>
                        <FaArrowRight className="text-xs" />
                    </Link>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <div key={n} className="bg-white rounded-2xl h-80 animate-pulse border border-gray-100 p-4 flex flex-col justify-between">
                                <div className="bg-gray-200 h-44 rounded-xl w-full" />
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {plants.map((plant) => (
                            <PlantCard key={plant.plantId} plant={plant} />
                        ))}
                    </div>
                )}
            </section>

            {/* 3. Challenge #4: Plant of the Week */}
            <PlantOfTheWeek />

            {/* 4. Plant Care Tips Section */}
            <PlantCareTips />

            {/* 5. Extra Section: Eco Decor Ideas */}
            <EcoDecorIdeas />

            {/* 6. Meet Our Green Experts Section */}
            <GreenExperts />
        </div>
    );
};

export default Home;
