import { Card } from "@/components/ui/card";
import Divider from "@/app/_components/divider";
import { Be_Vietnam_Pro } from "next/font/google";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function aboutPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="col-span-1 md:col-span-2">
        <h1 className={`text-2xl font-bold ${beVietnamPro.className} mb-2`}>About me</h1>
        <p className="text-lg">
          I&apos;m Charlie, a passionate freelance web and application developer
          based in Denmark. At just 15 years old, I&apos;ve immersed myself in the
          world of technology, honing my skills in various programming languages
          and frameworks.
          <br />
          <br />
          With a strong foundation in Next.js and Tailwind CSS, I specialize in creating
          responsive and applications that not only meet client needs but also
          provide an engaging user experience. My approach combines technical
          expertise with a passion for design, ensuring that every project I
          undertake is both functional and aesthetically pleasing.
          <br />
          <br />
          My journey into software development began at just 5 years old with a
          curiosity for coding, which quickly evolved into a passion. I enjoy
          tackling challenges and finding innovative solutions to complex
          problems. Whether it&apos;s developing a sleek website or an intuitive
          application, I strive to deliver innovative and high-quality results.
          <br />
          <br />
          I&apos;m always eager to learn and grow, and I&apos;m excited to take on new
          challenges and opportunities in the field of software development.
        </p>
      </div>
      <Card className="shadow-lg w-full md:w-auto p-4 bg-primary/80 text-white">
        <h2 className={`text-2xl font-bold ${beVietnamPro.className} mb-2`}>
          Charlie VA
        </h2>
        <div className={`text-md ${beVietnamPro.className}`}>
          Age: <b>15</b>
          <br />
          <Divider />
          Location: <b>Denmark</b>
          <br />
          <Divider />
          Skills:
          <ul className="ml-1 list-none space-y-1">
            <li>
              <HoverCard>
                <HoverCardTrigger>React</HoverCardTrigger>
                <HoverCardContent>
                  React is a JavaScript library for building user interfaces.
                </HoverCardContent>
              </HoverCard>
            </li>
            <li>
              <HoverCard>
                <HoverCardTrigger>Next.js</HoverCardTrigger>
                <HoverCardContent>
                  Next.js is a framework for building server-side rendered React
                  applications.
                </HoverCardContent>
              </HoverCard>
            </li>
            <li>
              <HoverCard>
                <HoverCardTrigger>Tailwind CSS</HoverCardTrigger>
                <HoverCardContent>
                  Tailwind CSS is a CSS framework for styling web applications.
                </HoverCardContent>
              </HoverCard>
            </li>
            <li>
              <HoverCard>
                <HoverCardTrigger>TypeScript</HoverCardTrigger>
                <HoverCardContent>
                  TypeScript is a programming language used for creating web
                  applications.
                </HoverCardContent>
              </HoverCard>
            </li>
            <li>
              <HoverCard>
                <HoverCardTrigger>Swift</HoverCardTrigger>
                <HoverCardContent>
                  Swift is a programming language for Apple-only app
                  development.
                </HoverCardContent>
              </HoverCard>
            </li>
            <li>
              <HoverCard>
                <HoverCardTrigger>Golang</HoverCardTrigger>
                <HoverCardContent>
                  Golang is a programming language for building efficient and
                  scalable applications.
                </HoverCardContent>
              </HoverCard>
            </li>
          </ul>
          <br />
          <Divider />
          Hobbies: <b>Coding, Cinematography, Music</b>
        </div>
      </Card>
    </div>
  );
}
