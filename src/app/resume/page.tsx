

export default function UniversalPage() {
  let educations = [{
    name: "BAC",
    start_year: 2000,
    end_year: 2004,
    subject: "Web Programming",
    major: "-",
    minor: "-",
    gpa: 4.0,
    skills: ["Research", "Analysis", "Critical Thinking", "Communication"]
  }];

  let experiences = [{
    name: "Fullstack",
    start: "Jun 2018",
    end: "Present",
    type: "Freelance",
    items: [
      {
        description: "lorem ipsum "
      },
      {
        description: "lorem ipsum "
      },
      {
        description: "lorem ipsum "
      }
    ]
  }]

  let skills = ["HTML5", "CSS3", "Javascript", "Typescript", "React", "Python", "PostgreSQL", "Linux"];

  return (
    <>
     <section
        className="p-3 my-auto mx-auto max-w-3xl bg-gray-100 rounded-2xl border-4 border-gray-700 sm:p-9 md:p-16 lg:mt-6 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o xsm:p-8 print:bg-white md:max-w-letter md:h-letter lg:h-letter"
      >
        <header
          className="inline-flex justify-between items-baseline mb-2 w-full align-top border-b-4 border-gray-300"
        >
          <section className="block">
            <h1 className="mb-0 text-5xl font-bold text-gray-700">
              Muhamad Anjar Pangestu
            </h1>
            <h2
              className="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish"
            >
              Full Stack Web Development
            </h2>

            <h3
              className="m-0 mt-2 ml-2 text-xl font-semibold text-gray-500 leading-snugish"
            >
              Bogor, Indonesia
            </h3>
          </section>
          <section
            className="justify-between px-3 mt-0 mb-5 text-4xl font-black leading-none text-white bg-gray-700 initials-container print:bg-black"
            style={{paddingBottom: '1.5rem', paddingTop: '1.5rem'}}
          >
            <section className="text-center initial">M</section>
            <section className="text-center initial">A</section>
            <section className="text-center initial">P</section>
          </section>
        </header>

        <section
          className="col-gap-8 print:col-count-2 print:h-letter-col-full col-fill-balance md:col-count-2 md:h-letter-col-full"
        >
          <section className="flex-col">
            <section className="pb-2 mt-4 mb-0 first:mt-0">
              <section className="break-inside-avoid">
                <section className="pb-4 mb-2 border-b-4 border-gray-300 break-inside-avoid">
                  <ul className="pr-7 list-inside">
                  <li
                    className="mt-1 leading-normal text-black text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md print:"
                  >
                    <a href="https://muhamadanjar.id" className="group">
                      <span
                        className="mr-2 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Portfolio:
                      </span>
                      muhamadanjar.id
                      <span
                        className="inline-block font-normal text-black text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black print:"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md"
                  >
                    <a href="https://github.com/muhamadanjar" className="group">
                      <span
                        className="mr-5 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Github:
                      </span>
                      muhamadanjar
                      <span
                        className="inline-block font-normal text-black text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black print:"
                      >
                        ↗
                      </span>
                    </a>
                  </li>

                  <li
                    className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md"
                  >
                    <a href="mailto:arvanria@gmail.com" className="group">
                      <span
                        className="mr-8 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Email:
                      </span>
                      arvanria@gmail.com
                      <span
                        className="inline-block font-normal text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md"
                  >
                    <a href="tel:+6287870427227">
                      <span
                        className="mr-5 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Phone:
                      </span>
                      +62 87870427227
                    </a>
                  </li>
                </ul>

                </section>
              </section>
            </section>

            <section className="summary pb-2 pb-4 mt-0 border-b-4 border-gray-300 first:mt-0">
               <section className="break-inside-avoid">
                <h2
                  className="mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal"
                >
                  SUMMARY
                </h2>

                <section className="mb-2 break-inside-avoid">
                  <p className="mt-2 leading-normal text-gray-700 text-md">
                Experienced full-stack web developer with a strong track record of independently addressing complex business requirements and overcoming challenges to deliver polished and user-friendly web solutions.
                  </p>
                </section>
              </section>
            </section>

            <section className="pb-0 mt-2 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
               <section className="break-inside-avoid">
                <h2
                    className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
                >
                    EDUCATION
                </h2>

                {educations.map((item, idx) => 
                  (
                    <div key={idx}>
                    <section key={idx} className="mt-2 border-b-2 break-inside-avoid">
                      <header>
                          <h3
                              className="text-lg font-semibold text-gray-700 leading-snugish"
                          >
                              {item.name}
                          </h3>
                          <p className="leading-normal text-gray-500 text-md">
                              {item.start_year} &ndash; {item.end_year} | {item.subject}
                          </p>
                      </header>
                      <ul className="mt-2 list-disc list-inside text-gray-800 text-md">
                        <li>
                            <span
                                className="font-semibold text-md"
                            >
                                Major:
                            </span>
                            {item.major}
                        </li>
                        <li>
                            <span
                                className="font-semibold text-md"
                            >
                                Minor:
                            </span>
                            {item.minor}
                        </li>
                        <li>
                            <span
                                className="font-semibold text-md"
                            >
                                GPA:
                            </span>
                            {item.gpa}
                        </li>
                        <li>
                            <span
                                className="font-semibold text-md"
                            >
                                Skills:
                            </span>
                            {item.skills.join(", ")}
                        </li>
                    </ul>
                    </section>
                  
                  </div>
                  )
                )}


               </section>
            </section>

            <section className="pb-6 mt-0 mb-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
              <section className="break-inside-avoid">
                <h2
                  className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
                >
                  SKILLS
                </h2>
                <section className="mb-0 break-inside-avoid">
                  <section className="mt-1 last:pb-1">
                    <ul className="flex flex-wrap -mb-1 font-bold leading-relaxed text-md -mr-1.6">
                      {skills.map((item, idx) => (
                        <li  key={idx} className="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
                          {item}
                        </li>
                        )
                      )}
                      
                    </ul>
                  </section>
                </section>
            </section>

            </section>

            <section className="pb-2 pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
              <section className="break-inside-avoid">
                <h2 className="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal">
                    EXPERIENCE
                </h2>

                {experiences.map((item, idx)=> (
                  <section key={idx} className="mb-2 border-b-2 border-gray-300 break-inside-avoid">
                  <header>
                      <h3 className="font-semibold text-gray-800 text-md leading-snugish">
                          {item.name}
                      </h3>
                      <p className="text-sm leading-normal text-gray-500">
                          {item.start} &ndash; {item.end} | {item.type}
                      </p>
                  </header>
                  <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
                    <li>
                        <span className="text-gray-500 transform -translate-y-px select-none">
                            &rsaquo;
                        </span>
                        Created high-quality, customized web applications from scratch, employing a diverse set of programming languages, including HTML, CSS, JavaScript, PHP, and Python, to fulfill unique client requirements.
                    </li>
                    <li>
                        <span className="text-gray-500 transform -translate-y-px select-none">
                            &rsaquo;
                        </span>
                        Leveraged a range of bleeding edge front-end frameworks like React.js, Nullstack and Vue.js, as well as back-end frameworks such as Node.js and Express, to deliver robust and scalable web solutions.
                    </li>
                    <li>
                        <span className="text-gray-500 transform -translate-y-px select-none">
                            &rsaquo;
                        </span>
                        Designed and implemented databases using SQL and NoSQL technologies like MySQL, PostgreSQL, MongoDB, and Firebase, optimizing data storage and management.
                    </li>
                  </ul>
                </section>
                ))}
                

              </section>
            </section>
          </section>

        </section>
      </section>
    </>
  )
}
