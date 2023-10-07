import SocialButton from "./SocialButton";

export const Footer = () => {
  return (
    <div
      style={{ background: "#032541" }}
      className="px-4 pt-16 mx-auto max-w-[1450px] mx-auto text-white md:px-24 lg:px-8"
    >
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-white"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
              Triangle Movies
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-white">
              Contact or Report Anything Here Email : blackshadow98723@gmail.com
            </p>
            <p className="mt-4 text-sm text-white">
              Triangle Movies does not rip or host any files on it’s servers.
              All files or contents hosted on third party websites. Triangle
              Movies doesn't accept the responsibility for contents hosted on
              third party websites. Also Triangle Movies doesn't RIP/Pirate any
              file. We just collect links from other websites. Nothing Else.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-white">Phone:</p>
            <a
              href="tel:8801865233836"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              880-1865233836
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Email:</p>
            <a
              href="mailto:blackshadow98723@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              blackshadow98723@gmail.com
            </a>
          </div>
        </div>
        <div>
          <span className="text-base   text-white">Social</span>

          <SocialButton />
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-white">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};
