import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Slide = {
  imageUrl: string;
  title: string;
  description: string;
};
const slides: Slide[] = [
  {
    imageUrl: 'enhanced2.webp',
    title: 'Enhanced Bridge Safety',
    description: 'Integrate sensors from multiple manufacturers for real-time data collection across bridge components. Achieve comprehensive oversight and improve response time to dynamic changes.',
  },
  {
    imageUrl: '/updated1.webp',
    title: 'Real-Time Condition Monitoring',
    description: 'Track critical parameters and detect anomalies in real-time for proactive maintenance.',
  },
  {
    imageUrl: '/zipride3.png',
    title: 'Automated Alerts and Notifications',
    description: 'Instant notifications to relevant teams, enabling quick responses to potential issues.',
  },
  {
    imageUrl: '/seamless.jpg',
    title: 'Efficient Maintenance Scheduling',
    description: 'Optimize maintenance schedules based on AI-driven insights to reduce downtime and costs.',
  },
];

const Introduction: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: true,
    arrows: true,
    prevArrow: (
      <button className="slick-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        ◀
      </button>
    ),
    nextArrow: (
      <button className="slick-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        ▶
      </button>
    ),
  };

  return (
    <div className="w-full h-[700px] bg-gray-900 group relative">
      <Slider {...settings} className="w-full h-full object-fill">
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-[700px] object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
              <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
              <a
                href="#"
                className="text-blue-400 underline mt-4"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Introduction;
