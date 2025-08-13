/**
 * Types used throughout the application.
 */

/**
 * ResumeData defines the structure of the resume information the
 * user can edit. Each array field represents multiple lines in the
 * UI; empty strings within arrays are permitted and will be ignored
 * by the templates.
 */
export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  experiences: string[];
  education: string[];
  skills: string[];
  projects: string[];
  achievements: string[];
  links: string[];
}

/**
 * TemplateName enumerates the available resume templates. Adding a new
 * template requires adding its name here and creating a matching
 * component in the templates directory.
 */
export type TemplateName = 'simple' | 'modern' | 'classic';