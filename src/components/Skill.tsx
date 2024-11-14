import CircularProgressBar from "./CSS"

export default function ContactMe(){
  const progress1 =[
    {
      progress: 75,
      title:'reactjs'  
    },
    {
      progress: 50,
      title:'html'  
    },
    {
      progress: 60,
      title:'css'  
  
    },
    {
      progress: 50,
      title:'git'  
   
    },{
      progress: 50,
      title:'nextjs'  
  
    }
  ]
  return (
  <div>
  <div className="grid place-items-center m-10">
        <div className="text-black font-extrabold text-5xl">FEATURES</div>
        <div className="m-2 text-black justify-center text-7xl">WHAT I DO..</div>
      </div>
      <div className="flex flex-col md:flex-row">
      <div className="p-4  w-full md:w-1/2">
      <div className="flex flex-wrap gap-4 justify-center text-black">
      {progress1.map((social, index) => ( 
      <div className="flex-item bg-yellow flex justify-center items-center p-4 rounded-lg animate-bounce" key={index}><div><CircularProgressBar progress={social.progress} size={100} strokeWidth={8}/><br/><h3>{social.title}</h3></div></div>
      ))}
      </div>
      </div>
      <div className="w-full md:w-1/2 m-0">
      <div className="flex flex-row p-2 text-black font-extrabold text-2xl">
            MY SKILLS
            </div>
            <div className="flex flex-row p-2 text-black font-extrabold text-5xl">
            Crafting Innovative & Engaging Digital Solutions
            </div>
            <div className="flex flex-row p-2 text-black font-bold text-1xl">
            Learning and improving my skills day by day. With a strong foundation in front-end and back-end technologies, I deliver seamless and interactive digital experiences. My focus is on building fast, scalable, and user-friendly solutions that cater to your unique business needs. Explore my expertise, and lets create something remarkable.
            </div>
            <div className="flex flex-row p-2">
                <div className="flex-1  group inline-block">
                <div className="transform transition-transform duration-300 group-hover:-rotate-90">
                👉 Hover over me!
                </div>
                <div className="flex-1 bg-pink p-4 rounded-3xl text-black text-xl animate-bounce">DOWNLOAD CV...</div>
          </div>
            </div>
      </div>
      </div>
      </div>

  )
}