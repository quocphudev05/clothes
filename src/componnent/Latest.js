import React from 'react';
import { Link } from 'react-router-dom';
import apiLatests from '../apis/apiLatest';
import { FaShoppingCart } from "react-icons/fa"; // Import biểu tượng giỏ hàng

const Latest = ({title}) => {
    return (
     <div>
         <div className="justify-center items-center flex mt-5 mb-5 font-bold text-xl">{title}</div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 w-[1258px] max-w-screen-xl mx-auto">
           {apiLatests.map((product) => (
               <div key={product.id} className="relative border p-4 shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105 px-4 py-2 group">
                   <Link to={`/product/${product.id}`} className="relative block">
                       <img src={product.img} alt={product.model} className="w-full object-cover rounded-md" />
                       {/* Giỏ hàng nằm chính giữa ảnh sản phẩm và có hiệu ứng xoay */}
                       <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <div className="rounded-full h-[54px] w-[54px] flex items-center justify-center bg-[#b31f2a] transition-transform duration-300 transform group-hover:rotate-180">
                               <FaShoppingCart className="h-5 w-5 text-white transform group-hover:rotate-[-180deg]" aria-hidden="true" />
                           </div>
                       </div>
                   </Link>
                   <h2 className="mt-2 font-bold">{product.model}</h2>
                   <p className="text-gray-600">{product.brand}</p>
                   <p className="text-red-500 font-semibold">{`₫${product.price}`}</p>
                   <p className="text-gray-500">{`Color: ${product.color}`}</p>
                   <p className="text-gray-500">{`Size: ${product.size}`}</p>
                   <p className="text-gray-500">{`Material: ${product.material}`}</p>
                   <p className="mt-2 text-gray-700">{product.description}</p>

                   <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
               </div>
           ))}
       </div>
     </div>
    );
};

export default Latest;
