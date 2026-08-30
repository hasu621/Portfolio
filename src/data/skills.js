import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss, SiTailwindcss,
  SiC, SiCplusplus, SiMysql,
  SiGooglesheets
} from 'react-icons/si';
import { FaFileExcel } from 'react-icons/fa';

export const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss, color: '#1572B6' },
    ],
  },
  {
    title: 'Backend & Embedded',
    skills: [
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'Data & Productivity Tools',
    skills: [
      { name: 'Apps Script', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Microsoft Excel', icon: FaFileExcel, color: '#217346' },
      { name: 'Google Sheets', icon: SiGooglesheets, color: '#34A853' },
      { name: 'Zoho Sheets', icon: SiGooglesheets, color: '#14AEEF' },
    ],
  },
  {
    title: 'Soft Skills & Affiliations',
    skills: [
      { name: 'Adaptability', icon: null, color: '#b07c4f' },
      { name: 'Eager to Learn', icon: null, color: '#b07c4f' },
      { name: 'Coordinated', icon: null, color: '#b07c4f' },
      { name: 'Detail-Oriented', icon: null, color: '#b07c4f' },
      { name: 'Time Management', icon: null, color: '#b07c4f' },
      { name: 'Critical Thinking', icon: null, color: '#b07c4f' },
    ],
  },
];
