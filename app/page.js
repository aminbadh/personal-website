import Contact from "@/components/contact";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="flex justify-between">
        <Image
          src="/technologist.svg"
          width={40}
          height={40}
          alt="Technologist Icon"
        />
        <a className="underline underline-offset-2 p-2" href="#contact">Contact</a>
      </nav>

      <main className="mt-12 flex">
        <div>
          <h1 className="text-5xl font-medium sm:text-6xl sm:leading-normal">Hi, I&#39;m <span className="text-blue-600">Amin</span> <br /> <span className="text-3xl sm:text-5xl">Business Student</span></h1>
          <div className="mt-12 flex flex-wrap leading-loose">
            <a className="flex items-center space-x-1 mr-4 font-medium text-blue-800" href="https://www.linkedin.com/in/aminbadh/" target="_blank">LinkedIn</a>
            <a className="flex items-center space-x-1 mr-4 font-medium text-slate-700" href="https://github.com/aminbadh/" target="_blank">GitHub</a>
            <a className="flex items-center space-x-1 mr-8 font-medium text-blue-600" href="https://www.facebook.com/aminbadh/" target="_blank">Facebook</a>
            <a className="font-medium bg-gradient-to-r from-red-400 to-pink-500 text-transparent bg-clip-text" href="https://badh.notion.site/Find-Me-On-0fd1d9cd9adf47a48fe360b91be97c03?pvs=4" target="_blank">More</a>
          </div>
        </div>
      </main>

      <section className="mt-32 lg:flex">
        <h2 className="text-3xl flex-none w-52 font-medium mb-4">About Me</h2>
        <div className="grow">
          <p>I&#39;m a student at Tunis Business School with a passion for technology and innovation. I specialize in software development, marketing, and project management. My interests span across game, web, and mobile app development; digital marketing; and UX design. I love solving complex problems and collaborating with others to create efficient and user-friendly solutions. I am driven by a desire to work on impactful projects that can make a real difference in the world.</p>
          <a className="mt-4 inline-block underline underline-offset-2 font-medium" href="https://drive.google.com/file/d/14u1ov7-W-I2ySnUiFk-aiMBGEznokSuw/view?usp=drive_link" target="_blank">Download CV</a>
        </div>
      </section>

      <section className="mt-32 lg:flex">
        <h2 className="text-3xl flex-none w-52 font-medium mb-4">Projects</h2>
        <div className="grow">
          <p>As a developer with a keen interest in technology and innovation, my projects aim to address real-world challenges and create meaningful impacts within my community. Utilizing a diverse set of technologies such as Flutter, Firebase, Unity, and Java, I craft solutions ranging from web and mobile applications to engaging games. My development process is organized and efficient, employing project management tools like Trello for task management and Notion for thorough planning and resource management. I follow agile methodologies to ensure continuous improvement throughout the project lifecycle.</p>
          <div className="flex flex-col sm:flex-row">
            <a className="flex-1 mt-4 underline underline-offset-2 font-medium" href="https://www.linkedin.com/in/aminbadh/details/projects/" target="_blank">Explore Projects on LinkedIn</a>
            <a className="flex-1 mt-4 underline underline-offset-2 font-medium" href="https://badh.notion.site/cdfae11902ca4f72b9b4fe82c5f04a21?v=bee3010170e644e19c4c21755a0b9b5b&pvs=4" target="_blank">See All Projects</a>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-32 lg:flex">
        <h2 className="text-3xl flex-none w-52 font-medium mb-4">Contact</h2>
        <Contact />
      </section>

      <footer className="mt-32 mb-4">
        <p className="text-center">Thank you for visiting! <br className="sm:hidden" /> Here&#39;s a cookie 🍪</p>
      </footer>
    </>
  );
}