import React from 'react';
import { ResumeData } from '../types';

interface Props {
  data: ResumeData;
  accent: string;
}

/**
 * ClassicTemplate arranges the resume into a three-column grid. The
 * left column contains summary, skills and links while the right two
 * columns contain experience, education, projects and achievements.
 * This layout evokes a more traditional resume style with serif
 * typography. Section headings use the accent colour for emphasis.
 */
export const ClassicTemplate: React.FC<Props> = ({ data, accent }) => {
  const filter = (arr: string[]) => arr.filter((x) => x && x.trim() !== '');
  return (
    <div className="p-6 font-serif text-sm">
      <header className="mb-4">
        <h1 className="text-3xl font-bold" style={{ color: accent }}>{data.name || 'Your Name'}</h1>
        <h2 className="text-lg italic text-gray-700">{data.title || 'Title'}</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1">
          {data.summary && (
            <div className="mb-4">
              <h3 className="font-bold" style={{ color: accent }}>Summary</h3>
              <p className="text-sm">{data.summary}</p>
            </div>
          )}
          {filter(data.skills).length > 0 && (
            <div className="mb-4">
              <h3 className="font-bold" style={{ color: accent }}>Skills</h3>
              <ul className="list-disc ml-4 text-sm">
                {filter(data.skills).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {filter(data.links).length > 0 && (
            <div className="mb-4">
              <h3 className="font-bold" style={{ color: accent }}>Links</h3>
              <ul className="list-disc ml-4 text-sm">
                {filter(data.links).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-2">
          {filter(data.experiences).length > 0 && (
            <div className="mb-4">
              <h3 className="font-bold" style={{ color: accent }}>Experience</h3>
              <ul className="list-disc ml-4">
                {filter(data.experiences).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {filter(data.education).length > 0 && (
            <div className="mb-4">
              <h3 className="font-bold" style={{ color: accent }}>Education</h3>
              <ul className="list-disc ml-4">
                {filter(data.education).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {filter(data.projects).length > 0 && (
            <div className="mb-4">
              <h3 className="font-bold" style={{ color: accent }}>Projects</h3>
              <ul className="list-disc ml-4">
                {filter(data.projects).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {filter(data.achievements).length > 0 && (
            <div className="mb-4">
              <h3 className="font-bold" style={{ color: accent }}>Achievements</h3>
              <ul className="list-disc ml-4">
                {filter(data.achievements).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
