export default function ContactSection() {
  return (
    <>
      <div className="col-span-3 flex items-center justify-center">
        <div className="h-[70vh] w-[70vw] grid grid-cols-2 grid-rows-4">
          <div className="justify-center items-end flex flex-col col-span-2 mx-auto">
            <p className="text-lg mb-2">
              CONTACT <span className="text-primary">ME</span>
            </p>
            <p className="text-5xl text-shadow-sm">LET'S GET YOU AN ESTIMATE</p>
          </div>
          <div className="col-span-2 row-span-3 grid grid-cols-5 grid-rows-4">
            <div className="col-span-2 row-span-2 flex items-center justify-center">
              <div className="w-[90%] h-[90%] p-5 border-2 flex flex-col">
                <div className="flex-1">
                  <p className="text-2xl">EMAIL</p>
                </div>
                <div className="flex-1 text-zinc-600">
                  <p className="text-xl mb-1 text-hover">
                    kanoksaengjan@hotmail.com
                  </p>
                  <p className="text-xl text-hover">66022365@up.ac.th</p>
                </div>
              </div>
            </div>
            <div className="col-span-3 row-span-3 grid grid-cols-2 grid-rows-3">
              
            </div>
            <div className="col-span-2 row-span-2 flex items-center justify-center">
              <div className="w-[90%] h-[90%] p-5 border-2 flex flex-col">
                <div className="flex-1">
                  <p className="text-2xl">PHONE</p>
                </div>
                <div className="flex-1 text-zinc-600">
                  <p className="text-xl mb-1 text-hover">+66 62-318-6315</p>
                  <p className="text-xl text-hover">+66 64-329-1234</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="col-start-4 bg-[#D1C7BD] w-full"></div>
    </>
  );
}
