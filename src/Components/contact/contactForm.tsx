"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SelectDate from "./calender";

const Contact_Form = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_57i7ow8",
                "template_aiw4xbn",
                form.current as HTMLFormElement,
                "70EOPY-T1Ntd38pS-"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    if (form.current) (form.current as HTMLFormElement).reset();
                },
                (error) => {
                    console.error("FAILED...", error.text);
                    alert("Failed to send message. Please try again later.");
                }
            );
    };
    return (
        <div className="my-16">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 shadow-[0_35px_60px_-25px_rgba(0,0,0,0.4)] md:grid-cols-2 gap-6">

                    {/* Left Side */}
                    <div className="bg-white w-full p-6 sm:p-9 mt-19">
                        <div className="ms-7 max-w-sm">
                            <p className="text-[#235380] text-4xl font-semibold">Let's connect!</p>
                            <p className="text-base font-normal mt-10 text-[#666C77]">
                                Question regarding automation? Send us an email and we'll add you to our Slack for a quick answer.
                                Want to learn more about our offerings? Shoot us a quick note!
                            </p>
                            <p className="text-base font-normal text-[#666C77] mt-4">We're here to make you successful.</p>
                        </div>
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                            <div className="flex flex-col mt-12">
                                <label className="text-[#525252] text-sm mb-1 font-semibold">Full name:</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="p-2 rounded bg-[#F1F2F4] text-black focus:outline-none focus:ring-2 focus:ring-[#3a55a8]"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[#525252] text-sm mb-1 font-semibold">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="p-2 rounded bg-[#F1F2F4] text-black focus:outline-none focus:ring-2 focus:ring-[#3a55a8]"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[#525252] text-sm mb-1 font-semibold">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows={2}
                                    name="message"
                                    className="p-2 rounded bg-[#F1F2F4] text-black focus:outline-none focus:ring-2 focus:ring-[#3a55a8]"
                                ></textarea>
                            </div>
                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="bg-[#15a1e1] px-8 sm:px-12 rounded-full hover:bg-[#1D8CC7] text-white font-bold py-2 transition-all"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side */}
                    <div className="relative bg-[url('/images/image26.png')] bg-cover bg-center overflow-hidden">
                        <div className="bg-[#255179]/90 w-full h-[52rem] p-14 flex flex-col justify-center">
                            <p className="text-2xl font-semibold text-center mb-4 text-white">Schedule Time</p>
                            <SelectDate />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact_Form;
