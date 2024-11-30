// next.config.js

module.exports = {
  eslint: {
    // Disable specific ESLint rules for your Next.js app
    dirs: ['pages', 'components', 'src'], // Define the directories to apply ESLint
    ignoreDuringBuilds: true, // This will disable ESLint checks during production build
  },
};
