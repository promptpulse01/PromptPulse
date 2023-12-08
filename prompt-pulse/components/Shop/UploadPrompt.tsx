"use client"
import { styles } from '@/utils/styles'
import { Button, Input, Select, SelectItem, Selection, Textarea } from '@nextui-org/react'
import React, { ChangeEvent, useState } from 'react'

interface Props { }

type PromptData = {
  name: string;
  shortDescription: string;
  description: string;
  images: string[];
  attachments: string[];
  estimatedPrice: string;
  price: string;
  tags: string;
};

const categorieItem = [
  {
    title: "Chatgpt",
  },
  {
    title: "Midjourney",
  },
  {
    title: "Bard",
  },
  {
    title: "Dalle",
  },
];

const UploadPrompt = (props: Props) => {

  const [promptData, setPromptData] = useState<PromptData>({
    name: "",
    shortDescription: "",
    description: "",
    images: [],
    attachments: [],
    estimatedPrice: "",
    price: "",
    tags: "",
  })

  const [category, setCategory] = useState<Selection>(new Set([]));

  const handleImageFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
        const files = Array.from(e.target.files);

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setPromptData((prevData) => ({
                        ...prevData,
                        images: [...prevData.images, reader.result as string],
                    }));
                }
            };
            reader.readAsDataURL(file);
        });
    }
};

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(new Set([e.target.value]));
  };

  return (
    <div>
      <h1 className={`${styles.heading} text-center py-5`}>
        Upload Your Prompt
      </h1>
      <br />
      <form className="w-[90%] m-auto">
        <Input
          type="text"
          label="Title"
          variant="bordered"
          value={promptData.name}
          onChange={(e) =>
            setPromptData({ ...promptData, name: e.target.value })
          }
          required
          placeholder="Enter your prompt title"
        />
        <br />
        <Input
          type="text"
          label="Short Description"
          value={promptData.shortDescription}
          onChange={(e) =>
            setPromptData({ ...promptData, shortDescription: e.target.value })
          }
          variant="bordered"
          required
          placeholder="Enter a short Description for your prompt *"
        />
        <br />
        <Textarea
          variant={"bordered"}
          label="Description"
          required
          size="lg"
          value={promptData.description}
          onChange={(e) =>
            setPromptData({ ...promptData, description: e.target.value })
          }
          placeholder="Write one detailed description for your prompt *"
        />
        <br />
        <div className="md:flex md:w-full">
          <Input
            type="number"
            label="Propmt estimated price"
            variant="bordered"
            placeholder="US$40"
            required
            className="mb-6 md:mb-0"
            value={promptData.estimatedPrice}
            onChange={(e) =>
              setPromptData((prevData) => ({
                ...prevData,
                estimatedPrice: e.target.value,
              }))
            }
          />
          <Input
            type="number"
            label="Propmt price *"
            variant="bordered"
            placeholder="US$29.99"
            className="md:ml-10"
            onChange={(e) =>
              setPromptData((prevData) => ({
                ...prevData,
                price: e.target.value,
              }))
            }
            required
          />
        </div>
        <br />
        <div className="md:flex md:w-full">
          <Select
            label="Choose one category"
            variant="bordered"
            placeholder="Select one category"
            selectedKeys={category}
            className="max-w-full mb-5 md:mb-[0]"
            onChange={handleSelectionChange}
          >

            {categorieItem.map((item) => (
              <SelectItem
                key={item.title}
                className="text-black"
              >
                {item.title}
              </SelectItem>
            ))}

          </Select>
          <Input
            type="text"
            label="Propmt tags *"
            required
            variant="bordered"
            placeholder="AI,Photo,Arts"
            className="md:ml-10"
            value={promptData.tags}
            onChange={(e) =>
              setPromptData((prevData) => ({
                ...prevData,
                tags: e.target.value,
              }))
            }
          />
        </div>
        <br />
        <div className="w-full">
          <input
            type="file"
            required
            accept="image/*"
            multiple
            id="file"
            className="hidden"
            onChange={handleImageFileChange}
          />
          <label
            htmlFor="file"
            className={`w-full rounded-md min-h-[15vh] border-white p-3 border  flex items-center justify-center `}
          >
            <span className="text-white">
              Drag and drop your prompt images here or click to browse
            </span>
          </label>
        </div>
        <br />
        <br />
        <div className="w-full">
          <input
            type="file"
            required
            accept="image/*"
            multiple
            id="file"
            className="hidden"
          />
          <label
            htmlFor="file"
            className={`w-full rounded-md min-h-[15vh] border-white p-3 border  flex items-center justify-center `}
          >
            <span className="text-white">
              Drag and drop your prompt files here or click to browse
            </span>
          </label>
        </div>
        <br />
        <br />
        <div className="w-full flex items-center justify-center">
          <Button
            color="primary"
            className={`${styles.button}`}
            type="submit"
          >
            Upload your prompt
          </Button>
        </div>
        <br />
        <br />

      </form>
    </div>
  )
}

export default UploadPrompt