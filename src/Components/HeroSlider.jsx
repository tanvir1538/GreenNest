import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { RiLeafLine, RiPlantLine, RiSparklingLine } from 'react-icons/ri';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
    const slides = [
        {
            id: 1,
            title: 'Breathe Pure, Live Green',
            subtitle: 'Air Purifying Sanctuaries',
            description:
                'Transform your living space into a calming oasis with our hand-selected indoor plants that purify the air and boost wellness naturally.',
            image:
                'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1600&q=80',
            badge: '100% Organic & Healthy Plants',
            ctaText: 'Explore Collection',
            ctaLink: '/plants'
        },
        {
            id: 2,
            title: 'Effortless Greenery For Modern Living',
            subtitle: 'Low-Maintenance Companions',
            description:
                'Busy schedule? Discover resilient, drought-tolerant indoor plants like the ZZ Plant and Snake Plant that thrive with minimal attention.',
            image:
                'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1600&q=80',
            badge: 'Beginner-Friendly Selections',
            ctaText: 'Find Your Match',
            ctaLink: '/plants'
        },
        {
            id: 3,
            title: 'Expert Guidance For Every Plant Parent',
            subtitle: 'Professional Plant Care',
            description:
                'From light orientation to repotting schedules, book 1-on-1 personalized consultations with certified horticulture specialists.',
            image:
                'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?auto=format&fit=crop&w=1600&q=80',
            badge: 'Personalized Consultations',
            ctaText: 'Meet Our Experts',
            ctaLink: '#green-experts'
        }
    ];

    return (
        <section className="relative w-full rounded-3xl overflow-hidden shadow-2xl my-6">
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={900}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true,
                    bulletActiveClass: '!bg-emerald-400 !w-8 !rounded-full transition-all'
                }}
                navigation={true}
                loop={true}
                className="w-full h-[460px] sm:h-[520px] lg:h-[580px]"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full">
                        {/* Background Image */}
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Calming Dark Emerald Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/70 to-emerald-900/30" />

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-center max-w-3xl px-8 sm:px-14 lg:px-20 text-white">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-medium w-fit mb-4">
                                <RiSparklingLine className="text-emerald-400" />
                                <span>{slide.badge}</span>
                            </div>

                            <p className="text-emerald-300 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2">
                                {slide.subtitle}
                            </p>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-4">
                                {slide.title}
                            </h1>

                            <p className="text-emerald-100/90 text-sm sm:text-base lg:text-lg mb-8 max-w-xl leading-relaxed">
                                {slide.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                {slide.ctaLink.startsWith('#') ? (
                                    <a
                                        href={slide.ctaLink}
                                        className="btn bg-emerald-500 hover:bg-emerald-600 border-none text-white font-semibold px-6 rounded-xl shadow-lg shadow-emerald-900/40"
                                    >
                                        <RiPlantLine className="text-lg" />
                                        <span>{slide.ctaText}</span>
                                    </a>
                                ) : (
                                    <Link
                                        to={slide.ctaLink}
                                        className="btn bg-emerald-500 hover:bg-emerald-600 border-none text-white font-semibold px-6 rounded-xl shadow-lg shadow-emerald-900/40"
                                    >
                                        <RiLeafLine className="text-lg" />
                                        <span>{slide.ctaText}</span>
                                    </Link>
                                )}
                                <Link
                                    to="/plants"
                                    className="btn btn-outline border-white/60 hover:border-white text-white hover:bg-white/10 px-6 rounded-xl backdrop-blur-sm"
                                >
                                    Browse All
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSlider;
