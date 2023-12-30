import React, { useEffect, useState } from 'react'
import 'flowbite'
import logo from '../assets/necleo.svg'
import profile from '../assets/profile.svg'
import arrow from '../assets/down-arrow.png'
import { Link } from 'react-router-dom'

const API = 'https://picsum.photos/v2/list?page=1&limit=6';
const home = ({setInfo, info}) => {

    const [images, setimages] = useState([]);
    const [got, setGot] = useState(false);

    const fetchimage = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0)
                setimages(data);
            if (images)
                setGot(true);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchimage(API);
        setInfo(JSON.parse(localStorage.getItem('newcards')) || []);
    }, []);

    return (
        <div>

            {/* Navbar */}
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="/" className="flex ms-2 md:me-24">
                                <img className='px-14' src={logo} alt="logo" />

                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <h5 className='hidden sm:block text-xs px-4 mb-2'>Free&nbsp;Trial&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;2days left </h5>
                                <div className='px-8'>
                                    <button type="button" className="flex items-center text-sm bg-white-800 rounded-full" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full mr-2" src={profile} alt="user photo" />
                                        <img src={arrow} className='w-2' />
                                    </button>
                                </div>
                                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                    <div className="px-4 py-3" role="none">
                                        <p className="text-sm text-gray-900 dark:text-white" role="none">
                                            Sagnik Saha
                                        </p>
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                            sagnik12347@gmail.com
                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">My Projects</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sample Projects</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}


            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="9055184_bxs_coin_stack_icon 1">
                                        <path id="Vector" d="M14 11.6666C18.6386 11.6666 23.3333 10.0636 23.3333 6.99998C23.3333 3.93631 18.6386 2.33331 14 2.33331C9.36129 2.33331 4.66663 3.93631 4.66663 6.99998C4.66663 10.0636 9.36129 11.6666 14 11.6666Z" fill="#FA782F" />
                                        <path id="Vector_2" d="M4.66663 11.6666C4.66663 14.7303 9.36129 16.3333 14 16.3333C18.6386 16.3333 23.3333 14.7303 23.3333 11.6666V9.33331C23.3333 12.397 18.6386 14 14 14C9.36129 14 4.66663 12.397 4.66663 9.33331V11.6666Z" fill="#FA782F" />
                                        <path id="Vector_3" d="M4.66663 16.3333C4.66663 19.397 9.36129 21 14 21C18.6386 21 23.3333 19.397 23.3333 16.3333V14C23.3333 17.0637 18.6386 18.6667 14 18.6667C9.36129 18.6667 4.66663 17.0637 4.66663 14V16.3333Z" fill="#FA782F" />
                                        <path id="Vector_4" d="M4.66663 21C4.66663 24.0637 9.36129 25.6667 14 25.6667C18.6386 25.6667 23.3333 24.0637 23.3333 21V18.6667C23.3333 21.7304 18.6386 23.3334 14 23.3334C9.36129 23.3334 4.66663 21.7304 4.66663 18.6667V21Z" fill="#FA782F" />
                                    </g>
                                </svg>
                                <span className="ms-3 text-orange-500">My Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 4">
                                        <g id="Vector">
                                            <path d="M12.5902 5.41804C12.5902 2.70188 14.792 0.5 17.5082 0.5H23.8033C23.9119 0.5 24 0.588075 24 0.696721V6.9918C24 9.70795 21.7981 11.9098 19.082 11.9098H12.5902V5.41804Z" fill="#C4C4C4" />
                                            <path d="M12.5902 19.582C12.5902 22.2981 14.792 24.5 17.5082 24.5H23.8033C23.9119 24.5 24 24.4119 24 24.3033V18.0082C24 15.292 21.7981 13.0902 19.082 13.0902H12.5902V19.582Z" fill="#C4C4C4" />
                                            <path d="M11.4098 5.41804C11.4098 2.70188 9.20796 0.5 6.4918 0.5H0.196722C0.0880756 0.5 0 0.588075 0 0.696721V6.9918C0 9.70795 2.20188 11.9098 4.91803 11.9098H11.4098V5.41804Z" fill="#C4C4C4" />
                                            <path d="M11.4098 19.582C11.4098 22.2981 9.20796 24.5 6.4918 24.5H0.196722C0.0880756 24.5 0 24.4119 0 24.3033V18.0082C0 15.292 2.20188 13.0902 4.91803 13.0902H11.4098V19.582Z" fill="#C4C4C4" />
                                        </g>
                                    </g>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Sample Projects</span>

                            </a>
                        </li>
                        <div className='below-content flex flex-col justify-between h-[72vh]'>
                            <div className="below-top-sidebar-content">
                                <li>
                                    <div className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700" />
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="8674394_ic_fluent_apps_regular_icon 1">
                                                <g id="Vector">
                                                    <path d="M21.5744 2.71825L25.2828 6.42681C26.308 7.45194 26.308 9.114 25.2828 10.1391L22.2677 13.1537C23.5312 13.3432 24.5 14.4332 24.5 15.7496V21.8745C24.5 23.3242 23.3247 24.4995 21.875 24.4995H6.125C4.67525 24.4995 3.5 23.3242 3.5 21.8745V6.12453C3.5 4.67478 4.67525 3.49953 6.125 3.49953H12.25C13.567 3.49953 14.6576 4.46955 14.8462 5.73416L17.862 2.71825C18.8872 1.69312 20.5492 1.69312 21.5744 2.71825ZM5.25 21.8745C5.25 22.3578 5.64176 22.7495 6.125 22.7495L13.1238 22.7487L13.125 14.8746L5.25 14.8737V21.8745ZM14.8738 22.7487L21.875 22.7495C22.3582 22.7495 22.75 22.3578 22.75 21.8745V15.7496C22.75 15.2663 22.3582 14.8746 21.875 14.8746L14.8738 14.8737V22.7487ZM12.25 5.24953H6.125C5.64176 5.24953 5.25 5.64127 5.25 6.12453V13.1237H13.125V6.12453C13.125 5.64127 12.7332 5.24953 12.25 5.24953ZM14.875 10.8604V13.1246L17.1383 13.1237L14.875 10.8604ZM19.0994 3.95568L15.3909 7.66425C15.0492 8.00595 15.0492 8.55998 15.3909 8.90169L19.0994 12.6103C19.4411 12.952 19.9951 12.952 20.3369 12.6103L24.0455 8.90169C24.3872 8.55998 24.3872 8.00595 24.0455 7.66425L20.3369 3.95568C19.9951 3.61398 19.4411 3.61398 19.0994 3.95568Z" fill="#C4C4C4" />
                                                    <path d="M19.0994 3.95568L15.3909 7.66425C15.0492 8.00595 15.0492 8.55998 15.3909 8.90169L19.0994 12.6103C19.4411 12.952 19.9951 12.952 20.3369 12.6103L24.0455 8.90169C24.3872 8.55998 24.3872 8.00595 24.0455 7.66425L20.3369 3.95568C19.9951 3.61398 19.4411 3.61398 19.0994 3.95568Z" fill="#C4C4C4" />
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Apps</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="6127246_multimedia_music_play_player_video_icon 1" clipPath="url(#clip0_101_35)">
                                                <g id="Layer 2">
                                                    <g id="Interface-Solid">
                                                        <g id="interface-solid-multimedia-play-button">
                                                            <path id="Vector" d="M11.5323 0.967743C9.2514 0.967743 7.02175 1.6441 5.12528 2.91128C3.22881 4.17846 1.7507 5.97955 0.877846 8.0868C0.00499677 10.194 -0.22338 12.5128 0.221594 14.7498C0.666569 16.9869 1.76491 19.0417 3.37773 20.6545C4.99054 22.2674 7.04539 23.3657 9.28243 23.8107C11.5195 24.2556 13.8382 24.0273 15.9455 23.1544C18.0527 22.2816 19.8538 20.8034 21.121 18.907C22.3882 17.0105 23.0645 14.7809 23.0645 12.5C23.0611 9.4425 21.845 6.5112 19.683 4.34922C17.5211 2.18724 14.5898 0.971145 11.5323 0.967743V0.967743ZM14.9117 13.1303L12.0644 15.118L10.5706 16.1607C10.4554 16.2412 10.3203 16.2885 10.18 16.2975C10.0397 16.3065 9.89967 16.277 9.77504 16.212C9.65042 16.147 9.54599 16.049 9.47312 15.9289C9.40026 15.8087 9.36174 15.6708 9.36175 15.5302V9.46978C9.36174 9.32922 9.40026 9.19135 9.47312 9.07115C9.54599 8.95096 9.65042 8.85304 9.77504 8.78804C9.89967 8.72304 10.0397 8.69345 10.18 8.70249C10.3203 8.71153 10.4554 8.75885 10.5706 8.8393L12.0644 9.88197L14.9117 11.8695C15.0132 11.9404 15.0961 12.0347 15.1533 12.1444C15.2106 12.2542 15.2405 12.3761 15.2405 12.4999C15.2405 12.6237 15.2106 12.7456 15.1533 12.8554C15.0961 12.9651 15.0132 13.0595 14.9117 13.1303Z" fill="#C4C4C4" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_101_35">
                                                    <rect width="23.0645" height="23.0645" fill="white" transform="translate(0 0.967743)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Intro to Nucleo</span>
                                    </a>
                                </li>
                            </div>

                            <div className="below-bottom-sidebar-content">
                                <li>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="211674_help_circled_icon 1">
                                                <g id="Group">
                                                    <path id="Vector" d="M14 1.75C7.23516 1.75 1.75 7.23516 1.75 14C1.75 20.7648 7.23516 26.25 14 26.25C20.7648 26.25 26.25 20.7648 26.25 14C26.25 7.23516 20.7648 1.75 14 1.75ZM15.1047 19.6164C15.0773 20.5898 14.3555 21.1914 13.4203 21.1641C12.5234 21.1367 11.818 20.4969 11.8453 19.518C11.8727 18.5445 12.6164 17.9266 13.5133 17.9539C14.4539 17.9812 15.1375 18.643 15.1047 19.6164ZM17.768 12.6547C17.5383 12.9773 17.0242 13.393 16.3789 13.8961L15.6625 14.3883C15.3125 14.6562 15.0938 14.9734 14.9789 15.3344C14.9187 15.5258 14.875 16.0234 14.8641 16.357C14.8586 16.4227 14.8203 16.5703 14.618 16.5703C14.4156 16.5703 12.7039 16.5703 12.4797 16.5703C12.2555 16.5703 12.2281 16.4391 12.2336 16.3734C12.2664 15.4656 12.3977 14.7164 12.775 14.1148C13.2836 13.3055 14.7164 12.4523 14.7164 12.4523C14.9352 12.2883 15.1047 12.1133 15.2359 11.9219C15.4766 11.5938 15.6734 11.2273 15.6734 10.8336C15.6734 10.3797 15.5641 9.94766 15.2742 9.58672C14.9352 9.16563 14.5688 8.96328 13.8633 8.96328C13.1687 8.96328 12.7641 9.31328 12.4742 9.77266C12.1844 10.232 12.2336 10.7734 12.2336 11.2656H9.57031C9.57031 9.40625 10.057 8.21953 11.0852 7.51953C11.7797 7.04375 12.6656 6.83594 13.6992 6.83594C15.0555 6.83594 16.1328 7.0875 17.0844 7.80938C17.9648 8.47656 18.4297 9.41719 18.4297 10.6859C18.4297 11.468 18.1562 12.1242 17.768 12.6547Z" fill="#C4C4C4" />
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Help & Support</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="3669434_feedback_ic_icon (1) 1" clipPath="url(#clip0_101_48)">
                                                <path id="Vector" d="M23.3334 2.33333H4.66671C3.37754 2.33333 2.34504 3.37749 2.34504 4.66666L2.33337 25.6667L7.00004 21H23.3334C24.6225 21 25.6667 19.9558 25.6667 18.6667V4.66666C25.6667 3.37749 24.6225 2.33333 23.3334 2.33333ZM15.1667 16.3333H12.8334V14H15.1667V16.3333ZM15.1667 11.6667H12.8334V7H15.1667V11.6667Z" fill="#C4C4C4" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_101_48">
                                                    <rect width="28" height="28" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Feedback</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="8686063_ic_fluent_panel_right_expand_icon 1">
                                                <path id="Vector" d="M9.54941 14.7L10.9473 15.9232C11.2383 16.1778 11.2678 16.62 11.0132 16.911C10.7586 17.2019 10.3164 17.2313 10.0254 16.9768L7.22542 14.5268C7.07351 14.394 6.98637 14.2019 6.98637 14C6.98637 13.7982 7.07351 13.6061 7.22542 13.4732L10.0254 11.0232C10.3164 10.7686 10.7586 10.7981 11.0132 11.0891C11.2678 11.38 11.2383 11.8222 10.9473 12.0768L9.54938 13.3H14.7C15.0866 13.3 15.4 13.6134 15.4 14C15.4 14.3867 15.0866 14.7 14.7 14.7H9.54941ZM25.2001 19.6C25.2001 21.1464 23.9465 22.4 22.4001 22.4H5.60005C4.05365 22.4 2.80005 21.1464 2.80005 19.6V8.40001C2.80005 6.85361 4.05365 5.60001 5.60005 5.60001H22.4001C23.9465 5.60001 25.2001 6.85361 25.2001 8.40001V19.6ZM16.8 21V7.00001H5.60005C4.82686 7.00001 4.20005 7.6268 4.20005 8.40001V19.6C4.20005 20.3732 4.82686 21 5.60005 21H16.8Z" fill="#212121" />
                                            </g>
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Collapse</span>
                                    </a>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </aside>

            {/* hEADING */}


            {/* body */}
            <div className="p-4 sm:ml-64">

                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
                    <div className='text-xl flex items-center'>
                        <h1 className='flex py-10 font-bold text-4xl items-center'>My Projects</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mb-2 xl:grid xl:grid-cols-3 xl:gap-4 xl:mb-4">
                        {/* create new */}
                        <Link to='/new' className="flex flex-col gap-5 items-center justify-center h-80 rounded bg-orange-200">
                            <p className="text-2xl text-gray-400 dark:text-gray-800">
                                <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="9224390_add_plus_new_create_control_icon 1" clipPath="url(#clip0_101_14)">
                                        <g id="20. Add">
                                            <path id="Vector" d="M37.5417 17.6667C41.4744 17.6608 45.3193 18.8297 48.5833 21.0233V8.83333C48.5833 6.49059 47.6527 4.24379 45.9961 2.58722C44.3395 0.930652 42.0927 0 39.75 0L8.83333 0C6.49059 0 4.24379 0.930652 2.58722 2.58722C0.930652 4.24379 0 6.49059 0 8.83333L0 39.75C0 42.0927 0.930652 44.3395 2.58722 45.9961C4.24379 47.6527 6.49059 48.5833 8.83333 48.5833H21.0233C19.0242 45.5913 17.8749 42.1126 17.698 38.5185C17.5211 34.9243 18.3234 31.3496 20.0192 28.1757C21.7149 25.0019 24.2405 22.3479 27.3266 20.4971C30.4126 18.6463 33.9432 17.668 37.5417 17.6667Z" fill="white" />
                                            <path id="Vector_2" d="M37.5416 22.0833C34.4842 22.0833 31.4955 22.99 28.9534 24.6885C26.4113 26.3871 24.43 28.8014 23.26 31.626C22.0899 34.4507 21.7838 37.5588 22.3803 40.5574C22.9767 43.5561 24.449 46.3105 26.6109 48.4724C28.7728 50.6343 31.5272 52.1065 34.5258 52.703C37.5244 53.2994 40.6326 52.9933 43.4572 51.8233C46.2819 50.6533 48.6961 48.672 50.3947 46.1299C52.0933 43.5878 52.9999 40.599 52.9999 37.5417C52.9953 33.4433 51.3651 29.5141 48.4671 26.6161C45.5691 23.7182 41.64 22.088 37.5416 22.0833ZM41.9583 39.75H39.7499V41.9583C39.7499 42.544 39.5173 43.1057 39.1031 43.5199C38.689 43.934 38.1273 44.1667 37.5416 44.1667C36.9559 44.1667 36.3942 43.934 35.9801 43.5199C35.5659 43.1057 35.3333 42.544 35.3333 41.9583V39.75H33.1249C32.5392 39.75 31.9775 39.5173 31.5634 39.1032C31.1493 38.6891 30.9166 38.1274 30.9166 37.5417C30.9166 36.956 31.1493 36.3943 31.5634 35.9801C31.9775 35.566 32.5392 35.3333 33.1249 35.3333H35.3333V33.125C35.3333 32.5393 35.5659 31.9776 35.9801 31.5635C36.3942 31.1493 36.9559 30.9167 37.5416 30.9167C38.1273 30.9167 38.689 31.1493 39.1031 31.5635C39.5173 31.9776 39.7499 32.5393 39.7499 33.125V35.3333H41.9583C42.5439 35.3333 43.1056 35.566 43.5198 35.9801C43.9339 36.3943 44.1666 36.956 44.1666 37.5417C44.1666 38.1274 43.9339 38.6891 43.5198 39.1032C43.1056 39.5173 42.5439 39.75 41.9583 39.75Z" fill="white" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_101_14">
                                            <rect width="53" height="53" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p>
                            <h3 className='text-orange-500 font-bold'>Create a new project</h3>
                        </Link>
                        {/* image1 */}
                        {
                            images.map((image) => {
                                return (
                                    <div className="flex flex-col items-center justify-center h-80 rounded bg-black ">
                                        <p className="text-2xl text-gray-400">
                                            {got ? <img src={image?.download_url}

                                            /> :
                                                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                            }
                                        </p>
                                        <div className="flex flex-row text-md text-gray-400">
                                            <h3>{image?.author}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {
                            info.map((x)=>{
                                localStorage.setItem("newcards",JSON.stringify(info));
                                return (
                                    <Link to={`card/${x.id}`} >
                                    <div className="flex flex-col items-center justify-center h-80 rounded bg-black ">
                                        <p className="text-2xl text-gray-400">
                                            {got ? <img src={x.url}

                                            /> :
                                                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                            }
                                        </p>
                                        <div className="flex flex-row text-md text-gray-400">
                                            <h3>{x.author}</h3>
                                        </div>
                                    </div>
                                    </Link>
                                )
                            })
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}

export default home