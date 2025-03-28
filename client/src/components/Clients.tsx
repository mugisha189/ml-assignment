// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import { FaBuilding, FaCogs, FaIndustry, FaMap, FaTools } from 'react-icons/fa';

// // Logo Data using React Icons
// export const logoData = [
//   { icon: <FaBuilding className="text-3xl" />, alt: "Golden Gate Bridge Monitoring", color: "text-blue-600" },
//   { icon: <FaIndustry className="text-3xl" />, alt: "Brooklyn Bridge AI Analysis", color: "text-yellow-500" },
//   { icon: <FaCogs className="text-3xl" />, alt: "Tower Bridge Structural Insights", color: "text-green-500" },
//   { icon: <FaMap className="text-3xl" />, alt: "Suspension Bridge AI Monitoring", color: "text-red-500" },
//   { icon: <FaTools className="text-3xl" />, alt: "AI Platform for Bridge Safety", color: "text-green-700" },
// ];

// // Clients Component
// const Clients: React.FC = () => {
//   // Slider settings for autoplay and responsiveness
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//     prevArrow: (
//       <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
//         &lt;
//       </button>
//     ),
//     nextArrow: (
//       <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
//         &gt;
//       </button>
//     ),
//   };

//   return (
//     <div className="border-t-2 pt-4 pb-6">
//       <h2 className="text-2xl font-bold mb-2 text-blue-600 text-center">
//         Trusted by Bridge Companies
//       </h2>
//       <p className="text-gray-600 mb-6 text-center">
//         Leading engineering firms and infrastructure experts rely on our AI platform for precise bridge monitoring and analysis.
//       </p>

//       {/* Smaller container for slider */}
//       <div className="relative max-w-6xl mx-auto px-4">
//         <Slider {...settings}>
//           {logoData.map((logo, index) => (
//             <div key={index} className="px-4 pb-4"> {/* Added horizontal padding for space */}
//               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center w-full h-52">
//                 <div className="flex items-center justify-center text-blue-500 bg-gray-200 p-4 rounded-full w-24 h-24">
//                   {logo.icon}
//                 </div>
//                 <span className={`mt-4 text-xl ${logo.color} font-bold text-center`}>
//                   {logo.alt}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Clients;
