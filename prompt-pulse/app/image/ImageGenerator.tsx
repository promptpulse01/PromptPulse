"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

type Props = {
  freetrial: any;
  ispro: any;
};

const ImageGenerator = ({ freetrial, ispro }: Props) => {
  const [formData, setFormData] = useState({
    prompt: "",
    amount: 0,
    resolution: "",
  });
  const [photos, setPhotos] = useState<string[]>([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setPhotos([]);
      const res = await axios.post("/api/image", {
        ...formData,
      });
      if (res.data.data) {
        console.log(res);

        const urls = res.data.data.map((image: { url: string }) => image.url);

        setPhotos(urls);
        console.log("hii we are getting data");
        console.log(res.data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const OnUpgrade = async () => {
    try {
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const onSubscribe = () => {
    setIsModelOpen(true);
  };

  return (
    <>
      <div
        className={` relative z-0 flex flex-col justify-start items-center w-full min-h-screen bg-gray-900 text-gray-200 px-10 pb-10 `}
        onClick={() => {
          isModelOpen && setIsModelOpen(false);
        }}
      >
        {isModelOpen ? (
          <div className=" fixed z-1 w-full h-full bg-slate-900/40 backdrop-blur-sm"></div>
        ) : null}
        {isModelOpen ? (
          <div
            className="fixed z-1  top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%] bg-slate-950 h-[70%] w-[26%]  rounded-2xl "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="  flex flex-col w-full h-full gap-5">
              <div className=" w-full flex justify-between items-center py-4 px-4  border-b-2 border-[#64ff4c]">
                <h1 className=" text-2xl font-bold text-[#64ff4c]">
                  Upgrade to Premium!
                </h1>
                <button
                  className="  text-2xl  "
                  onClick={() => {
                    setIsModelOpen(false);
                  }}
                >
                  x
                </button>
              </div>
              <div className="flex flex-col px-4">
                <h2 className="mb-4 text-xl font-medium text-[#64ff4c] ">
                  standard Plan
                </h2>
                <div className="mb-8 flex items-baseline text-white">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    20
                  </span>
                  <span className="ms-1 text-xl font-normal text-gray-400">
                    /month
                  </span>
                </div>
                <h2 className="mb-4 text-xl font-semibold tracking-wider">
                  With PromptPulse Premium 👑,
                </h2>
                <ul className=" space-y-4 text-left mb-4">
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg
                      className="flex-shrink-0 w-3.5 h-3.5 text-[#64ff4c] "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                    <span>Unlock a universe 💫 of possibilities</span>
                  </li>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg
                      className="flex-shrink-0 w-3.5 h-3.5 text-[#64ff4c] "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                    <span>Unlimited Image generation</span>
                  </li>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg
                      className="flex-shrink-0 w-3.5 h-3.5 text-[#64ff4c] "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                    <span>Higher resolution and quality</span>
                  </li>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg
                      className="flex-shrink-0 w-3.5 h-3.5 text-[#64ff4c] "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                    <span>Commercial use rights</span>
                  </li>
                  <li>Upgrade to Premium today!</li>
                </ul>
                <button
                  className="  flex  justify-center items-center py-2 px-8 mt-auto text-gray-950 font-bold text-xl bg-[#64ff4c] rounded-xl"
                  onClick={() => OnUpgrade()}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        ) : null}

        <h1 className=" text-4xl text-[#64ff4c] font-bold pt-5">
          Image Generator
        </h1>
        <form className="flex w-full" onSubmit={handleSubmit}>
          <div className=" w-full flex justify-between py-10 gap-4">
            <div className=" w-[100%]">
              <input
                type="text"
                id="prompt"
                name="prompt"
                value={formData.prompt}
                onChange={handleChange}
                className=" w-full h-7 border  text-gray-200 text-sm rounded-lg block py-5 px-5 bg-slate-700 border-gray-500 outline-none placeholder-gray-400 focus:ring-[#64ff4c] focus:border-[#64ff4c]"
              />
            </div>
            <div className=" flex gap-4">
              <div>
                <select
                  id="amount"
                  name="amount"
                  onChange={handleChange}
                  className="block w-full p-[10px]  text-sm  border  rounded-lg bg-slate-700 text-slate-400 border-gray-500 outline-none placeholder-gray-400 focus:ring-[#64ff4c] focus:border-[#64ff4c]"
                >
                  <option defaultValue={0}>No of amount</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
              <div>
                <select
                  id="resolution"
                  name="resolution"
                  onChange={handleChange}
                  className="block w-full p-[10px]  text-sm  border  rounded-lg bg-slate-700 text-slate-400 border-gray-500 outline-none placeholder-gray-400 focus:ring-[#64ff4c] focus:border-[#64ff4c]"
                >
                  <option defaultValue={0}>Choose a Resolution</option>
                  <option value="256x256">256 x 256</option>
                  <option value="512x512">512 x 512</option>
                  <option value="1024x1024">1024 x 1024</option>
                </select>
              </div>
              {freetrial || ispro ? (
                <>
                  <button
                    className=" bg-[#64ff4c] font-bold text-xl text-slate-700 rounded-md py-1 px-2"
                    type="submit"
                  >
                    Search
                  </button>
                </>
              ) : (
                <>
                  <button
                    className=" bg-[#64ff4c] font-bold text-xl text-slate-700 rounded-md py-1 px-2"
                    type="submit"
                    onClick={() => onSubscribe()}
                  >
                    Subscribe
                  </button>
                </>
              )}
              {/* FOR CHECK SUBSCRIPTION FUNCTIONALITY */}
              {/* <>
                <button
                  className=" bg-[#64ff4c] font-bold text-xl text-slate-700 rounded-md py-1 px-2"
                  type="submit"
                  onClick={() => onSubscribe()}
                >
                  Subscribe
                </button>
              </> */}
            </div>
          </div>
        </form>
        <div className=" flex flex-col justify-center items-center py-8">
          {/* <div>
            {selected ? (
              <div className=" flex h-96 w-80 mb-10">
                <img src={selected} className=" w-full h-full block " />
              </div>
            ) : null}
          </div> */}
          {!freetrial && !ispro ? (
            <>
              <h1 className=" text-3xl font-fold tracking-wider mt-16">
                Your free trial has ended. To continue using this feature,
                please subscribe
                <span className="  ">to a paid plan.</span>
              </h1>
            </>
          ) : null}
          <div className="overflow-x-hidden py-4 ">
            <div className="">
              {/* animate-marquee whitespace-nowrap */}
              {photos.length >= 4 ? (
                <span className=" grid grid-cols-4 gap-10 overflow-hidden ">
                  {photos.map((image, i) => (
                    <div className="flex gap-4 flex-col" key={i}>
                      <img
                        src={image}
                        className="  rounded-md h-full w-full hover:scale-105 duration-1000 shadow-sm shadow-[#64ff4c]"
                      />
                      <button className=" w-full py-2 rounded-md bg-[#64ff4c] text-slate-700 font-bold ">
                        <a href={image} key={i} download>
                          Download ⬇️
                        </a>
                      </button>
                    </div>
                  ))}
                </span>
              ) : (
                <span className=" flex w-full overflow-hidden  items-center gap-10 ">
                  {photos.map((image, i) => (
                    <div className="flex gap-4 flex-col" key={i}>
                      <img
                        key={i}
                        src={image}
                        className=" rounded-md h-96 w-96  hover:scale-110 duration-1000 "
                      />
                      <button className=" w-full py-2 rounded-md bg-[#64ff4c] text-slate-700 font-bold ">
                        <a href={image} key={i} download>
                          Download ⬇️
                        </a>
                      </button>
                    </div>
                  ))}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGenerator;
