import React from 'react';
import { ResumeData } from '../types';

interface SectionProps {
  title: string;
  items: string[];
  accent: string;
}

/**
 * Renders a resume section with a heading and a bulleted list of
 * items. Sections with no valid items are not rendered. The accent
 * colour is used for the heading.
 */
const Section: React.FC<SectionProps> = ({ title, items, accent }) => {
  const filtered = items.filter((item) => item && item.trim() !== '');
  if (filtered.length === 0) {
    return null;
  }
  return (
    <div className="mb-4">
      <h3 className="font-bold" style={{ color: accent }}>{title}</h3>
      <ul className="list-disc ml-4">
        {filtered.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

interface Props {
  data: ResumeData;
  accent: string;
}

/**
 * SimpleTemplate lays out the resume in a straightforward manner.
 * The header displays the name and title, followed by a summary and
 * the various sections in sequence. It uses the accent colour for
 * section headings.
 */
export const SimpleTemplate: React.FC<Props> = ({ data, accent }) => {
  return (
    <div className="p-4 font-sans text-sm">
      <header className="mb-4">
        <h1 className="text-3xl font-bold leading-tight">{data.name || 'Your Name'}</h1>
        <h2 className="text-xl text-gray-700">{data.title || 'Title'}</h2>
      </header>
      {data.summary && <section className="mb-4"><p>{data.summary}</p></section>}
      <Section title="Experience" items={data.experiences} accent={accent} />
      <Section title="Education" items={data.education} accent={accent} />
      <Section title="Skills" items={data.skills} accent={accent} />
      <Section title="Projects" items={data.projects} accent={accent} />
      <Section title="Achievements" items={data.achievements} accent={accent} />
      <Section title="Links" items={data.links} accent={accent} />
    </div>
  );
};
