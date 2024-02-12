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
        className={` relative z-0 flex flex-col justify-start items-center w-full min-h-screen bg-gray-900 text-gray-200 px-10 pb-10 ${
          isModelOpen ? "" : ""
        }`}
        onClick={() => {
          isModelOpen && setIsModelOpen(false);
        }}
      >
        {isModelOpen ? (
          <div
            className="fixed z-1  top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%] bg-slate-950/90 h-[70%] w-[30%]  rounded-md border border-solid border-[#64ff4c] "
            onClick={(e) => e.stopPropagation()}
          >
            <div className=" relative flex w-full h-full py-2  pb-0 px-4">
              <button
                className=" fixed -top-4  -right-4 bg-slate-950 px-2  rounded-full font-semibold text-4xl text-[#64ff4c] border-solid border-2 border-[#64ff4c]"
                onClick={() => {
                  setIsModelOpen(false);
                }}
              >
                x
              </button>
              <div className="py-8  flex flex-col justify-between  gap-10">
                <div className=" flex flex-col gap-8">
                  <h1 className=" text-4xl font-bold space-y-2">
                    Your limit for free{" "}
                    <span className=" text-[#64ff4c]">image genarete</span> is
                    <span className=" text-red-500"> full ....</span>
                  </h1>
                  <h2 className=" text-2xl ">
                    For more image genarate you can take a subscription plan by
                    clicking on below ⬇️ button <button></button>
                  </h2>
                </div>
                <button
                  className="  flex py-2 px-8  text-slate-700 font-bold text-xl bg-[#64ff4c] rounded-md"
                  onClick={() => OnUpgrade()}
                >
                  Subscribe For More Image Genarate
                </button>
              </div>
            </div>
          </div>
        ) : null}

        <h1 className=" text-4xl text-[#64ff4c] font-bold pt-5">
          Image Genarater
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
