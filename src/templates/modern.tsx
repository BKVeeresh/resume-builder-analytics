import React from 'react';
import { ResumeData } from '../types';

interface Props {
  data: ResumeData;
  accent: string;
}

/**
 * ModernTemplate arranges the resume into two columns. The left column
 * contains the summary, experience and education, while the right
 * column holds skills, projects, achievements and links. Section
 * headings are tinted with the accent colour.
 */
export const ModernTemplate: React.FC<Props> = ({ data, accent }) => {
  // Helper to filter out empty strings.
  const filter = (arr: string[]) => arr.filter((x) => x && x.trim() !== '');
  return (
    <div className="p-6 font-sans text-sm">
      <header className="mb-6 border-b-2 pb-4" style={{ borderColor: accent }}>
        <h1 className="text-4xl font-bold leading-tight">{data.name || 'Your Name'}</h1>
        <h2 className="text-2xl text-gray-700">{data.title || 'Title'}</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {data.summary && (
            <div className="mb-4">
              <h3 className="font-bold" style={{ color: accent }}>Summary</h3>
              <p>{data.summary}</p>
            </div>
          )}
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
        </div>
        <div>
          {filter(data.skills).length > 0 && (
            <div className="mb-4">
              <h3 className="font-bold" style={{ color: accent }}>Skills</h3>
              <ul className="list-disc ml-4">
                {filter(data.skills).map((item, idx) => (
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
          {filter(data.links).length > 0 && (
            <div className="mb-4">
              <h3 className="font-bold" style={{ color: accent }}>Links</h3>
              <ul className="list-disc ml-4">
                {filter(data.links).map((item, idx) => (
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
