import React from 'react';
import { ResumeData, TemplateName } from '../types';
import { SimpleTemplate } from '../templates/simple';
import { ModernTemplate } from '../templates/modern';
import { ClassicTemplate } from '../templates/classic';

interface Props {
  data: ResumeData;
  template: TemplateName;
  accent: string;
}

/**
 * Preview selects the appropriate template based on the template name
 * and renders it. The rendered content is wrapped in a container with
 * a white background and a shadow to emulate a sheet of paper. This
 * wrapper has an id of `preview` so it can be targeted for PDF
 * generation.
 */
const Preview: React.FC<Props> = ({ data, template, accent }) => {
  return (
    <div id="preview" className="bg-white shadow rounded p-4 overflow-auto h-full">
      {template === 'simple' && <SimpleTemplate data={data} accent={accent} />}
      {template === 'modern' && <ModernTemplate data={data} accent={accent} />}
      {template === 'classic' && <ClassicTemplate data={data} accent={accent} />}
    </div>
  );
};

export default Preview;
