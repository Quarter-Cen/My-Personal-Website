import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        

        const handleScroll = () => {
            const docHeight = document.documentElement.scrollHeight; // ความสูงทั้งหมดของหน้า
            const winHeight = window.innerHeight; // ความสูงของ viewport
            const scrollPosition = window.scrollY; // ตำแหน่งการเลื่อนในขณะนี้

            const newScrollPercentage = (scrollPosition / (docHeight - winHeight)) * 100;
            setScrollPercentage(newScrollPercentage);
        };

        window.addEventListener('scroll', handleScroll);

        // ลบ event listener เมื่อ component ถูกลบ
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="navbar bg-[#074940] sticky top-0 z-10 text-white">
                <div className="navbar-start">
                    <a className="m-3 text-2xl tracking-[10px]">Kanok</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li><a>Home</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <progress className="progress progress-accent w-40 mr-4 hidden lg:flex" value={scrollPercentage} max="100"></progress>

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] absolute right-0 mt-3 w-52 p-2 shadow text-black">
                                <li><a>Home</a></li>
                                <li><a>Portfolio</a></li>
                                <li><a>About</a></li>
                                <li><a>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
