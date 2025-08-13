import React from 'react';
import { TemplateName } from '../types';

interface Props {
  value: TemplateName;
  onChange: (value: TemplateName) => void;
}

/**
 * TemplatePicker provides radio buttons for selecting one of the
 * available resume templates. It capitalises the template names for
 * display and invokes the onChange callback when the selection
 * changes.
 */
const TemplatePicker: React.FC<Props> = ({ value, onChange }) => {
  const templates: TemplateName[] = ['simple', 'modern', 'classic'];
  return (
    <div className="flex flex-wrap items-center gap-4 mb-2">
      <label className="font-bold mr-2">Template:</label>
      {templates.map((name) => (
        <label key={name} className="flex items-center gap-1 capitalize cursor-pointer">
          <input
            type="radio"
            name="template"
            value={name}
            checked={value === name}
            onChange={() => onChange(name)}
          />
          {name}
        </label>
      ))}
    </div>
  );
};

export default TemplatePicker;
