import Image from "next/image"
import Logo from '../../public/logo.png';
export default function Footer(){
    return (
        <div className="grid place-items-center bg-pink border-black border-t-2">
          <div className="p-6 rounded  w-full max-w-md">
            <div className="flex space-x-2">
              <div className=" text-white p-2 w-1/4 text-center rounded">
                <Image className="rounded w-25 h-20 border-2 border-black" src={Logo} alt="footer" width={80} height={80} />
              </div>
              <div className=" text-white m-2 w-3/4 text-left rounded justify-center">
                <h1 className="text-3xl text-black font-extrabold animate-ping">MAAEYDAH MASROOR</h1>
              </div>
            </div>
          </div>
          <div className="p-2 rounded  w-full max-w-md">
            <div className="flex space-x-1">
              <div className=" text-black  w-1/5 text-left">
                Home
              </div>
              <div className=" text-black w-1/5 text-left">
                Features
              </div>
              <div className=" text-black  w-1/5 text-left">
                Skills
              </div>
              <div className=" text-black w-1/5 text-left">
                Work Experience
              </div>
              <div className=" text-black w-1/5 text-left">
                Contact
              </div>
            </div>
          </div>
          <div className="p-2 w-full max-w-md">
            <div className="flex space-x-1">
              <div className="text-white w-1/8 ">
                <Image src='https://img.icons8.com/?size=100&id=16713&format=png&color=000000' 
                width={50} height={50} alt="d"
                />
              </div>
              <div className=" text-white w-1/8 ">
                <Image src='https://img.icons8.com/?size=100&id=32323&format=png&color=000000'
                width={50} height={50} alt="d"/>
              </div>
              <div className="text-white w-1/8 ">
                <Image src='https://img.icons8.com/?size=100&id=16713&format=png&color=000000' 
                width={50} height={50} alt="d"
                />
              </div>
              <div className=" text-white  w-1/8 ">
                <Image src='https://img.icons8.com/?size=100&id=32323&format=png&color=000000'
                width={50} height={50} alt="d"/>
              </div>
              <div className="text-white  w-1/8 ">
                <Image src='https://img.icons8.com/?size=100&id=16713&format=png&color=000000' 
                width={50} height={50} alt="d"
                />
              </div>
              <div className=" text-white  w-1/8 text-center">
                <Image src='https://img.icons8.com/?size=100&id=32323&format=png&color=000000'
                width={50} height={50} alt="d"/>
              </div>
              <div className="text-white  w-1/8 ">
                <Image src='https://img.icons8.com/?size=100&id=16713&format=png&color=000000' 
                width={50} height={50} alt="d"
                />
              </div>
              <div className=" text-white w-1/8 ">
                <Image src='https://img.icons8.com/?size=100&id=32323&format=png&color=000000'
                width={50} height={50} alt="d"/>
              </div>
              <div className="text-white w-1/8 ">
                <Image src='https://img.icons8.com/?size=100&id=16713&format=png&color=000000' 
                width={50} height={50} alt="d"
                />
              </div>
              <div className=" text-white  w-1/8 ">
                <Image src='https://img.icons8.com/?size=100&id=32323&format=png&color=000000'
                width={50} height={50} alt="d"/>
              </div>
              <div className="text-white  w-1/8 ">
                <Image src='https://img.icons8.com/?size=100&id=16713&format=png&color=000000' 
                width={50} height={50} alt="d"
                />
              </div>
              <div className=" text-white w-1/8 ">
                <Image src='https://img.icons8.com/?size=100&id=32323&format=png&color=000000'
                width={50} height={50} alt="d"/>
              </div>
            </div>
          </div>
        </div>
        
        
    )
}