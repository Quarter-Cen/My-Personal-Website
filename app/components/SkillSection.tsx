export default function SkillSection() {
  return (
    <>
      <div className="grid grid-rows-8 grid-cols-3 grid-flow-col gap-4 w-[80vw] h-[70vh] ">
        <div className="row-span-1 flex items-end">
          <div>
            <p className="text-base">
              MY GREAT <span className="text-[#074940]">WORK</span>
            </p>
          </div>
        </div>
        <div className="row-span-1 col-span-2 ">
          <div>
            <p className="text-6xl text-shadow-sm">ABILITY OR SKILL</p>
          </div>
        </div>
        <div className="row-span-6 col-span-3 ml-10">
          <div className="grid grid-rows-3 grid-cols-2 grid-flow-col gap-4 h-full p-10">
            <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-2">
              <div className="row-span-2 col-span-1">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  className="w-full h-20" // ขนาดรูป
                  alt="Javascript logo"
                />
              </div>
              <div className="row-span-1 col-span-1 flex items-center">
                <p className="text-lg ">JAVASCRIPT</p>
              </div>
              <div className="row-span-1 col-span-2 flex items-start">
                <progress
                  className="progress progress-primary w-full shadow-md"
                  value={80}
                  max="100"
                ></progress>
              </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-2">
              <div className="row-span-2 col-span-1">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  className="w-full h-20" // ขนาดรูป
                  alt="HTML5 logo"
                />
              </div>
              <div className="row-span-1 col-span-1 flex items-center">
                <p className="text-lg ">HTML5 / CSS3</p>
              </div>
              <div className="row-span-1 col-span-2 flex items-start">
                <progress
                  className="progress progress-primary w-full shadow-md"
                  value={85}
                  max="100"
                ></progress>
              </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-2">
              <div className="row-span-2 col-span-1">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                  className="w-full h-20" // ขนาดรูป
                  alt="Nextjs logo"
                />
              </div>
              <div className="row-span-1 col-span-1 flex items-center">
                <p className="text-lg ">REACT / NEXTJS</p>
              </div>
              <div className="row-span-1 col-span-2 flex items-start">
                <progress
                  className="progress progress-primary w-full shadow-md"
                  value={65}
                  max="100"
                ></progress>
              </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-2">
              <div className="row-span-2 col-span-1">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                  className="w-full h-20" // ขนาดรูป
                  alt="Java logo"
                />
              </div>
              <div className="row-span-1 col-span-1 flex items-center">
                <p className="text-lg ">JAVA / PYTHON</p>
              </div>
              <div className="row-span-1 col-span-2 flex items-start">
                <progress
                  className="progress progress-primary w-full shadow-md"
                  value={65}
                  max="100"
                ></progress>
              </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-2">
              <div className="row-span-2 col-span-1">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                  className="w-full h-20" // ขนาดรูป
                  alt="MySQL logo"
                />
              </div>
              <div className="row-span-1 col-span-1 flex items-center">
                <p className="text-lg ">MYSQL</p>
              </div>
              <div className="row-span-1 col-span-2 flex items-start">
                <progress
                  className="progress progress-primary w-full shadow-md"
                  value={80}
                  max="100"
                ></progress>
              </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-2">
              <div className="row-span-2 col-span-1">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"
                  className="w-full h-20" // ขนาดรูป
                  alt="Rust logo"
                />
              </div>
              <div className="row-span-1 col-span-1 flex items-center">
                <p className="text-lg ">RUST</p>
              </div>
              <div className="row-span-1 col-span-2 flex items-start">
                <progress
                  className="progress progress-primary w-full shadow-md"
                  value={50}
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
