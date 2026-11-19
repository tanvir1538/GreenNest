import { FiDroplet, FiSun, FiWind } from 'react-icons/fi';
import { RiPlantLine } from 'react-icons/ri';

const PlantCareTips = () => {
    const tips = [
        {
            id: 1,
            icon: <FiDroplet className="text-3xl text-sky-500" />,
            title: 'Mindful Watering',
            description:
                'Always check the top 2 inches of soil with your finger. If it feels dry, water thoroughly until it drains out the bottom.',
            tag: 'Hydration Routine'
        },
        {
            id: 2,
            icon: <FiSun className="text-3xl text-amber-500" />,
            title: 'Indirect Sunlight',
            description:
                'Most indoor plants prefer bright, filtered light. Direct scorching noon sun can burn delicate foliage leaves.',
            tag: 'Light Placement'
        },
        {
            id: 3,
            icon: <RiPlantLine className="text-3xl text-emerald-500" />,
            title: 'Balanced Fertilizing',
            description:
                'Feed diluted organic houseplant fertilizer once a month during spring and summer growing seasons for lush vibrancy.',
            tag: 'Nutrient Boost'
        },
        {
            id: 4,
            icon: <FiWind className="text-3xl text-teal-500" />,
            title: 'Gentle Air Circulation',
            description:
                'Ensure gentle room airflow to deter fungal issues, but keep plants away from direct blasts of cold AC or heating radiators.',
            tag: 'Climate Control'
        }
    ];

    return (
        <section id="plant-tips" className="my-20 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase px-3 py-1 bg-emerald-100 rounded-full">
                    Green Thumb Knowledge
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
                    Essential Plant Care Tips
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Simple yet powerful guidelines to help your indoor greens flourish season after season with confidence.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {tips.map((tip) => (
                    <div
                        key={tip.id}
                        className="bg-white p-6 rounded-2xl border border-emerald-100/70 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-5 border border-gray-100">
                                {tip.icon}
                            </div>
                            <span className="text-xs font-semibold text-emerald-700 tracking-wide block mb-1">
                                {tip.tag}
                            </span>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {tip.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {tip.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PlantCareTips;
