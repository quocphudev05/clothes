import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsSubMenuOpen(prev => !prev);
    };

    return (
        <div className="flex flex-col w-full px-32  ">
            <div className="flex justify-between items-center bg-white ">
                <Link to="/">
                    <img src='https://4menshop.com/logo.png?v=1' alt="Logo" className="h-16 pl-20 cursor-pointer" />
                </Link>
                <nav className="flex pl-20">
                    <ul className="flex space-x-8 items-center h-[50px] pr-20">
                        <li>
                            <Link to="/new-arrivals" className="text-black hover:text-red-500 transition duration-300">
                                Hàng mới về
                            </Link>
                        </li>
                        <li>
                            <Link to="/mens-shirts" className="text-black hover:text-red-500 transition duration-300">
                                Áo nam
                            </Link>
                        </li>
                        <li>
                            <Link to="/mens-pants" className="text-black hover:text-red-500 transition duration-300">
                                Quần nam
                            </Link>
                        </li>
                        <li 
                            className="relative" 
                            onMouseEnter={() => setIsSubMenuOpen(true)} 
                            onMouseLeave={() => setIsSubMenuOpen(false)}
                        >
                            <span 
                                className="text-black hover:text-red-500 cursor-pointer transition duration-300" 
                                onClick={toggleSubMenu}
                            >
                                Phụ kiện
                            </span>
                            {isSubMenuOpen && (
                                <ul className="absolute left-0  w-40 text-black rounded shadow-lg bg-white z-10">
                                    {['Thắt Lưng', 'Ví Da', 'Cà Vạt', 'Nơ', 'Mũ Nam', 'Ví Nón', 'Túi xách', 'Mắt Kính'].map(item => (
                                        <li key={item}>
                                            <Link 
                                                to={`/accessories/${item}`} 
                                                className="block px-4 py-2 text-black hover:text-red-500 transition duration-300"
                                                onClick={() => setIsSubMenuOpen(false)}
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link to="/outlet" className="text-black hover:text-red-500 transition duration-300">
                                OUTLET SALE
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
