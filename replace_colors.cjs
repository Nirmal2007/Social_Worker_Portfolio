const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = {
  '#0F4C5C': '#1E293B', // Primary
  '#0A3642': '#0F172A', // Primary Dark
  '#166478': '#334155', // Primary Light
  '#176B5B': '#2563EB', // Secondary
  '#104C41': '#1D4ED8', // Secondary Dark
  '#D99A2B': '#F59E0B', // Accent
  '#B8801F': '#D97706', // Accent Hover
  '#FCEFD8': '#FEF3C7', // Accent Light
  '#F8F6F1': '#F8FAFC', // Bg Warm
  '#172A2E': '#0F172A', // Text Dark
  '#667579': '#64748B', // Text Muted
  '#E7F1EF': '#EFF6FF', // Soft Accent
};

function walkAndReplace(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkAndReplace(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      for (const [oldColor, newColor] of Object.entries(replacements)) {
        // Replace globally, case-insensitive
        const regex = new RegExp(oldColor, 'gi');
        if (regex.test(content)) {
          content = content.replace(regex, newColor);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  });
}

walkAndReplace(directoryPath);
console.log('Done!');
