import Link from "next/link";

const WebsiteFooter = () => {
  return (
    <footer className="mt-auto bg-surface-container-lowest text-on-surface font-josefin-sans border-t-2 border-outline min-h-50">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl text-center">
          <Link
            href="/"
            className="flex justify-center items-center text-2xl font-semibold text-primary-higher"
          >
            LOGO
          </Link>
          <p className="my-6 max-w-4xl mx-auto px-8">
          Designing with empathy, inclusivity, and purpose—creating solutions
          that bridge challenges and transform experiences for a better, more equitable world.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-primary-high">
            <li>
              <a href="/work" className="mr-4 hover:underline md:mr-6 ">
                Work
              </a>
            </li>
            <li>
              <a href="/about" className="mr-4 hover:underline md:mr-6">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="mr-4 hover:underline md:mr-6 ">
                Contact
              </a>
            </li>
          </ul>
          <span className="text-sm sm:text-center">
              © 2023&ndash;2025{" "}
              <a href="/about" className="hover:underline">
                Maha Aziz
              </a>
              . All Rights Reserved.
            </span>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
