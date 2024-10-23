import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosSpeedometer } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { BsHandIndexThumb } from "react-icons/bs";
import { CiDroplet } from "react-icons/ci";
import { MdOutlineSubject } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdBorderColor } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { PiNewspaperClippingBold } from "react-icons/pi";
import { RiArrowGoBackFill } from "react-icons/ri";

function Dashbord() {
  const Details = [
    {
      icons: <BsHandIndexThumb />,
      data: "Size",
      list1: "Size Details",
      list2: "View Size",
    },
    {
      icons: <CiDroplet />,
      data: "Color",
      list1: "Size Details",
      list2: "View Size",
    },
    {
      icons: <MdOutlineSubject />,
      data: "Parent Category",
      list1: "Size Details",
      list2: "View Size",
    },
    {
      icons: <IoCartOutline />,
      data: "Product Category",
      list1: "Size Details",
      list2: "View Size",
    },
    {
      icons: <HiOutlineShoppingBag />,
      data: "Product",
      list1: "Size Details",
      list2: "View Size",
    },
    {
      icons: <MdBorderColor />,
      data: "Order",
      list1: "Size Details",
      list2: "View Size",
    },
    {
      icons: <MdOutlineHistory />,
      data: "Slider",
      list1: "Size Details",
      list2: "View Size",
    },
    {
      icons: <PiNewspaperClippingBold />,
      data: "Term & Condiion",
    },
  ];
  return (
    <>
      <div className=" m-0 p-0">
        <div className="flex ">
          <div className="w-[20%] bg-[rgb(33,38,49)] 0 p-3 text-[white] ">
            <h1 className="text-[20px] text-center my-3">Frank and Oak</h1>
            <hr />
            <ul>
              <li>
                <button className="my-2 w-[100%] p-2 hover:border flex  text-[20px] items-center ">
                  <span>
                    <IoIosSpeedometer className="mx-5 text-[#ffffff6a]" />
                  </span>{" "}
                  Dashbord
                </button>
              </li>
              <li>
                <button className="my-2 w-[100%] p-2 hover:border flex  text-[20px] items-center ">
                  <span>
                    <CiSettings className="mx-5 text-[#ffffff6a]" />
                  </span>{" "}
                  Profile
                </button>
              </li>
            </ul>
            <h1 className="text-center text-[18px] font-bold-700">
              Ecommerce Components
            </h1>
            <ul>
              {/* {Details.map((v, i) => {
                return (
                  <li>
                    <div id="accordion-arrow-icon" data-accordion="open">
                      <h2 id="accordion-arrow-icon-heading-2">
                        <button
                          type="button"
                          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                          data-accordion-target="#accordion-arrow-icon-body-2"
                          aria-expanded="false"
                          aria-controls="accordion-arrow-icon-body-2"
                        >
                          <span>Accordion with another icon</span>
                          <svg
                            class="w-4 h-4 shrink-0 -me-0.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </button>
                      </h2>
                      <div
                        id="accordion-arrow-icon-body-2"
                        class="hidden"
                        aria-labelledby="accordion-arrow-icon-heading-2"
                      >
                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                          <button className="border  p-2">btn1</button> <br />
                          <button>btn2</button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })} */}
          
          <li>
                <button className="my-2 w-[100%] p-2 hover:border flex  text-[20px] items-center ">
                  <span>
                    <CiSettings className="mx-5 text-[#ffffff6a]" />
                  </span>{" "}
                  Profile
                </button>
                  <div className={` 'ans p-2 ${show ? "block" : "hidden"} `}>
        Bakery food near meBeverages food near meBiryani food near meBurger food
        near meChinese food near meCoffee food near meContinental food near
        meDesserts food near meItalian food near meMithai food near meMomos food
        near meMughlai food near meNorth Indian food near mePasta food near
        mePizza food near meRolls food near meSandwich food near meShake food
        near meSouth Indian food near meStreet food near me
      </div>
              </li>
            </ul>
          </div>
          <div className="w-[80%]  ">
            <div className="flex justify-between items-center  p-3 border">
              <nav className="flex items-center">
                <button>
                  <IoReorderThreeOutline className="text-[40px] " />
                </button>
                <span className="mx-2">Dashbord</span>
              </nav>
              <div>profile</div>
            </div>
            <div>
              <div className="border p-3 ">/ Dashbord</div>
              <div className="Dashbord h-[50px] bg-[rgb(243,244,247)]"></div>
            </div>
          </div>
        </div>
        <footer className="flex border items-center">
          <div className="w-[20%] bg-[rgb(33,38,49)]  text-[white] p-5  ">
            <RiArrowGoBackFill />
          </div>
          <div className="w-[80%] text-center ">
            <p>Developed By @Abhishek Mishra</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Dashbord;
