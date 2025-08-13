import React from 'react';

interface Props {
  accent: string;
  onAccentChange: (color: string) => void;
  onDownload: () => void;
  onReset: () => void;
}

/**
 * Controls provides UI elements for selecting the accent colour,
 * downloading the resume as a PDF and resetting all data. Buttons
 * include minimal styling via Tailwind CSS.
 */
const Controls: React.FC<Props> = ({ accent, onAccentChange, onDownload, onReset }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-4">
      <div className="flex items-center gap-2">
        <label className="font-bold">Accent Color:</label>
        <input
          type="color"
          value={accent}
          onChange={(e) => onAccentChange(e.target.value)}
          className="w-8 h-8 border-0 p-0"
        />
      </div>
      <button
        onClick={onDownload}
        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download PDF
      </button>
      <button
        onClick={onReset}
        className="px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
