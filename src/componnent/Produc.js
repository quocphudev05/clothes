import React from 'react';
import Slide1 from '../asset/slide1.png';
import Slide2 from '../asset/slide2.jpg';
import Slide3 from '../asset/slide3.png';

function ProducOner() {
  return (
    <div className="flex flex-wrap justify-center w-full max-w-screen-xl mx-auto p-4">
      <div className="w-full md:w-1/4 sm:w-1/4 p-2">
        <div className="overflow-hidden rounded-lg border">
          <div className="block-content transform transition-transform duration-300 hover:scale-125">
            <a href="#" title=" banner index 1">
              <img
                src={Slide1}
                className="img-responsive ruler-hover-css w-full h-[287px] object-cover" // Thêm chiều cao cố định
                alt=" banner index 1"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/4 sm:w-2/4 p-2"> {/* Cột giữa */}
        <div className="overflow-hidden rounded-lg border"> {/* Thêm border và overflow:hidden */}
          <div className="block-content transform transition-transform duration-300 hover:scale-125">
            <a href="#"  title=" banner index 2">
              <img
                src={Slide2}
                className="img-responsive w-full h-[287px] object-cover" // Thêm chiều cao cố định
                alt=" banner index 2"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/4 sm:w-1/4 p-2"> {/* Cột bên phải */}
        <div className="overflow-hidden rounded-lg border"> {/* Thêm border và overflow:hidden */}
          <div className="block-content transform transition-transform duration-300 hover:scale-125">
            <a href="#"  title=" banner index 4">
              <img
                src={Slide3}
                className="img-responsive w-full h-[287px] object-cover" // Thêm chiều cao cố định
                alt=" banner index 4"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProducOner;
