import { div } from "framer-motion/client"

export default function SkillTech() {
    return (
        <div className="bg-cover" style={{backgroundImage: "linear-gradient(rgba(224, 224, 222, 0.6), rgba(224, 224, 222, 0.6)), url('/minimal_bg.png')"}}>

                <div>
                    <div className="max-w-5xl mx-auto p-6">
                        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Skills and Technologies</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Skill 1 */}
                            <div className="bg-accent p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-[#52350f] mb-3">Programming Languages</h3>
                                <div className="flex items-center space-x-2 ">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
                                    className="w-6 h-6" // ขนาดรูป
                                    alt="Javascript logo"
                                />
                                <span className="font-semibold text-gray-700">JavaScript & TypeScript</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                                    className="w-6 h-6" // ขนาดรูป
                                    alt="Java logo"
                                />
                                <span className="font-semibold text-gray-700">Java</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                                    className="w-6 h-6" // ขนาดรูป
                                    alt="Python logo"
                                />
                                <span className="font-semibold text-gray-700">Python</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"
                                    className="w-6 h-6" // ขนาดรูป
                                    alt="Rust logo"
                                />
                                <span className="font-semibold text-gray-700">Rust</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                                    className="w-6 h-6" // ขนาดรูป
                                    alt="php logo"
                                />
                                <span className="font-semibold text-gray-700">php</span>
                                </div>
                            </div>
                            {/* Skill 2 */}
                            <div className="bg-accent p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-[#52350f] mb-3">Web Development</h3>
                                <div className="flex items-center space-x-2 ">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="HTML5 logo"
                                    />
                                    <span className="font-semibold text-gray-700">HTML & CSS</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="React logo"
                                    />
                                    <span className="font-semibold text-gray-700">React</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="VueJs logo"
                                    />
                                    <span className="font-semibold text-gray-700">Vue</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="Nextjs logo"
                                    />
                                    <span className="font-semibold text-gray-700">NEXT</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="Nuxtjs logo"
                                    />
                                    <span className="font-semibold text-gray-700">NUXT</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="Nodejs logo"
                                    />
                                    <span className="font-semibold text-gray-700">Node</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="Express logo"
                                    />
                                    <span className="font-semibold text-gray-700">Express</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="Tailwindcss logo"
                                    />
                                    <span className="font-semibold text-gray-700">Tailwind</span>
                                </div>
                            </div>
                            
                            {/* Skill 3 */}
                            <div className="bg-accent p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-[#52350f] mb-3">Databases</h3>
                                <div className="flex items-center space-x-2 ">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" 
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="MySQL logo"
                                    />
                                    <span className="font-semibold text-gray-700">MySQL</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="PostgreSQL logo"
                                    />
                                    <span className="font-semibold text-gray-700">PostgreSQL</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="mongoDB logo"
                                    />
                                    <span className="font-semibold text-gray-700">mongoDB</span>
                                </div>
                            </div>
                            {/* Skill 4 */}
                            <div className="bg-accent p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-[#52350f] mb-3">Tools and Technologies</h3>
                                <div className="flex items-center space-x-2 ">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" 
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="Git logo"
                                    />
                                    <span className="font-semibold text-gray-700">Git & GitHub</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="Postman logo"
                                    />
                                    <span className="font-semibold text-gray-700">Postman</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="Docker logo"
                                    />
                                    <span className="font-semibold text-gray-700">Docker</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spyder/spyder-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="Spyder logo"
                                    />
                                    <span className="font-semibold text-gray-700">Spyder</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="Figma logo"
                                    />
                                    <span className="font-semibold text-gray-700">Figma</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="Photoshop logo"
                                    />
                                    <span className="font-semibold text-gray-700">Photoshop</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="PremierePro logo"
                                    />
                                    <span className="font-semibold text-gray-700">PremierePro</span>
                                </div>
                            </div>
                            {/* Skill 5 */}
                            <div className="bg-accent p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-[#52350f] mb-3">Testing</h3>
                                <div className="flex items-center space-x-2 ">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg" 
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="Junit logo"
                                    />
                                    <span className="font-semibold text-gray-700">Junit</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="Jest logo"
                                    />
                                    <span className="font-semibold text-gray-700">Jest</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg"
                                        className="w-6 h-6" // ขนาดรูป
                                        alt="PyTest logo"
                                    />
                                    <span className="font-semibold text-gray-700">PyTest</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
      );
}
