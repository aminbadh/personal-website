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
        <a className="underline underline-offset-2 p-2" href="mailto:aminbadh@gmail.com" target="_blank">Contact</a>
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

        <div className="hidden grow pl-10 justify-end items-center blur-xl lg:flex lg:justify-center">
          <div className="h-40 w-52 rounded-full medium bg-gradient-to-r from-red-400 to-pink-400">
            <div className="relative -top-8 -left-10 h-32 w-32 rounded-full bg-blue-400 opacity-60" />
            <div className="relative bottom-10 -right-24 h-32 w-32 rounded-full bg-green-400 opacity-60" />
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

      <footer className="mt-32 mb-4">
        <p className="text-center">Thank you for visiting! Here&#39;s a cookie 🍪</p>
      </footer>
    </>
  );
}