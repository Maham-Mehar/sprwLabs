"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Ideas Board", href: "/use-cases" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const services = [
    { label: "Managed Services", href: "/managed-services" },
    { label: "Professional Services", href: "/professional-services" },
];

const Drawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <div
                className={`fixed inset-0 z-20 bg-[#A7A7A7]/50 ${isOpen ? "opacity-100" : "opacity-0 invisible"
                    }`}
                onClick={onClose}
            />
            <div
                className={`fixed inset-y-0 right-0 bg-white w-[264px] shadow-lg z-30 transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                onClick={(e) => e.stopPropagation()}
            >  <button onClick={onClose} className="absolute right-0 pt-2 pr-3 text-4xl text-gray-700 hover:text-red-500">
                    &times;
                </button>
                <div className="relative p-4 font-oswald">


                    <Link href="/" className="font-quattrocento text-2xl mt-20 font-bold text-[#235380]">
                        SprwLabs
                    </Link>

                    <ul className="text-lg pt-6 text-black font-medium space-y-4">
                        {navItems.slice(0, 3).map(({ label, href }) => (
                            <li key={href}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}

                        {/* Services label */}
                        <li className="text-[#1A1A1A] text-base font-medium">Services</li>

                        {/* Services links */}
                        {services.map(({ label, href }) => (
                            <li key={href} className="pl-3">
                                <Link href={href} className="text-sm font-medium hover:text-[#255179]">
                                    {label}
                                </Link>
                            </li>
                        ))}

                        {navItems.slice(3).map(({ label, href }) => (
                            <li key={href}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="bg-[#235380] text-white">
            <div className="max-w-7xl mx-auto px-4 py-[17.5px] xl:px-5 flex justify-between items-center">
                <Link href="/" className="font-quattrocento text-3xl font-semibold">
                    SprwLabs
                </Link>
                <ul className="hidden md:flex items-center xl:gap-12 lg:gap-7 md:gap-7 font-semibold text-base">
                    {navItems.slice(0, 3).map(({ label, href }) => (
                        <li key={href}><Link href={href}>{label}</Link></li>
                    ))}
                    <li
                        className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="flex items-center cursor-pointer">
                            <span>Services</span>
                            <RiArrowDropDownLine size={30} className="text-[#CCCED6]" />
                        </div>
                        {isHovered && (
                            <div className="absolute left-0 w-40 bg-black rounded-md shadow-md z-50">
                                {services.map(({ label, href }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="px-3 py-2 text-[13px]  text-[#CCCED6] hover:text-white hover:bg-[#1A1A1A] block"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                    {navItems.slice(3).map(({ label, href }) => (
                        <li key={href}><Link href={href}>{label}</Link></li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(true)} className="md:hidden block">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Drawer Component for Mobile */}
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
};

export default Navbar;
