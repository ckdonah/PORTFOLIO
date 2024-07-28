// icons
import { IoPlaySharp } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({
  imageUrl,
  image,
  altTitle,
  title,
  description,
  demoUrl,
  codeUrl,
}) => {
  const btnStyle = "flex items-center justify-center gap-2 border-2 border-solid p-1 text-base font-[500] transition-all duration-200 ease-in-out hover:bg-green-light hover:text-blue-main hover:shadow-none active:bg-green-dark active:text-white-main active:shadow-none bg-gray-main border-black-main shadow-box-shadow";

  return (
    <>
      <article>
        <div className="m-[10px] h-[430px] w-[300px] rounded overflow-hidden border-black-main border-0 bg-gray-main shadow-box-shadow">
          <a href={imageUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={altTitle}
              className="mb-2 h-[200px] w-[300px] object-cover object-center transition-all duration-200 ease-in-out hover:contrast-50"
            />
            <h3 className="py-1 text-center text-lg font-[700] uppercase decoration-2 transition-all duration-200 ease-in-out hover:underline">
              {title}
            </h3>
          </a>
          <p className="mx-2 h-28 p-1">{description}</p>

          <div className="flex justify-between px-12 py-4">
            <div className="w-fit">
              <a href={codeUrl} target="_blank" rel="noopener noreferrer" className={btnStyle}>
                Code <BsGithub />
              </a>
            </div>

            {demoUrl && (
              <div className="w-fit">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={btnStyle}>
                  Live Demo <IoPlaySharp />
                </a>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
