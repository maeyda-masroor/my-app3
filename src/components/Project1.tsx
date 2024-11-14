import Tag from '../static/Tag';
export default function Project(){

    const p1 =  [
          {
              "title": "Portfolio Website",
              "link": "",
              "tags": ["Next.js", "Javascript", "Redux", "MUI"],
              "text": "A portfolio website with responsive design that highlights professional work and services"
          },
          {
              "title": "Trading App",
              "link": "",
              "tags": ["Next.js", "Typescript", "Tailwind CSS"],
              "text": "A single-page application with responsive design that highlights professional work"
          },
          {
              "title": "Photo Website",
              "link": "",
              "tags": ["React.js", "Typescript", "Tailwind CSS", "Redux"],
              "text": "A website to curate and share photos that capture life's most memorable moments."
          }
      ]
      return (
        <div>
        <div>
            <div className="grid place-items-center m-10">
            <div className="text-black font-extrabold text-5xl">PROJECTS</div>
            <div className="m-2 text-black justify-center text-4xl">CHECK ON MY GITHUB</div>
          </div>
          <div className="flex flex-col md:flex-row">
          <div className="p-4  w-full md:w-1/2 flex-wrap">
          {p1.map((social, index) => ( 
            <div className="flex bg-pink p-4 rounded-md m-2 text-black animate-bounce" key={index}>
             <div className="rounded-full border-2 w-20 h-20">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-15 h-15 text-green-500"
            >
              <path d="M4.5 4h15a2.5 2.5 0 012.5 2.5v11a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5v-11A2.5 2.5 0 014.5 4zm0 1.5a.5.5 0 00-.5.5v.67l7.25 4.5 7.25-4.5V6a.5.5 0 00-.5-.5h-15zm15 13a.5.5 0 00.5-.5v-8.55l-7.07 4.39a.75.75 0 01-.86 0L4 9.45V17a.5.5 0 00.5.5h15z" />
            </svg>
             </div>
             <div className="w-90 h-20 p-2">
              <div className="text-white flex space-x-2">
                  <p className="font-bold">{social.title}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                    {social.tags.map((item, index) =>
                    <li key={index} className="mr-1.5 mt-2"><Tag title={item} /></li>
                )}
            </ul> 
              </div>
              </div>
            </div>
          ))}
            </div>
          </div>
          </div>
          </div>
      )
  }