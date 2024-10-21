import React from 'react';
import icons from '../ultis/icon'; // Adjust the path as needed
const { ImAirplane, FaRegCreditCard, MdOutlineAccessTimeFilled, MdOutlineSupportAgent } = icons;

function ContactIf() {
    return (
        <div className='flex  w-full h-auto p-4 flex-wrap justify-around '>
             <div className="flex items-center">
                    <ImAirplane className="text-xl mr-2" />
                    <span>Class 1</span>
                </div>
                <div className="flex items-center">
                    <FaRegCreditCard className="text-xl mr-2" />
                    <span>Class 2</span>
                </div>
                <div className="flex items-center">
                    <MdOutlineAccessTimeFilled className="text-xl mr-2" />
                    <span>Class 3</span>
                </div>
                <div className="flex items-center">
                    <MdOutlineSupportAgent className="text-xl mr-2" />
                    <span>Class 4</span>
                </div>
        </div>
    );
}

export default ContactIf;
