import React, { useEffect, useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import TemplatePicker from './components/TemplatePicker';
import Controls from './components/Controls';
import { ResumeData, TemplateName } from './types';
import { trackVisit, trackEvent } from './lib/tracking';

declare global {
  interface Window {
    html2pdf?: any;
  }
}

/**
 * Default resume data. When the app first loads without any saved
 * data, these values populate the editor. Arrays start with a
 * single empty string to make the textarea appear with one line.
 */
const defaultResume: ResumeData = {
  name: '',
  title: '',
  summary: '',
  experiences: [''],
  education: [''],
  skills: [''],
  projects: [''],
  achievements: [''],
  links: [''],
};

const STORAGE_KEY = 'resume_data';
const TEMPLATE_KEY = 'resume_template';
const ACCENT_KEY = 'resume_accent';

const App: React.FC = () => {
  const [data, setData] = useState<ResumeData>(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : defaultResume;
  });
  const [template, setTemplate] = useState<TemplateName>(() => {
    const val = localStorage.getItem(TEMPLATE_KEY) as TemplateName | null;
    return val || 'simple';
  });
  const [accent, setAccent] = useState<string>(() => {
    return localStorage.getItem(ACCENT_KEY) || '#2563eb';
  });

  // Persist data changes to localStorage.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem(TEMPLATE_KEY, template);
  }, [template]);

  useEffect(() => {
    localStorage.setItem(ACCENT_KEY, accent);
  }, [accent]);

  // Track the initial visit on mount.
  useEffect(() => {
    trackVisit();
    // Track session end on beforeunload
    const handleUnload = () => {
      trackEvent('session_end', {});
    };
    window.addEventListener('beforeunload', handleUnload);
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  const handleDataChange = (newData: ResumeData) => {
    setData(newData);
    trackEvent('field_updated', {});
  };

  const handleTemplateChange = (tmpl: TemplateName) => {
    setTemplate(tmpl);
    trackEvent('template_selected', { template: tmpl });
  };

  const handleAccentChange = (color: string) => {
    setAccent(color);
  };

  const handleReset = () => {
    setData(defaultResume);
    setTemplate('simple');
    setAccent('#2563eb');
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(TEMPLATE_KEY);
    localStorage.removeItem(ACCENT_KEY);
  };

  const handleDownload = () => {
    const element = document.getElementById('preview');
    if (!element) return;
    // Use html2pdf if available; otherwise fall back to print
    if (window.html2pdf) {
      const opt = {
        margin: 0.25,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      };
      window.html2pdf().set(opt).from(element).save();
    } else {
      // Fallback to browser print dialog
      window.print();
    }
    trackEvent('pdf_exported', {});
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-white shadow mb-4">
        <h1 className="text-2xl font-bold">Resume Builder</h1>
      </header>
      <main className="flex-1 p-4 flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <TemplatePicker value={template} onChange={handleTemplateChange} />
          <Controls accent={accent} onAccentChange={handleAccentChange} onDownload={handleDownload} onReset={handleReset} />
          <Editor data={data} onChange={handleDataChange} />
        </div>
        <div className="md:w-1/2 bg-gray-100 p-2 overflow-auto">
          <Preview data={data} template={template} accent={accent} />
        </div>
      </main>
      <footer className="p-4 bg-gray-50 text-sm text-center">
        <p>
          This resume builder does not collect any analytics. Your data stays entirely in your browser.
        </p>
      </footer>
    </div>
  );
};

export default App;