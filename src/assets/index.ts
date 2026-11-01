// Main assets module - consolidates common assets
import aboutMeJournalPng from './journalkarin.png';
import aboutMeJournalWebp800 from './journalkarin.png';
import aboutMeJournalWebp400 from './journalkarin.png';

import profile1svg from './profile1.png';
import profile2svg from './profile2.png';

const profile1 = profile1svg;
const profile2 = profile2svg;
import comingSoon from './coming_soon.png';
import dividerPng from './divider.PNG';
import dividerWebp from './divider-original.webp';
import divider from './divider-original.webp';

// For backward compatibility
const aboutMeJournal = aboutMeJournalPng;

// Re-export all asset modules
export * from './stars';
export * from './stickers';
export * from './project_icons';
export * from './techstack';

// Export main assets
export const mainAssets = {
  aboutMeJournal,
  aboutMeJournalPng,
  aboutMeJournalWebp800,
  aboutMeJournalWebp400,
  profile1,
  profile2,
  comingSoon,
  divider,
  dividerPng,
  dividerWebp,
};

export {
  aboutMeJournal,
  aboutMeJournalPng,
  aboutMeJournalWebp800,
  aboutMeJournalWebp400,
  profile1,
  profile2,
  comingSoon,
  divider,
  dividerPng,
  dividerWebp,
};

export default {
  mainAssets,
};
