import toast from "react-hot-toast";
import HomeLayout from "../Layouts/HomeLayout";
import { useState } from "react";
import { isValidEmail } from "../Helpers/regexMatcher";
import axiosInstance from "../Helpers/axiosInstance";
function Contact(){

    const [userInput, setUserInput] = useState({
        name : "",
        email : "",
        message : ""
    });

    function handleInputChange(e){
        const {name, value} = e.target;
        
        setUserInput({
            ...userInput,
            [name] : value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();

        if(!userInput.email || !userInput.name || !userInput.message){
            return toast.error("All fields are required")
        }

        

        if(!isValidEmail(userInput.email)){
            return toast.error("Please enter a valid email address");
        }


        try{
            const response = axiosInstance.post("/contact",userInput);
            toast.promise(response,{
                loading : "Submitting your message",
                success : "Form Submitted Successfully",
                error : "Failed to submit the form"
            })
            const contactResponse = await response;
            if(contactResponse?.data?.success){
                setUserInput({
                    name : "",
                    email : "",
                    message : ""
                })
            }
        }catch(err){
            toast.error("Operation Failed....");
        }

        
    }

    return(
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form 
                    onSubmit={onFormSubmit} noValidate
                    className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-96 mb-10">
                    
                    <h1 className="text-3xl font-semibold">
                        Contact Form
                    </h1>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name" className="text-xl font-semibold">
                            Name
                        </label>
                        <input
                            className="bg-transparent border px-2 py-1 rounded-md"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            onChange={handleInputChange}
                            value={userInput.name}
                        />
                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="email" className="text-xl font-semibold">
                            Email
                        </label>
                        <input
                            className="bg-transparent border px-2 py-1 rounded-md"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleInputChange}
                            value={userInput.email}
                        />
                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="message" className="text-xl font-semibold">
                            Message
                        </label>
                        <textarea
                            className="bg-transparent border px-2 py-1 rounded-md resize-none h-40"
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            onChange={handleInputChange}
                            value={userInput.message}
                        />
                    </div>

                    <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded-md py-2 font-semibold text-lg cursor-pointer">
                        Submit
                    </button>
                </form>
            </div>
            
        </HomeLayout>
    )
}

export default Contact;