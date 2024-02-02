"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'

type Props = {}

const Page = (props: Props) => {

  const [formData, setFormData] = useState({
    prompt: ''
  });
  const [photos, setPhotos] = useState<string[]>([]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setPhotos([]);
      const res = await axios.post("/api/image", {
        ...formData,
        amount: 3,
        resolution: "512x512"
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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="prompt"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
        </form>
        {photos.map((src) => (
          <Image
            alt="Generated"
            src={src}
            width={512}
            height={512}
          />

        ))}
      </div>
    </>
  )
}

export default Page