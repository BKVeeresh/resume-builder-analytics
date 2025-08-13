import React from 'react';
import { ResumeData } from '../types';

interface Props {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

/**
 * Helper component that wraps a textarea for list-based sections. The
 * value is joined by newlines when displayed and split back into an
 * array on change. Empty lines are retained as empty strings to
 * preserve ordering but can be filtered out later.
 */
const TextAreaSection: React.FC<{ label: string; value: string[]; onChange: (val: string[]) => void }> = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block font-bold mb-1">{label}</label>
      <textarea
        className="w-full border rounded p-2"
        value={value.join('\n')}
        onChange={(e) => onChange(e.target.value.split('\n'))}
        rows={3}
      />
    </div>
  );
};

/**
 * Editor provides form controls for editing every field of the
 * resume. It uses controlled inputs bound to the parent state.
 */
const Editor: React.FC<Props> = ({ data, onChange }) => {
  const update = (field: keyof ResumeData, value: any) => {
    onChange({ ...data, [field]: value });
  };
  return (
    <div>
      <div className="mb-4">
        <label className="block font-bold mb-1">Name</label>
        <input
          className="w-full border rounded p-2"
          value={data.name}
          onChange={(e) => update('name', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-1">Title</label>
        <input
          className="w-full border rounded p-2"
          value={data.title}
          onChange={(e) => update('title', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-1">Summary</label>
        <textarea
          className="w-full border rounded p-2"
          rows={3}
          value={data.summary}
          onChange={(e) => update('summary', e.target.value)}
        />
      </div>
      <TextAreaSection label="Experience (one per line)" value={data.experiences} onChange={(val) => update('experiences', val)} />
      <TextAreaSection label="Education (one per line)" value={data.education} onChange={(val) => update('education', val)} />
      <TextAreaSection label="Skills (one per line)" value={data.skills} onChange={(val) => update('skills', val)} />
      <TextAreaSection label="Projects (one per line)" value={data.projects} onChange={(val) => update('projects', val)} />
      <TextAreaSection label="Achievements (one per line)" value={data.achievements} onChange={(val) => update('achievements', val)} />
      <TextAreaSection label="Links (one per line)" value={data.links} onChange={(val) => update('links', val)} />
    </div>
  );
};

export default Editor;
