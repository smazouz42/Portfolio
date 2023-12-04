import React from 'react';
import Image from 'next/image';

const Project = ({ title, description, technologies, image, projectLink, githubLink }) => {
  return (
    <div className="flex items-center justify-center project-container space-x-4 p-4 rounded-md shadow-md">
      <div className="flex-shrink-0">
        <Image src={image} alt={title} width={200} height={200} className="rounded-full" />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-600"><strong>Technologies:</strong> {technologies}</p>
        <div className="flex space-x-2">
          {projectLink && <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>}
          {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">GitHub Repo</a>}
        </div>
      </div>
    </div>
  );
};
export default Project;
