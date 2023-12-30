import React, { useEffect, useState } from 'react'
import 'flowbite'
import logo from '../assets/necleo.svg'
import profile from '../assets/profile.svg'
import arrow from '../assets/down-arrow.png'

const API = 'https://picsum.photos/v2/list?page=1&limit=6';
const home = () => {

    const [images, setimages] = useState([]);
    const [got,setGot] = useState(false);

    const fetchimage = async (url) =>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            if(data.length>0)
            setimages(data);
            if(images) 
                setGot(true);
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    };

    function showImage() {
        return image.map((img, index) => (
            <Image
                image={img.url}
                handleRemove={handleRemove}
                index={index}
                key={index}  
            />
        ));
    }

    useEffect(()=>{
        fetchimage(API);
    },[]);

    return (
        <div>
           
            {/* Navbar */}


            <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="/" class="flex ms-2 md:me-24">
                                <img className='px-14' src={logo} alt="logo" />

                            </a>
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center ms-3">
                                <h5 className='hidden sm:block text-xs px-4 mb-2'>Free&nbsp;Trial&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;2days left </h5>
                                <div className='px-8'>
                                    <button type="button" class="flex items-center text-sm bg-white-800 rounded-full" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span class="sr-only">Open user menu</span>
                                        <img class="w-8 h-8 rounded-full mr-2" src={profile} alt="user photo" />
                                        <img src={arrow} className='w-2' />
                                    </button>
                                </div>
                                <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                    <div class="px-4 py-3" role="none">
                                        <p class="text-sm text-gray-900 dark:text-white" role="none">
                                            Sagnik Saha
                                        </p>
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                            sagnik12347@gmail.com
                                        </p>
                                    </div>
                                    <ul class="py-1" role="none">
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">My Projects</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sample Projects</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}


            <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="9055184_bxs_coin_stack_icon 1">
                                        <path id="Vector" d="M14 11.6666C18.6386 11.6666 23.3333 10.0636 23.3333 6.99998C23.3333 3.93631 18.6386 2.33331 14 2.33331C9.36129 2.33331 4.66663 3.93631 4.66663 6.99998C4.66663 10.0636 9.36129 11.6666 14 11.6666Z" fill="#FA782F" />
                                        <path id="Vector_2" d="M4.66663 11.6666C4.66663 14.7303 9.36129 16.3333 14 16.3333C18.6386 16.3333 23.3333 14.7303 23.3333 11.6666V9.33331C23.3333 12.397 18.6386 14 14 14C9.36129 14 4.66663 12.397 4.66663 9.33331V11.6666Z" fill="#FA782F" />
                                        <path id="Vector_3" d="M4.66663 16.3333C4.66663 19.397 9.36129 21 14 21C18.6386 21 23.3333 19.397 23.3333 16.3333V14C23.3333 17.0637 18.6386 18.6667 14 18.6667C9.36129 18.6667 4.66663 17.0637 4.66663 14V16.3333Z" fill="#FA782F" />
                                        <path id="Vector_4" d="M4.66663 21C4.66663 24.0637 9.36129 25.6667 14 25.6667C18.6386 25.6667 23.3333 24.0637 23.3333 21V18.6667C23.3333 21.7304 18.6386 23.3334 14 23.3334C9.36129 23.3334 4.66663 21.7304 4.66663 18.6667V21Z" fill="#FA782F" />
                                    </g>
                                </svg>
                                <span class="ms-3 text-orange-500">My Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 4">
                                        <g id="Vector">
                                            <path d="M12.5902 5.41804C12.5902 2.70188 14.792 0.5 17.5082 0.5H23.8033C23.9119 0.5 24 0.588075 24 0.696721V6.9918C24 9.70795 21.7981 11.9098 19.082 11.9098H12.5902V5.41804Z" fill="#C4C4C4" />
                                            <path d="M12.5902 19.582C12.5902 22.2981 14.792 24.5 17.5082 24.5H23.8033C23.9119 24.5 24 24.4119 24 24.3033V18.0082C24 15.292 21.7981 13.0902 19.082 13.0902H12.5902V19.582Z" fill="#C4C4C4" />
                                            <path d="M11.4098 5.41804C11.4098 2.70188 9.20796 0.5 6.4918 0.5H0.196722C0.0880756 0.5 0 0.588075 0 0.696721V6.9918C0 9.70795 2.20188 11.9098 4.91803 11.9098H11.4098V5.41804Z" fill="#C4C4C4" />
                                            <path d="M11.4098 19.582C11.4098 22.2981 9.20796 24.5 6.4918 24.5H0.196722C0.0880756 24.5 0 24.4119 0 24.3033V18.0082C0 15.292 2.20188 13.0902 4.91803 13.0902H11.4098V19.582Z" fill="#C4C4C4" />
                                        </g>
                                    </g>
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Sample Projects</span>

                            </a>
                        </li>
                        <li>
                            <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700" />
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="8674394_ic_fluent_apps_regular_icon 1">
                                        <g id="Vector">
                                            <path d="M21.5744 2.71825L25.2828 6.42681C26.308 7.45194 26.308 9.114 25.2828 10.1391L22.2677 13.1537C23.5312 13.3432 24.5 14.4332 24.5 15.7496V21.8745C24.5 23.3242 23.3247 24.4995 21.875 24.4995H6.125C4.67525 24.4995 3.5 23.3242 3.5 21.8745V6.12453C3.5 4.67478 4.67525 3.49953 6.125 3.49953H12.25C13.567 3.49953 14.6576 4.46955 14.8462 5.73416L17.862 2.71825C18.8872 1.69312 20.5492 1.69312 21.5744 2.71825ZM5.25 21.8745C5.25 22.3578 5.64176 22.7495 6.125 22.7495L13.1238 22.7487L13.125 14.8746L5.25 14.8737V21.8745ZM14.8738 22.7487L21.875 22.7495C22.3582 22.7495 22.75 22.3578 22.75 21.8745V15.7496C22.75 15.2663 22.3582 14.8746 21.875 14.8746L14.8738 14.8737V22.7487ZM12.25 5.24953H6.125C5.64176 5.24953 5.25 5.64127 5.25 6.12453V13.1237H13.125V6.12453C13.125 5.64127 12.7332 5.24953 12.25 5.24953ZM14.875 10.8604V13.1246L17.1383 13.1237L14.875 10.8604ZM19.0994 3.95568L15.3909 7.66425C15.0492 8.00595 15.0492 8.55998 15.3909 8.90169L19.0994 12.6103C19.4411 12.952 19.9951 12.952 20.3369 12.6103L24.0455 8.90169C24.3872 8.55998 24.3872 8.00595 24.0455 7.66425L20.3369 3.95568C19.9951 3.61398 19.4411 3.61398 19.0994 3.95568Z" fill="#C4C4C4" />
                                            <path d="M19.0994 3.95568L15.3909 7.66425C15.0492 8.00595 15.0492 8.55998 15.3909 8.90169L19.0994 12.6103C19.4411 12.952 19.9951 12.952 20.3369 12.6103L24.0455 8.90169C24.3872 8.55998 24.3872 8.00595 24.0455 7.66425L20.3369 3.95568C19.9951 3.61398 19.4411 3.61398 19.0994 3.95568Z" fill="#C4C4C4" />
                                        </g>
                                    </g>
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Apps</span>

                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="6127246_multimedia_music_play_player_video_icon 1" clip-path="url(#clip0_101_35)">
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
                                <span class="flex-1 ms-3 whitespace-nowrap">Intro to Nucleo</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* hEADING */}


            {/* body */}
            <div class="p-4 sm:ml-64">
                
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div className='text-xl flex items-center'>
                    <h1 className='flex py-10 font-bold text-4xl items-center'>My Projects</h1>
                </div>
                    <div class="grid grid-cols-3 gap-4 mb-4">
                        {/* create new */}
                        <div class="flex items-center justify-center h-60 rounded bg-orange-200">
                            <p class="text-2xl text-gray-400 dark:text-gray-800">
                                <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="9224390_add_plus_new_create_control_icon 1" clip-path="url(#clip0_101_14)">
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
                        </div>
                        {/* image1 */}
                        {
                            images.map((image)=>{
                                return (
                                    <div class="flex items-center justify-center h-60 rounded bg-gray-500 dark:bg-gray-800">
                                        <p class="text-2xl text-gray-400 dark:text-gray-500">
                                            {got?<img src={image?.download_url} 
                                            
                                            /> : 
                                                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                            }
                                            
                                        </p>
                                    </div>
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