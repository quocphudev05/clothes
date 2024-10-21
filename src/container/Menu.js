import React from 'react';
import '../index.css'; // Adjust the path if necessary
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="bg-black w-full h-[40px] flex items-center">
            <div className="container mx-auto px-32"> {/* Fixed typo from pxz-4 to px-4 */}
                <div className="flex justify-between items-center w-full">
                    <div className='flex items-center'>
                        <p className="text-gray-500">Hotline:</p>
                        <a className='text-gray-500 ml-2' href="tel:0941602005">0941602005</a>
                    </div>
                    <div className='text-gray-500 flex'>
                        <Link to="" className='mr-[34px]'>Cách Chọn Size</Link>
                        <Link to="" className='mr-[34px]'>Chính Sách Khách Víp</Link>
                        <Link to="" className='mr-[34px]'>Giới Thiệu</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
