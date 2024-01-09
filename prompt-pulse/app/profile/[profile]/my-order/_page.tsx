"use client"
import { PiDownloadDuotone } from "react-icons/pi";
import { format } from "timeago.js";
import React, { useState } from 'react'
import Header from "@/components/Layout/Header";
import { styles } from "@/utils/styles";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { VscPreview } from "react-icons/vsc";
import { toast } from "sonner";
import { newReview } from "@/actions/reviews/newReview";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Button } from "@nextui-org/react";

type Props = {
  order: any,
  user: any
}

const MyOrder = ({ order, user }: Props) => {

  const [promptId, setPromptId] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [open, setOpen] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Prompt Title", flex: 0.8 },
    { field: "price", headerName: "Prompt Price", flex: 0.5 },
    {
      field: "download",
      headerName: "Download Source Code",
      flex: 0.5,
      renderCell: (params: any) => {
        const sourceCodeFiles = params.row.download;
        return (
          <div className="w-[70%] flex justify-center">
            {sourceCodeFiles &&
              sourceCodeFiles.map((file: any) => (
                <a href={file.url} key={file.url} download>
                  <PiDownloadDuotone className="text-2xl text-white cursor-pointer" />
                </a>
              ))}
          </div>
        );
      },
    },
    {
      field: "OrderedAt",
      headerName: "Ordered At",
      flex: 0.5,
    },
    {
      field: "Review",
      headerName: "Give one Review",
      flex: 0.5,
      renderCell: (params: any) => {
        return (
          <div className="w-[70%] flex justify-center">
            <VscPreview
              className="text-2xl text-white cursor-pointer"
              onClick={() => {
                setOpen(!open);
                setPromptId(params.row.prompt.id);
              }}
            />
          </div>
        );
      },
    },
  ];

  const rows: any = [];

  order &&
    order.forEach((item: any) =>
      rows.push({
        id: item.id,
        name: item.prompt.name,
        price: "$US" + " " + item.prompt.price,
        download: item.prompt.promptUrl,
        OrderedAt: format(item.createdAt),
        prompt: item.prompt,
      })
    );

  const reviewHandler = async () => {
    if (rating === 0 || review === "") {
      toast.error("Please fill the all fields!");
    } else {
      await newReview({ rating, comment: review, promptId, userId: user?.id });
      setOpen(!open);
      setRating(0);
      setReview("");
    }
  };

  return (
    <>
      <Header activeItem={9} user={user} />

      {order.length === 0 ? (
        <>
          <h1 className=" font-bold text-white tracking-wider text-center text-3xl mt-12 ">
            Your order is currently empty. Explore our amazing prompts and fill it with joy!
          </h1>
        </>
      ) : (
        <>
          <div className="w-[90%] m-auto">
            <h1 className={`${styles.heading} text-center py-5`}>All Orders</h1>
            <Box
              m="40px 0 0 0"
              height="75vh"
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                  outline: "none",
                },
                "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                  color: "#fff",
                },
                "& .MuiDataGrid-sortIcon": {
                  color: "#fff",
                },
                "& .MuiDataGrid-row": {
                  color: "#fff",
                  borderBottom: "1px solid #ffffff30!important",
                },
                "& .MuiTablePagination-root": {
                  color: "#fff",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none!important",
                },
                "& .name-column--cell": {
                  color: "#fff",
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "#3e4396",
                  borderBottom: "none",
                  color: "#fff",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: "#1F2A40",
                },
                "& .MuiDataGrid-footerContainer": {
                  color: "dark",
                  borderTop: "none",
                  backgroundColor: "#3e4396",
                },
                "& .MuiCheckbox-root": {
                  color: `#b7ebde !important`,
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                  color: `#fff !important`,
                },
              }}
            >
              <DataGrid checkboxSelection rows={rows} columns={columns} />
            </Box>
            {open && (
              <div className="w-full fixed top-0 left-0 z-[9999999] h-screen bg-[#00000020] flex items-center justify-center">
                <div className="md:w-[70%] xl:w-[40%] w-[90%] bg-white shadow rounded p-5">
                  <div className="w-full flex justify-end">
                    <RxCross1
                      className="text-2xl text-black cursor-pointer"
                      onClick={() => setOpen(!open)}
                    />
                  </div>
                  <div className="w-full">
                    <h1
                      className={`${styles.label} text-black !text-3xl text-center`}
                    >
                      Give One Review
                    </h1>
                    <br />
                    <h5 className={`${styles.label} !text-black pl-2 mb-1`}>
                      Give a Rating <span className="text-red-500 pl-1">*</span>
                    </h5>
                    <div className="flex w-full ml-2 pb-3">
                      {[1, 2, 3, 4, 5].map((i) =>
                        rating >= i ? (
                          <AiFillStar
                            key={i}
                            className="mr-1 cursor-pointer"
                            color="rgb(246,186,0)"
                            size={25}
                            onClick={() => setRating(i)}
                          />
                        ) : (
                          <AiOutlineStar
                            key={i}
                            className="mr-1 cursor-pointer"
                            color="rgb(246,186,0)"
                            size={25}
                            onClick={() => setRating(i)}
                          />
                        )
                      )}
                    </div>
                    <textarea
                      name="comment"
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      id=""
                      cols={40}
                      rows={5}
                      placeholder="Write your comment..."
                      className="outline-none bg-transparent 800px:ml-3 text-black border border-[#00000027] w-[95%] 800px:w-full p-2 rounded text-[18px] font-Poppins"
                    ></textarea>
                    <br />
                    <Button
                      color="primary"
                      className={`${styles.button} !bg-[#000] mt-5`}
                      onClick={reviewHandler}
                      disabled={order
                        ?.find((i: any) => i.promptId === promptId)
                        ?.prompt.reviews.some(
                          (review: any) => review.userId === user?.id
                        )}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default MyOrder