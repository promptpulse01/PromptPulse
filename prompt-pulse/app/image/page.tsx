"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'

type Props = {}

const Page = (props: Props) => {

  const [formData, setFormData] = useState({
    prompt: '',
    amount: 0,
    resolution: ''
  });
  const [photos, setPhotos] = useState<string[]>([]);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setPhotos([]);
      const res = await axios.post("/api/image", {
        ...formData,
      });
      if (res.data.data) {
        console.log(res)

        const urls = res.data.data.map((image: { url: string }) => image.url);

        setPhotos(urls);
        console.log("hii we are getting data")
        console.log(res.data)
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div className="flex flex-col justify-between items-center w-full min-h-screen bg-gray-900 text-gray-200 px-10 pb-10">
        <h1 className=" text-4xl text-green-500 font-bold pt-5">
          Image Genarater
        </h1>
        <form onSubmit={handleSubmit}>
          <div className=" w-full flex justify-between py-10">
            <div className=" w-[100%]">
              <input
                type="text"
                id="prompt"
                name="prompt"
                value={formData.prompt}
                onChange={handleChange}
                className=" w-full h-7 border  text-gray-900 text-sm rounded-lg block py-5 px-5 bg-slate-700 border-gray-500 outline-none placeholder-gray-400 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className=" flex gap-4">
              <div>
                <select
                  id="amount"
                  name="amount"
                  onChange={handleChange}
                  className="block w-full p-2  text-sm  border  rounded-lg bg-slate-700 text-slate-400 border-gray-500 outline-none placeholder-gray-400 focus:ring-green-500 focus:border-green-500"
                >
                  <option defaultValue={0}>No of amount</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
              </div>
              <div>
                <select
                  id="resolution"
                  name="resolution"
                  onChange={handleChange}
                  className="block w-full p-2  text-sm  border  rounded-lg bg-slate-700 text-slate-400 border-gray-500 outline-none placeholder-gray-400 focus:ring-green-500 focus:border-green-500"
                >
                  <option defaultValue={0}>Choose a Resolution</option>
                  <option value="256x256">256 x 256</option>
                  <option value="512x512">512 x 512</option>
                  <option value="1024x1024">1024 x 1024</option>
                </select>
              </div>
              <button className=" bg-green-500 font-bold text-xl  rounded-md py-2 px-2" type='submit'>
                Search
              </button>
            </div>
          </div>
        </form>
        <div className=" flex flex-col justify-center items-center py-5">
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
                    <>
                      <img
                        key={i}
                        src={image}
                        className="  rounded-md h-full w-full hover:scale-105 duration-1000 shadow-sm shadow-green-500"
                      />
                      <a href={image} key={i} download>Download </a>
                    </>
                  ))}
                </span>
              ) : (
                <span className=" flex w-full overflow-hidden  items-center gap-10 ">
                  {photos.map((image, i) => (
                    <>
                      <img
                        key={i}
                        src={image}
                        className=" rounded-md h-96 w-80  hover:scale-110 duration-1000 "
                      />
                      <button onClick={() => window.open(image)}>Download</button>
                    </>
                  ))}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page