"use client"
import { styles } from '@/utils/styles'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

const Page = (props: Props) => {

    const [isAgreed, setIsAgreed] = useState(false);

    const handleCheckboxChange = () => {
        setIsAgreed(!isAgreed);
    };

    const router = useRouter()

    const handleClick = () => {
        router.push('/create-shop')
    }

    return (
        <>
                <h1 className='text-center mt-10 font-bold text-[32px]'>Unleash the Power of AI Prompts: Become a Seller Today!</h1>
                <p className='text-start mt-5 text-[18px] text-[#6B7280] leading-7 ml-28 mr-28'>Do you possess the creative spark to craft compelling AI prompts that ignite imagination and drive engagement? <br /> Do you have a passion for language and a knack for generating ideas that spark innovation? <br />If so, then  <span className='text-red-400 font-extrabold'>becoming a seller on our Prompt Pulse could be the perfect opportunity for you! </span></p>
                <p className='text-start mt-10 text-[18px] text-[#6B7280] leading-7 ml-28 mr-28 font-semibold'>Here's why you should join our vibrant community of AI Prompt creators:</p>
                <ul className='text-start mt-5 text-[18px] text-[#6B7280] leading-7 ml-28 mr-28 list-disc font-semibold'>
                    <li><span className='text-[#858DFB]'>Reach a Global Audience</span>: Our platform attracts creators and marketers from all corners of the world, giving you access to a diverse and eager audience for your AI prompts</li>
                    <li><span className='text-[#858DFB]'>Monetize Your Creativity</span>: Earn real money for each AI Prompt you sell. We offer competitive commission rates and transparent payment processing.</li>
                    <li><span className='text-[#858DFB]'>Build Your Portfolio</span>: Showcase your skills and build a strong reputation as a skilled AI Prompt creator. Our platform allows you to personalize your profile and highlight your unique offerings.</li>
                    <li><span className='text-[#858DFB]'>Be Part of the Future</span>: AI Prompts are revolutionizing the way content is created across industries. By becoming a seller on our platform, you'll be at the forefront of this exciting technological advancement.</li>
                </ul>
                <p className='text-start mt-10 text-[18px] text-[#6B7280] leading-7 ml-28 mr-28 font-semibold'>What types of AI Prompts can you sell?</p>
                <p className='text-start mt-5 text-[18px] text-[#6B7280] leading-7 ml-28 mr-28 font-semibold'>The possibilities are endless! We welcome sellers who create prompts for a wide range of applications, including:</p>
                <ul className='text-start mt-5 text-[18px] text-[#6B7280] leading-7 ml-28 mr-28 list-disc font-semibold'>
                    <li><span className='text-[#858DFB]'>Content creation</span>: Generate blog posts, articles, social media content, marketing copy, and more.</li>
                    <li><span className='text-[#858DFB]'>Storytelling</span>: Craft captivating narratives for novels, scripts, video games, and other creative projects.</li>
                    <li><span className='text-[#858DFB]'>Idea generation</span>: Fuel brainstorming sessions and innovative thinking with thought-provoking prompts.</li>
                    <li><span className='text-[#858DFB]'>Research and analysis</span>:Uncover insights and generate hypotheses with AI-powered prompts.</li>
                </ul>
                <p className='text-start mt-10 text-[18px] text-[#6B7280] leading-7 ml-28 mr-28 font-semibold'>Before you proceed, please review and agree to our terms of service.</p>
                <p className='text-start mt-5 text-[18px] text-[#6B7280] leading-7 ml-28 mr-28 font-semibold'>By clicking the checkbox below, you acknowledge that you have read and agree to the following:</p>
                <ul className='text-start mt-5 text-[18px] text-[#6B7280] leading-7 ml-28 mr-28 list-disc font-semibold'>
                    <li><span className='text-[#858DFB]'>Our Terms of Service</span>: This document outlines your rights and responsibilities as a user of our platform.</li>
                    <li><span className='text-[#858DFB]'>Our Privacy Policy</span>: This document explains how we collect, use, and share your personal information.</li>
                    <li><span className='text-[#858DFB]'>Our Acceptable Use Policy</span>: This document outlines the types of activities that are prohibited on our platform.</li>
                </ul>
                <p className='text-start mt-5 text-[18px] text-[#6B7280] leading-7 ml-28 mr-28 list-disc font-semibold'>You must agree to terms before you can continue.</p>
                <input type="checkbox" name="terms" id="terms" onChange={handleCheckboxChange} checked={isAgreed} className='ml-28 mt-10' />
                <label htmlFor="terms" className='text-[18px] text-[#6B7280] leading-7 font-semibold ml-4'>I have read and agree to the terms of service, privacy policy, and acceptable use policy.</label>
                <div className='flex justify-center items-center'>
                    <Button className={`${styles.button}} bg-blue-600  mt-10 `} type="submit" disabled={!isAgreed} onClick={handleClick}> Submit </Button>
                </div>
            </>
    )
}

export default Page