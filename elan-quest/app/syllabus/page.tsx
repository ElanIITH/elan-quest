"use client";
import React, { useState, useEffect } from 'react';
import { Press_Start_2P } from 'next/font/google';

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
});

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
    <div className="w-full min-h-screen bg-neutral-800 pb-20">
      
      {/* Syllabus Heading aligned with paragraph */}
      <div className="max-w-5xl mx-auto px-4 pt-10 pb-4">
        <h1
          className={`text-lime-100 text-4xl sm:text-5xl md:text-6xl ${pressStart2P.className}`}
          style={{ height: '125px' }}
        >
          SYLLABUS
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-5xl mx-auto px-4 text-justify">
        <p className="text-lime-100 text-2xl font-light font-['Raleway']">
          Nexus QUEST spans four key academic areas -{' '}
          <span className="font-medium">Logical Reasoning</span>,{' '}
          <span className="font-medium">Mathematics</span>,{' '}
          <span className="font-medium">Physics</span>, and{' '}
          <span className="font-medium">Chemistry</span>, testing students theoretical knowledge,
          problem-solving capabilities, and real-world application of basic concepts. The examination
          balances curriculum-aligned topics with analytical reasoning, delivering a complete
          evaluation of scholarly performance across varied subjects.
        </p>
      </div>

      {/* Class Selection Buttons */}
      <div className="max-w-5xl mx-auto px-4 py-4 mt-6 bg-lime-100 flex flex-wrap justify-around items-center gap-4 rounded-md">
        {syllabusData &&
          Object.keys(syllabusData).map((className) => (
            <button
              key={className}
              onClick={() => setSelectedClass(className)}
              className={`w-40 h-12 flex items-center justify-center text-lg font-medium font-['Raleway'] transition-colors duration-200 rounded-lg shadow-md ${
                selectedClass === className
                  ? 'bg-neutral-800 text-lime-100'
                  : 'bg-neutral-600 text-gray-200'
              }`}
            >
              {className.replace('CLASS ', 'Class ')}
            </button>
          ))}
      </div>

      {/* Dynamic Syllabus Content */}
<div className="max-w-5xl mx-auto px-4 py-8 mt-8 bg-beige rounded-lg">
  <h2 className="text-lime-100 text-3xl font-bold font-['Raleway'] mb-6">
  {selectedClass.replace('CLASS ', 'Class ')}
</h2>

  {subjects.length > 0 && currentClassSyllabus ? (
  subjects.map((subject) => {
    const subjectKey = subject.toLowerCase();
    
    const bgOpacityClass =
      subjectKey === 'logical reasoning'
        ? 'bg-lime/100'
        : subjectKey === 'physics'
        ? 'bg-black/20'
        : subjectKey === 'chemistry'
        ? 'bg-black/30'
        : subjectKey === 'mathematics'
        ? 'bg-black/40'
        : 'bg-black/50';

    return (
      <div key={subject} className={`mb-4 p-4 rounded-lg ${bgOpacityClass}`}>
        <h3 className="text-lime-100 text-xl font-medium font-['Raleway'] mb-2">
          {subject}
        </h3>
        <p className="text-lime-100 text-lg font-normal font-['Raleway'] leading-relaxed">
          {currentClassSyllabus[subject]?.join(', ')}
        </p>
      </div>
    );
  })
) : (
  <p className="text-lime-100 text-lg font-normal font-['Raleway']">
    No syllabus data available for this class.
  </p>
)}
</div>
    </div>
  );
}