import React from 'react';
import Slider from 'react-slick';
import bannerImage1 from '../asset/bg1.jpg'; // Thay thế bằng ảnh thực tế
import bannerImage2 from '../asset/bg2.jpg'; // Thay thế bằng ảnh thực tế
import '../index.css'; // Adjust the path if necessary
// Tạo nút Previous
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="slick-prev"
            onClick={onClick}
            style={{ fontSize: '24px', color: 'white', left: '10px', zIndex: '1', cursor: 'pointer' }}
        >
            ❮
        </div>
    );
};

// Tạo nút Next
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="slick-next"
            onClick={onClick}
            style={{ fontSize: '24px', color: 'white', right: '10px', zIndex: '1', cursor: 'pointer' }}
        >
            ❯
        </div>
    );
};

export default function Banner() {
    // Danh sách ảnh banner
    const banners = [
        { id: 1, src: bannerImage1, alt: "Banner 1" },
        { id: 2, src: bannerImage2, alt: "Banner 2" },

    ];

    const settings = {
        dots: true, // Bật dấu chấm
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="w-full h-screen relative">
            <Slider {...settings}>
                {banners.map((banner) => (
                    <div key={banner.id}>
                        <img 
                            src={banner.src} 
                            alt={banner.alt} 
                            className="w-full h-screen object-cover" 
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
