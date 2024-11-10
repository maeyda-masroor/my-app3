import Image from "next/image";
import image1 from "../../public/css.png";
import image2 from "../../public/node.png";
import image3 from "../../public/html.png";
import image4 from "../../public/reactjs.png";
import image5 from "../../public/js.png";
import image6 from "../../public/git.png";
import image7 from "../../public/ts.png";

export default function LogoSlider() {
    return (
      <div className="relative">
        <div className="overflow-x-auto whitespace-nowrap py-2">
          <div className="flex space-x-2 px-2">
            {/* Add your logos here */}
            <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <Image className="rounded-md hover:animate-bounce" src={image1} alt="c" width={300} height={300}/>     
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <Image className="rounded-md hover:animate-bounce" src={image2} alt="c" width={300} height={300}/>     
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <Image className="rounded-md hover:animate-bounce" src={image3} alt="c" width={300} height={300}/>        
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <Image className="rounded-md hover:animate-bounce" src={image4} alt="c" width={300} height={300}/>
            </div>
            {/* More logos for scrolling */}
            <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <Image className="rounded-md hover:animate-bounce" src={image5} alt="c" width={300} height={300}/>
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <Image className="rounded-md hover:animate-bounce" src={image6} alt="c" width={300} height={300}/>
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <Image className="rounded-md hover:animate-bounce" src={image7} alt="c" width={300} height={300}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
