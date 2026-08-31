import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Automatically ensure the official resume PDF is copied to public/resume.pdf
try {
  const publicDir = path.resolve(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const searchDirs = [
    path.resolve(__dirname, '..', '..', 'resumes'),
    path.resolve(__dirname, '..', 'resumes'),
    path.resolve(__dirname, '..'),
    path.resolve(__dirname, '..', '..')
  ];

  const possiblePdfs = [
    'Vasanthakumar D resume.pdf',
    'Vasanthakumar083_resume.pdf',
    'Vasanthakumar__D_AI&DS.pdf',
    'Vasanthakumar.D_AI&DS.pdf'
  ];

  let copied = false;
  for (const searchDir of searchDirs) {
    if (fs.existsSync(searchDir)) {
      for (const pdfName of possiblePdfs) {
        const srcPath = path.join(searchDir, pdfName);
        if (fs.existsSync(srcPath)) {
          const destPath = path.join(publicDir, 'resume.pdf');
          fs.copyFileSync(srcPath, destPath);
          console.log(`Successfully copied ${srcPath} to public/resume.pdf`);
          copied = true;
          break;
        }
      }
    }
    if (copied) break;
  }

  if (!copied) {
    console.warn('Could not find source PDF in search directories.');
  }
} catch (err) {
  console.error('Error copying resume PDF:', err);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
