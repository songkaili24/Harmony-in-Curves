// File: GitHubReadmeButton.tsx

import React from 'react';

const GitHubReadmeButton: React.FC = () => {
  const githubRepoUrl = 'https://github.com/songkaili24/Harmony-in-Curves';
  const readmeUrl = `${githubRepoUrl}/blob/main/README.md`;

  return (
    <div>
      <p>Click the button below to view the README on GitHub:</p>
      <a
        href={readmeUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          View README on GitHub
        </button>
      </a>
    </div>
  );
};

export default GitHubReadmeButton;