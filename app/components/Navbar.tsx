import { usePathname } from 'next/navigation'; // นำเข้า usePathname

export default function Navbar() {
    const pathname = usePathname();  // ใช้ usePathname เพื่อรับ pathname ปัจจุบัน

    // ฟังก์ชันเพื่อเช็คว่าปัจจุบันอยู่ในหน้าไหน
    const getLinkClass = (path: string) => {
        return pathname === path ? 'text-[#074940]' : 'text-zinc-900';
    };

    // ฟังก์ชันเพื่อเพิ่มเส้นแนวตั้งในกรณีที่อยู่ในหน้าเฉพาะ
    const getActiveLinkClass = (path: string) => {
        return pathname === path ? 'mil-active' : '';  // เพิ่มคลาส 'mil-active' ถ้าเป็นหน้าเดียวกัน
    };
    return (
        <div className='sticky top-0 z-10 w-screen bg-transparent'>
            <div className="navbar text-white">
                <div className="navbar-start h-[3.3rem] border-zinc-900 w-5/6">
                    <div className="border-l-[1px] h-[3.1rem] w-[5rem] border-b-[1px] border-zinc-800 grid place-items-center">
                        <img src="Logo2.png" className='h-[2.5rem]' alt="" />
                    </div>
                    <div className="flex justify-center space-x-4 border-zinc-800 border-l-[1px] border-b-[1px]">
                        <a href="/" className={`btn bg-transparent border-none text-base ${getLinkClass('/')} shadow-none hover:bg-transparent ${getActiveLinkClass('/')} `}>
                            Home
                        </a>
                        <a href="/portfolio" className={`btn bg-transparent border-none text-base ${getLinkClass('/portfolio')} shadow-none hover:bg-transparent ${getActiveLinkClass('/portfolio')}`}>
                            Portfolio
                        </a>
                        <a href="/about" className={`btn bg-transparent border-none text-base ${getLinkClass('/about')} shadow-none hover:bg-transparent ${getActiveLinkClass('/about')}`}>
                            About
                        </a>
                        <a href="/contact" className={`btn bg-transparent border-none text-base ${getLinkClass('/contact')} shadow-none hover:bg-transparent ${getActiveLinkClass('/contact')}`}>
                            Contact
                        </a>
                    </div>
                </div>
                <div className="navbar-end border-zinc-800 h-[3.1rem] border-b-[1px] w-1/6 z-50">
                <div className="mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 72 72">
                            <path d="M45.049,14C57.06,14,58,14.94,58,26.951v18.098C58,57.06,57.06,58,45.049,58h-2.298V41.982h5.647l0.888-6.347h-6.535	c0,0-0.01-3.716,0-4.643c0.019-1.814,1.533-2.732,2.835-2.718c1.302,0.013,3.998,0.004,3.998,0.004v-5.849	c0,0-2.335-0.302-4.784-0.328c-2.058-0.021-4.331,0.535-6.165,2.384c-1.865,1.88-2.16,4.679-2.195,8.1c-0.01,0.989,0,3.049,0,3.049	h-5.526v6.347h5.526V58h-9.489C14.94,58,14,57.06,14,45.049V26.951C14,14.94,14.94,14,26.951,14H45.049z" fill="white"></path>
                        </svg>
                    </div>
                    <div className="mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 64 64">
                            <path d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z" fill="white"></path>
                        </svg>
                    </div>
                    <div className="mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 32 32">
                            <path fillRule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z" fill="white"></path>
                        </svg>
                    </div>
                    <div className="mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 72 72">
                            <path d="M61.115,18.856C63.666,21.503,64,25.709,64,36s-0.334,14.497-2.885,17.144C58.563,55.791,55.906,56,36,56	s-22.563-0.209-25.115-2.856C8.334,50.497,8,46.291,8,36s0.334-14.497,2.885-17.144S16.094,16,36,16S58.563,16.209,61.115,18.856z M31.464,44.476l13.603-8.044l-13.603-7.918V44.476z" fill="white"></path>
                        </svg>
                    </div>
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
        </div>
    );
}
