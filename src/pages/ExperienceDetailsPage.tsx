import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { experiencesData } from '../assets/datas/assets';

export interface Experience {
    _id: string; 
    role: string;
    company: string;
    period: string;
    description: string;
    skills: string[]; 
}

const ExperienceDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [experience, setExperience] = useState<Experience | undefined>(undefined);

    useEffect(()=>{
    setExperience(experiencesData.find((e) => e._id === id ))
    },[id])

    if (!experience) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <p>Experience Not Found</p>
                <button onClick={() => navigate('/')} className="ml-4 text-[#ed6a3e]">Go Home</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-20">
            {/* Back Button */}
            <button 
                onClick={() => navigate(-1)}
                className="mb-12 flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7" />
                </svg>
                Back to Page
            </button>

            <div className="max-w-5xl">
                <span className="text-[#ed6a3e] font-bold tracking-widest text-sm uppercase">
                    {experience.period}
                </span>
                
                <h1 className="text-5xl md:text-8xl font-black mt-4 mb-6 tracking-tighter uppercase leading-none">
                    {experience.company}
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-400 mb-10">
                    {experience.role}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 border-t border-[#2a2a20] pt-12">
                    <div className="md:col-span-2">
                        <h3 className="text-gray-600 uppercase tracking-widest text-xs mb-6 font-bold">Project Overview</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                            {experience.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-gray-600 uppercase tracking-widest text-xs mb-6 font-bold">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill, i) => (
                                <span key={i} className="px-4 py-2 bg-[#1a1a12] border border-[#2a2a20] text-gray-400 rounded-lg text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceDetailsPage;