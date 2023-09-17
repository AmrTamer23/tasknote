import React, { useState } from 'react';
import logoW from '../assets/logoW.png';
import logoC from '../assets/logoC.png';
import { BsAsterisk, BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';
import { FaAngleDown, FaAngleLeft } from 'react-icons/fa';
import { MdTaskAlt } from 'react-icons/md';
import { IconContext } from "react-icons";
import '../App.css'


const Sidebar = () => {

    const menuItemStyle = 'flex items-center h-16 w-full  px-5 py-2 gap-1.5 hover:bg-gray-700 hover:cursor-pointer disable-text-selection';
    const categoryItemStyle = `${menuItemStyle} h-12 pl-10`;

    const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

    const handleCategoryMenu = () => {
        setIsCategoryMenuOpen(!isCategoryMenuOpen);
    }

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const handleSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    }

    return (
        <aside className='h-screen flex'>
            <nav className='bg-[#183D3D] h-full w-auto flex flex-col justify-between'>
                {
                    sideBarOpen ?
                        <>
                            <div>
                                <div className='p-5 w-52 self-center'> <img src={logoW} alt=" logo" /></div>
                                <ul className='flex flex-col items-start text-white'>
                                    <li className={menuItemStyle}>
                                        <MdTaskAlt size={'25'} />
                                        <p className='menuLabel'>Tasks</p>
                                    </li>
                                    <li className={menuItemStyle}>
                                        <BsAsterisk size={'25'} />
                                        <p className='menuLabel'>Notes</p>
                                    </li>
                                    <li className={`${menuItemStyle} flex justify-between items-center `}
                                        onClick={handleCategoryMenu}
                                    >
                                        <h2 className='text-xl'>Categories</h2>
                                        {
                                            isCategoryMenuOpen ?
                                                <FaAngleLeft className='text-white text-lg self-center' />
                                                :
                                                <FaAngleDown className='text-white text-lg self-center' />
                                        }
                                    </li>
                                    {
                                        isCategoryMenuOpen &&
                                        <div className='flex flex-col w-full'>
                                            <li className={categoryItemStyle}>
                                                <span className='h-5 w-5 bg-blue-600 rounded-xl'></span>
                                                <p className='subMenuLabel disable-text-selection'>Software Dev.</p>
                                            </li>
                                            <li className={categoryItemStyle}>
                                                <span className='h-5 w-5 bg-emerald-800 rounded-xl'></span>
                                                <p className='subMenuLabel disable-text-selection'>Problem Solving</p>
                                            </li>
                                            <li className={categoryItemStyle}>
                                                <IoMdAdd size={'20'} />
                                                <p className='subMenuLabel disable-text-selection'>Add Category</p>
                                            </li>
                                        </div>
                                    }
                                </ul>

                            </div>
                            <div className='px-5 py-7 flex justify-end cursor-pointer'
                                onClick={handleSideBar}
                            >
                                <BsArrowBarLeft className='text-2xl text-white' />
                            </div>
                        </>
                        :
                        <>
                            <div className='w-20'>
                                <div className='p-5 w-20'> <img src={logoC} alt=" logo" /></div>
                                <ul className='flex flex-col text-white'>
                                    <li className={menuItemStyle}
                                        title='Tasks'
                                    >
                                        <MdTaskAlt size={'25'} />
                                    </li>
                                    <li className={menuItemStyle}
                                        title='Notes'
                                    >
                                        <BsAsterisk size={'25'} />

                                    </li>

                                    <div className='flex flex-col w-full'>
                                        <li className={menuItemStyle}
                                            title='Software Dev.'
                                        >
                                            <span className='h-7 w-7 bg-blue-600 rounded-xl'></span>

                                        </li>
                                        <li className={menuItemStyle}
                                            title='Problem Solving'
                                        >
                                            <span className='h-7 w-7 bg-emerald-800 rounded-xl'></span>

                                        </li>
                                    </div>

                                </ul>

                            </div>
                            <div className='pb-7 flex justify-center cursor-pointer'
                                onClick={handleSideBar}
                            >
                                <BsArrowBarRight className='text-2xl text-white' />
                            </div>
                        </>

                }

            </nav>
            <div className='h-full w-0.5 bg-white'>
            </div>
        </aside>
    );
};

export default Sidebar;