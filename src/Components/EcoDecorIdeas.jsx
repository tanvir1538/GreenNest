import { FaPaintBrush, FaHome, FaRegLightbulb } from 'react-icons/fa';

const EcoDecorIdeas = () => {
    const ideas = [
        {
            id: 1,
            title: 'Vertical Green Wall & Trailing Shelves',
            room: 'Living Room Corner',
            tip: 'Use hanging Golden Pothos and floating walnut shelves to draw the eyes upward, making small urban rooms feel spacious and grounded.',
            image:
                'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=700&q=80'
        },
        {
            id: 2,
            title: 'Calming Bedside Air Sanctuary',
            room: 'Bedroom Nightstand',
            tip: 'Position oxygen-releasing Snake Plants and Peace Lilies near headboards for cleaner nighttime breathing and better REM sleep.',
            image:
                'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80'
        },
        {
            id: 3,
            title: 'Zen Minimalist Workspace Desk',
            room: 'Home Office Desk',
            tip: 'Place a low-maintenance ZZ Plant or Aloe Vera in a matte ceramic pot right by your monitor to reduce eye strain and spark creative focus.',
            image:
                'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80'
        }
    ];

    return (
        <section id="eco-decor" className="my-20 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase px-3 py-1 bg-emerald-100 rounded-full">
                    Interior Botanical Inspiration
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
                    Eco Decor Styling Ideas
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Transform your rooms into naturally balanced sanctuaries with our plant stylist tips.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ideas.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-white rounded-2xl overflow-hidden border border-emerald-100/70 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-emerald-800 shadow-sm flex items-center gap-1.5">
                                <FaHome className="text-emerald-600" />
                                <span>{item.room}</span>
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.tip}
                                </p>
                            </div>

                            <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-medium text-emerald-700">
                                <FaRegLightbulb className="text-amber-500 text-sm" />
                                <span>Stylist Pro Tip</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EcoDecorIdeas;
