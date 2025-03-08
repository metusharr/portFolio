import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        const userInfo = {
            Name: data.Name,
            Email: data.Email,
            Message: data.Message,
        };

        try {
            await axios.post("https://getform.io/f/allyqopa", userInfo);
            toast.success("Your message has been sent!");
            console.log(userInfo);
        } catch (error) {
            toast.error("Error sending message:", error);
        }
    };

    return (
        <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
            <span>Please fill out the form below to Contact Me.</span>
            
            <div className='flex flex-col justify-center items-center mt-5'>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                    <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>

                    {/* Full Name */}
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Full Name</label>
                        <input {...register("Name", { required: true })} 
                            className='shadow rounded-lg border px-3 py-2 text-gray-700 focus:outline-none focus:shadow-outline' 
                            type="text" name="Name" id="Name"  placeholder='Enter Your Full Name' />
                        {errors.Name && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>

                    {/* Email Address */}
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Email Address</label>
                        <input {...register("Email", { required: true })} 
                            className='shadow rounded-lg border px-3 py-2 text-gray-700 focus:outline-none focus:shadow-outline' 
                            type="email" name="Email" id="Email" placeholder='Enter Your Email Address' />
                        {errors.Email && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>

                    {/* Message */}
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Message</label>
                        <textarea {...register("Message", { required: true })} 
                            className='shadow rounded-lg border px-3 py-2 text-gray-700 focus:outline-none focus:shadow-outline' 
                            name="Message" id="Message" placeholder='Enter Your Query'></textarea>
                        {errors.Message && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>

                    <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
