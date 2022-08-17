import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/Footer/Metadraw_logo.png";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Staking", href: "/staking", current: false },
  { name: "Roadmap", href: "/roadmap", current: false },
  { name: "NFTs", href: "nfts", current: false },
];

const drodpwnLink = [
  { name: "Copy address ", link: "/" },
  { name: "Connect a different wallet ", link: "/" },
  { name: "Disconnect ", link: "/" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <Disclosure as="nav" className="bg-navBg bg-full">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 custom1570:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-24">
              <div className="absolute inset-y-0 left-0 flex items-center custom1570:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-[#e87521] hover:text-[#e87521] bg-[#1f1f1f] hover:bg-[#1f1f1f] focus:outline-none  ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaTimes className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <BiMenu
                      className="block h-6 w-6 text-[#e87521]"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center gap-40">
                <div className="hidden custom1570:block custom1570:ml-6">
                  <div className="flex space-x-12">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          "text-[22px] text-white font-primary"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center relative">
                  <img className=" h-8 w-auto" src={Logo} alt="logo" />
                  <div className="hidden custom1570:block absolute bg-navLogoBg top-[1rem] w-[15rem] h-[8rem] bg-full bg-no-repeat left-[4.5rem] translate-x-[-50%] translate-y-[-50%]"></div>
                </div>

                <div className="hidden  absolute inset-y-0 right-0 custom1570:flex items-center pr-2 custom1570:static custom1570:inset-auto custom1570:ml-6 custom1570:pr-0">
                  <Link to="/create-raffle">
                    <div className="bg-buttonTrBg bg-no-repeat bg-full w-[14rem] h-[4rem] relative">
                      <p className=" font-primary text-[28px] leading-[34px] text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
                        Create Raffle
                      </p>
                    </div>
                  </Link>
                  {/* Profile dropdown */}

                  <div
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="bg-buttonBg bg-no-repeat bg-full w-[14rem] h-[4rem] relative ml-4 cursor-pointer"
                  >
                    <p className=" font-primary text-[28px] leading-[34px] text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
                      GLoU..6mir
                    </p>

                    {/* dropdown item */}
                    <div
                      className={`${
                        dropdownOpen ? "block" : "hidden"
                      } absolute top-32 left-[50%] w-full h-full translate-x-[-50%] translate-y-[-50%]`}
                    >
                      <div className=" max-w-[18rem] bg-[#181818] p-[.8rem] flex flex-col items-center gap-4 rounded-lg border border-[#EF9C55]">
                        {drodpwnLink.map((data, index) => (
                          <Link key={index} to={data.link}>
                            <p className="text-xl text-white font-primary border border-[#2d2d2d] px-3 py-[2px] bg-[#151515]">
                              {data.name}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="custom1570:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="Link"
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-[#1f1f1f] text-white"
                      : "text-gray-300 hover:bg-[#1f1f1f] hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>

            {/* button */}
            <div className="flex   inset-y-0 right-0 custom1570:hidden items-center pr-2 justify-center pb-4">
              <Link to="/create-raffle">
                <div className="bg-buttonTrBg bg-no-repeat bg-full w-[10rem] h-[3rem] relative">
                  <p className=" font-primary text-[20px] leading-[30px] text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
                    Create Raffle
                  </p>
                </div>
              </Link>

              {/* Profile dropdown */}

              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-buttonBg bg-no-repeat bg-full w-[10rem] h-[3rem] relative ml-4 cursor-pointer"
              >
                <p className=" font-primary text-[20px] leading-[30px] text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
                  GLoU..6mir
                </p>
                {/* dropdown item */}
                <div
                  className={`${
                    dropdownOpen ? "block" : "hidden"
                  } absolute top-20 left-[50%] w-full h-full translate-x-[-50%] translate-y-[-50%]`}
                >
                  <div className=" max-w-[18rem] bg-[#181818] p-[.8rem] flex flex-col items-center gap-4 rounded-lg border border-[#EF9C55]">
                    {drodpwnLink.map((data, index) => (
                      <Link key={index} to={data.link}>
                        <p className="text-xl text-white font-primary border border-[#2d2d2d] px-3 py-[2px] bg-[#151515]">
                          {data.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
