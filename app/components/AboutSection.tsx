export default function AboutSection() {
    return (
        <>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3 col-span-2 items-center justify-center ml-24 self-center">
              <div className="h-1/2">
                <img src="IMG_1480.jpg" alt="" className="max-h-[500px] object-cover" />
              </div>
                
            </div>
            <div className="col-span-2 row-span-3 flex items-center justify-center w-3/4 ">
              <div className="flex flex-col ">
                <div >
                  <p className="text-base mb-10 px-16">
                    <span className="text-[#72383D]">Hello</span>, my name is
                  </p>
                  <h1 className="tracking-wide leading-none text-6xl text-shadow-sm mb-10 px-16">
                    KANOK SAENGJAN
                  </h1>
                </div>
                <p className="text-base px-16 ">
                  From Thailand, Sisaket. I have experience in web design, also I am good at Aglie Framework. I love to talk with you about our unique. I have been studying Software Engineering since 2023. I like creating a specific project.
                </p>
                <p className="text-base px-16 mt-8 ">
                Second-year Software Engineering student with hands-on experience in software development and UI/UX design. Passionate about learning and applying new technologies. 
                </p>
                <div className="flex space-x-4 mt-6 px-16">
                  <a href="#portfolio" className="btn btn-primary shadow-sm text-white">
                    Download CV
                  </a>
                </div>
            </div>
          </div>

          </div>
        </>
    )
}