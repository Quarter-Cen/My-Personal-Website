export default function HomeSection() {
    return (
        <>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="col-span-2 row-span-3 flex items-center justify-center w-3/4">
                <div className="flex flex-col ml-16">
                  <div >
                    <p className="text-sm">
                      WEB DEVELOPER <span className="text-[#72383D]">AND</span> MUSICIAN 
                    </p>
                    <h1 className="tracking-wide leading-none text-7xl text-shadow-sm">
                      KANOK <span className="block mt-0">{/* No margin-top */} SAENGJAN</span>
                    </h1>
                  </div>
                  <p className="text-sm px-16 mt-2 ">
                    From Thailand, Sisaket. I have experience in web design, also I am good at Aglie Framework. I love to talk with you about our unique.
                  </p>
                  <div className="flex justify-center space-x-4 mt-3 ">
                    <a href="#portfolio" className="btn btn-primary shadow-sm text-white">
                      View My Work
                    </a>
                    <a href="#contact" className="btn btn-outline">
                      Contact Me
                    </a>
                  </div>
              </div>
            </div>
              <div className="row-span-3 justify-self-end">
                <img src="IMG_1480.jpg" alt="" className="min-h-screen w-full object-cover" />
              </div>
            </div>
        </>
    )
}