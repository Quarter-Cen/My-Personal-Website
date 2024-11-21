export default function Hero() {
    return (
      <div
        className="hero bg min-h-screen bg-cover"
        style={{ backgroundImage: "url('/T-pose.png')", backgroundPosition: "10% 20%" }}
      >
        <div>
          <div className="hero-content text-center px-4 bg-opacity-80 bg-slate-100 rounded-xl text-zinc-900 w-full shadow sm:max-w-3xl">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Hi, I'm Kanok Saengjan
              </h1>
              <p className="text-lg mb-6 leading-relaxed tracking-wide">
                I'm a web developer with a passion for creating clean, user-friendly websites.
                With a strong foundation in both front-end and back-end technologies, I focus on
                building responsive and performant web applications. I love solving problems,
                learning new technologies, and collaborating with others to deliver the best solutions.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#portfolio" className="btn btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-outline">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#f7d662] mt-2 h-1 rounded-full"></div>
        </div>

      </div>
    );
}
