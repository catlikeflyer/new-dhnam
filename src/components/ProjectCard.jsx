export const ProjectCard = ({ category, image, title, description, link }) => {
  // Card with category, title, description, and a png image at last. The card itself if an anchor tag that links to the project's page.
  return (
    <a
      href={link}
      className="shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <div className="absolute top-0 left-0 bg-gradient-to-r from-indigo-600 to-teal-400 p-2 rounded-tr-lg rounded-bl-lg">
          <span className="text-white font-semibold text-sm">{category}</span>
        </div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
};
