import Image from "next/image";
import Link from "next/link";
import "./css/styles.css";

export default function Home() {


  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-6 lg:py-10">
            <Link href="/" className="flex items-center">
              <p className="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block">
                Dennis
              </p>
            </Link>
            <div className="flex items-center lg:hidden">
              <i
                className={`bx mr-8 cursor-pointer text-3xl text-primary dark:text-white `}
              />

            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">
                {["/resume", "/uses", "/contact"].map((path, index) => (
                  <li key={index} className="group relative mr-6 mb-1">
                    <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow" />
                    <Link
                      href={path}
                      className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                    >
                      {path.replace("/", "") || "Intro"}
                    </Link>
                  </li>
                ))}
                <li>
                  <i
                    className={`bx cursor-pointer text-3xl text-primary dark:text-white `}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full">
            <div className="justify-center container flex p-6 mx-auto border-b border-grey-lighter py-16 lg:py-20"  >
              <div className="">
                <Image
                  src="/dennishanong.jpg"
                  alt="author"
                  width={300}
                  height={300}
                  className="max-w-full h-auto"
                />
                <h1 className="pt-3 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
                  Hi, I'm Dennis.
                </h1>
                <p className="pt-3 font-body text-xl font-light text-primary dark:text-white">
                  A software engineer that loves to build stuff with his
                  keypress.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-wrap container mx-auto border-b border-grey-lighter">
          {/* First Row */}
          <div className="flex-1 p-10">
            <div className="w-10/12">
              <h2 className="text-2xl font-bold text-left">
                  American Express - Software Engineer II 
              </h2>
              <span>
              2019 - Current
              </span>
              <p className="p-2 text-left">
              ◦ Fraud Algorithm Context Team: Made critical decisions to
              ensure project and application success and met business needs.
              Designed and implemented a distributed graph solution that
              processed millions of nodes and edges in real-time, resulting in
              a 30 percent reduction in resource usage using Java and Vert.x
              data structures and leverage Couchbase <br/><br/>
              ◦ Privacy Compliance: Implement robust compliance solutions,
              specifically targeting cookie consent and privacy regulations in
              EU nations and California. Influenced the user experience and
              privacy controls of over 56 million users, successfully managing
              and processing opt-out requests for millions of records on a
              monthly basis, thus upholding our commitment to user data privacy
              and choice.<br/><br/>
              ◦ Enhance: Integrate enrichment data for customers from the
              back-end standpoint for fraudulent teams. Allow the fraud team
              to have more context on customers spending, and increase the
              fraudulent catch rate by 30 percent.<br/><br/>
              Unit-Test: Writing automated tests in Java Junit and Node
              Playwright. Reduced Regression Testing by 50 percent faster by
              running using multiple-threads and async methods. <br/><br/>
              ◦ Vert.x and Spring-boot: Refactor Legacy application that used
              Spring Boot, which had become complex, hard to maintain, and
              difficult to scale. Refactored the code-base and migrated the
              application to Vert.x, which provided a more lightweight,
              reactive, and event-driven architecture.<br/><br/>
              ◦ Technologies Used: Java , Spring-boot, Vert.x, Couchbase, AWS,
              GitHub , React, Jenkins, Openshift, Kubernetes, Dockers, Liquid
              Jekyll, Node.js, Github-Actions
              </p>
            </div>
          </div>

          <div className="flex-2 w-2/12 items-start">
            <div className="p-10 items-end">
            <a target="_blank" href="https://www.americanexpress.com/">
              <Image src="/amex.png" alt="resume" width={600} height={300} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap container mx-auto border-b border-grey-lighter">
          {/* First Row */}
          <div className="flex-1 p-10">
            <div className="w-10/12">

              <h2 className="text-2xl font-bold text-left">
                BioforceTech - Embedded Systems Engineer Intern

              </h2>
              <span>
              Summer,Winter - 2020,2021
              </span>

              <p className="p-2 text-left">
              ◦ Data Read/Write IoT: Develop algorithms to increase read/write speed of IoT Hardware by 30 percent by optimizing Firmware in C++ and Linux Operating System
              <br/><br/>
              ◦ IoT Networking : Implement a reverse tunnel feature synchronize that only open it to wide area network through the cloud once activated. Allow IoT to exist only in Local Area Network without activating it.
              <br/><br/>
              ◦ Cloud: Developed a Cloud platform that allows user to integrate multiple IoT into it. Hosting in AWS. Set up load-balancing, Laravel Object Oriented and RESTFUL API
              <br/><br/>
              Technologies Used: PHP, Laravel, Javascript, AWS, GitHub , React, C++, C , Linux , Bash
               <br/><br/>
              </p>
            </div>
          </div>

          <div className="flex-2 w-2/12 items-start">
            <div className="p-10 items-end">
              <a target="_blank" href="https://www.bioforcetech.com/">
              <Image src="/bft.png" alt="resume" width={600} height={300} />
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="p-4 bg-blue-500 text-white"></footer>
    </div>
  );
}
