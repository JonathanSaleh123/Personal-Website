import React from "react";
import Title from "./Title";
function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                action="https://getform.io/f/8abc38a3-8164-4379-aaef-06e3d44ec472"
                method="POST"
                className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact</Title>
                    <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="p-2 bg-transparent border-2 rounded-md
                                focus:outline-none border-stone-900 dark:border-white" 
                    />
                    <input 
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    className="my-2 p-2 bg-transparent border-2 rounded-md
                                focus:outline-none border-stone-900 dark:border-white" 
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="mb-4 p-2 bg-transparent border-2 rounded-md border-stone-900 dark:border-white
                        focus:outline-none"
                    />
                    <button 
                        type="submit"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium border-stone-900 dark:border-white
                        rounded-md text-white bg-gradient-to-r
                        from-blue-500 to-purple-500 drop-shadow-md
                        hover:stroke-white"
                    >
                        Contact Me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;