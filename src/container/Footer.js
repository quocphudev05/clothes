import React from 'react';
import '../index.css'; // Adjust the path if necessary
import { Link } from 'react-router-dom';
import Image from '../asset/logo-footer.png';
function Footer() {
    return (
        <div className='flex bg-black w-full h-auto p-4 flex-wrap justify-around '>
            <div className='text-white'>
            <Link to="/">
            <img src={Image} alt="Logo" className="h-16  cursor-pointer  " />
        </Link>
                <div className='mt-3 ml-4 text-gray-400'>
                    <a href='' className='block mb-2'>Giới Thiệu</a>
                    <a href='' className='block mb-2'>Liên Hệ</a>
                    <a href='' className='block mb-2'>Tuyển Dụng</a>
                    <a href='' className='block mb-2'>Tin Tức</a>
                    <p>Email: tranquocphu.05@gmail.com</p>
                    <p>Hotline: 0941.602.005</p>
                    <div className='mt-4'>
                        <p className='block'>Đăng Ký Nhận email khuyến mãi</p>
                        <div className="flex ">
                        <input
    className="h-[30px] px-2 border
     border-gray-500
      bg-gray-600 text-white
       placeholder:text-gray-400
        focus:border-white 
        focus:outline-none
         transition-colors duration-200"
    type="text"
    placeholder="Email của bạn"
/>



    <button className="border border-red-500 text-white  bg-red-500 h-[30px] px-4 text-sm">
        Đăng Ký
    </button>
</div>


                    </div>
                </div>
            </div>
            <div className='text-white'>
                <p className='text-xl fon' style={{ 'text-decoration': 'underline' }}>Hỗ Trợ Khách hàng</p>
                <div className='mt-3 ml-4 text-gray-400'>
                    <a className='block list-item mb-3' href='/' >Hướng dẫn đặt hàng</a>
                    <a className='block list-item mb-3' href='/'>Hướng Dẫn</a>
                    <a className='block list-item mb-3' href='/'>Tuyển Dụng</a>
                    <a className='block list-item mb-3' href='/'>Tin Tức</a>
                    <a className='block list-item mb-3' href='/'>Giới Thiệu</a>
                    <a className='block list-item mb-3' href='/'>Liên Hệ</a>
                    <a className='block list-item mb-3' href='/'>Tuyển Dụng</a>
                </div>
            </div>          
            <div className='text-white'><p className='text-xl fon' style={{ 'text-decoration': 'underline' }}>Hệ Thống Cửa hàng</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.2714898041195!2d106.21409987582302!3d20.039068021032683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31361551b5b050b3%3A0x97b9b2969ffc9a31!2zTmjDoCBWxrDhu51uIEPDonkgQ-G6o25oIMSQ4bqhaSBPYW5o!5e0!3m2!1svi!2s!4v1728307393212!5m2!1svi!2s"
                    width="70%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" className='mt-4
                    '
                ></iframe>
                <p className='text-gray-400' style={{fontSize: '13px'}} >Tìm địa chỉ cửa hàng gần bạn</p>
            </div>
            <div className='text-white'>
            <p className='text-xl fon' style={{ 'text-decoration': 'underline' }}>Kêt Nối Với 4Men</p>
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                width="200"
                height="150"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className='mr-1'
            ></iframe>
        </div>
        </div>
    );
}

export default Footer;
