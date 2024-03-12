// import React, { useState } from "react";

// const ProductCarousel: React.FC<{ products: Product[] }> = ({ products }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === products.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goToPrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? products.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="container mx-auto mt-4 relative">
//       <h2 className="text-2xl font-bold mb-4">Produtos</h2>
//       <div className="flex items-center">
//         <button
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-lg"
//           onClick={goToPrevSlide}
//         >
//           &lt;
//         </button>
//         <div className="overflow-hidden w-full">
//           <div
//             className="flex transition-transform duration-300 ease-in-out"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {products.map((product) => (
//               <div key={product.id} className="w-full px-2">
//                 <div className="bg-white p-4 shadow-md rounded-lg">
//                   <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//                   <p className="text-gray-700 mb-2">{product.description}</p>
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-auto rounded"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <button
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-lg"
//           onClick={goToNextSlide}
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// const App: React.FC = () => {
//   // Supondo que 'products' seja uma lista de produtos
//   const products: Product[] = [
//     // Lista de produtos aqui
//   ];

//   return (
//     <div className="bg-gray-200 min-h-screen">
//       <ProductCarousel products={products} />
//     </div>
//   );
// };

// export default App;
