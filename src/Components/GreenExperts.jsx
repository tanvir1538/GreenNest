import { FaCertificate, FaEnvelope, FaCalendarCheck } from 'react-icons/fa';

const GreenExperts = () => {
    const experts = [
        {
            id: 1,
            name: 'Dr. Elena Vance',
            role: 'Indoor Horticulture Specialist',
            experience: '8+ Years Experience',
            bio: 'Expert in biological soil enrichment and diagnosing rare foliage leaf ailments.',
            image:
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 2,
            name: 'Liam Greenwood',
            role: 'Soil & Organic Nutrient Advisor',
            experience: '6+ Years Experience',
            bio: 'Specializes in low-toxicity pest control and tailoring custom potting blends.',
            image:
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 3,
            name: 'Sophia Aris',
            role: 'Tropical & Rare Flora Curator',
            experience: '10+ Years Experience',
            bio: 'Passionate about propagation techniques and indoor humidity optimization.',
            image:
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 4,
            name: 'Marcus Thorne',
            role: 'Apartment Urban Greenscaping',
            experience: '5+ Years Experience',
            bio: 'Designs compact plant layouts for urban apartments, balconies, and dim corridors.',
            image:
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
        }
    ];

    return (
        <section id="green-experts" className="my-20 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase px-3 py-1 bg-emerald-100 rounded-full">
                    Certified Professionals
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
                    Meet Our Green Experts
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Our team of passionate botanists and plant pathologists are here to provide tailored care advice for your leafy family.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {experts.map((expert) => (
                    <div
                        key={expert.id}
                        className="bg-white rounded-2xl overflow-hidden border border-emerald-100/70 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div className="relative aspect-[4/4] overflow-hidden bg-gray-100">
                            <img
                                src={expert.image}
                                alt={expert.name}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute top-3 right-3 bg-emerald-600/90 text-white text-[11px] font-medium px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1 shadow-xs">
                                <FaCertificate className="text-[10px]" />
                                <span>Verified</span>
                            </div>
                        </div>

                        <div className="p-5 flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-0.5">
                                    {expert.name}
                                </h3>
                                <p className="text-xs font-semibold text-emerald-700 mb-2">
                                    {expert.role}
                                </p>
                                <p className="text-xs text-gray-500 mb-4 leading-relaxed line-clamp-3">
                                    {expert.bio}
                                </p>
                            </div>

                            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                                <span>{expert.experience}</span>
                                <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                                    <FaCalendarCheck /> Available
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GreenExperts;
