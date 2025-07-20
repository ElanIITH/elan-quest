// pages/syllabus.tsx
"use client";
import React, { useState, useEffect } from 'react';

interface SubjectTopics {
    [subject: string]: string[];
}

interface ClassSyllabus {
    [className: string]: SubjectTopics;
}

export default function SyllabusPage() {
    const [syllabusData, setSyllabusData] = useState<ClassSyllabus | null>(null);
    const [selectedClass, setSelectedClass] = useState<string>('CLASS VI');

    useEffect(() => {
        async function fetchSyllabus() {
            const response = await fetch('/syllabus.json');
            const data = await response.json();
            setSyllabusData(data);
        }
        fetchSyllabus();
    }, []);

    const currentClassSyllabus = syllabusData ? syllabusData[selectedClass] : null;
    const subjects = currentClassSyllabus ? Object.keys(currentClassSyllabus) : [];

    return (
        <>
            <div className="w-full h-full min-h-screen bg-neutral-800 overflow-hidden pb-20">
                <div className="max-w-5xl mx-auto px-4 py-8 text-justify">
                    <span className="text-lime-100 text-2xl font-light font-['Raleway']">Nexus QUEST spans four key academic areas - </span>
                    <span className="text-lime-100 text-2xl font-medium font-['Raleway']">Logical</span><span className="text-lime-100 text-2xl font-light font-['Raleway']"> </span>
                    <span className="text-lime-100 text-2xl font-medium font-['Raleway']">Reasoning</span><span className="text-lime-100 text-2xl font-light font-['Raleway']">, </span>
                    <span className="text-lime-100 text-2xl font-medium font-['Raleway']">Mathematics</span><span className="text-lime-100 text-2xl font-light font-['Raleway']">, </span>
                    <span className="text-lime-100 text-2xl font-medium font-['Raleway']">Physics</span><span className="text-lime-100 text-2xl font-light font-['Raleway']">, and </span>
                    <span className="text-lime-100 text-2xl font-medium font-['Raleway']">Chemistry, </span>
                    <span className="text-lime-100 text-2xl font-light font-['Raleway']">testing students theoretical knowledge, problem-solving capabilities, and real-world application of basic concepts. The examination balances curriculum-aligned topics with analytical reasoning, delivering a complete evaluation of scholarly performance across varied subjects.<br /></span>
                </div>

                {/* Class Selection Buttons */}
                <div className="max-w-5xl mx-auto px-4 py-4 bg-lime-100 flex justify-around items-center">
                    {syllabusData && Object.keys(syllabusData).map((className) => (
                        <button
                            key={className}
                            onClick={() => setSelectedClass(className)}
                            className={`w-40 h-12 flex items-center justify-center text-lg font-medium font-['Raleway'] ${selectedClass === className ? 'bg-neutral-800 text-lime-100' : 'bg-neutral-600 text-gray-300'
                                } rounded-lg shadow-lg transition-colors duration-200`}
                        >
                            {className.replace('CLASS ', 'Class ')}
                        </button>
                    ))}
                </div>

                {/* Dynamic Syllabus Content */}
                <div className="max-w-5xl mx-auto px-4 py-8 bg-lime-100 rounded-lg">
                    <h2 className="text-neutral-800 text-3xl font-bold font-['Raleway'] mb-4">Syllabus for {selectedClass.replace('CLASS ', 'Class ')}</h2>

                    {subjects.length > 0 && currentClassSyllabus ? (
                        subjects.map((subject, index) => (
                            <div key={subject} className={`mb-4 p-4 rounded-lg ${index % 4 === 0 ? 'bg-neutral-700 opacity-90' :
                                index % 4 === 1 ? 'bg-neutral-700 opacity-80' :
                                    index % 4 === 2 ? 'bg-neutral-700 opacity-70' :
                                        'bg-neutral-700 opacity-60'
                                }`}>
                                <h3 className="text-lime-100 text-xl font-medium font-['Raleway'] mb-2">{subject}</h3>
                                <p className="text-lime-100 text-lg font-normal font-['Raleway'] leading-relaxed">
                                    {currentClassSyllabus[subject]?.join(', ')}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-neutral-800 text-lg font-normal">No syllabus data available for this class.</p>
                    )}
                </div>
            </div>
        </>
    );
}

// Remove Node.js imports; Next.js app directory uses fetch for public assets
// import path from 'path';
// import { promises as fs } from 'fs';

// getStaticProps is not supported in the app directory. Use fetch in a server component or move this file to the pages directory.
// For app directory, use async function to fetch data from public/syllabus.json
// Example:
// export default async function SyllabusPage() {
//   const res = await fetch('/syllabus.json');
//   const syllabusData = await res.json();
//   return <Syllabus syllabusData={syllabusData} />;
// }