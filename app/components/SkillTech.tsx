import { div } from "framer-motion/client"

export default function SkillTech() {
    return (
        <div className="min-h-screen bg-cover" style={{backgroundImage: "linear-gradient(rgba(224, 224, 222, 0.6), rgba(224, 224, 222, 0.6)), url('/minimal_bg.png')"}}>

                <div>
                    <div className="max-w-4xl mx-auto p-6">
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
                                <span className="font-semibold text-gray-700">Javascript</span>
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
                            </div>
                            {/* Skill 2 */}
                            <div className="bg-accent p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-[#52350f] mb-3">Web Development</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="text-gray-700">HTML & CSS</li>
                                <li className="text-gray-700">Tailwind CSS</li>
                                <li className="text-gray-700">React</li>
                                <li className="text-gray-700">Node.js</li>
                            </ul>
                            </div>
                            {/* Skill 3 */}
                            <div className="bg-accent p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-[#52350f] mb-3">Databases</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="text-gray-700">MySQL</li>
                                <li className="text-gray-700">MongoDB</li>
                                <li className="text-gray-700">PostgreSQL</li>
                            </ul>
                            </div>
                            {/* Skill 4 */}
                            <div className="bg-accent p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-[#52350f] mb-3">Tools and Technologies</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="text-gray-700">Git & GitHub</li>
                                <li className="text-gray-700">Docker</li>
                                <li className="text-gray-700">AWS</li>
                                <li className="text-gray-700">Jenkins</li>
                            </ul>
                            </div>
                            {/* Skill 5 */}
                            <div className="bg-accent p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-[#52350f] mb-3">Testing</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="text-gray-700">Jest</li>
                                <li className="text-gray-700">Mocha</li>
                                <li className="text-gray-700">Chai</li>
                                <li className="text-gray-700">Cypress</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
      );
}
