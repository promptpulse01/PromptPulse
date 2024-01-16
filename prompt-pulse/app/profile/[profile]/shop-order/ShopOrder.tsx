"use client";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { AiOutlineMail } from "react-icons/ai";
import { format } from "timeago.js";

type Props = {
    orderdata: any,
    isDashboard: boolean
}

const ShopOrder = ({ orderdata, isDashboard }: Props) => {

    const columns = [
        { field: "id", headerName: "ID", flex: 0.3 },
        { field: "name", headerName: "Name", flex: isDashboard ? 0.6 : 0.5 },
        ...(isDashboard
            ? []
            : [
                { field: "email", headerName: "Email", flex: 1 },
                { field: "title", headerName: "Prompt Title", flex: 1 },
            ]),
        { field: "price", headerName: "Price", flex: 0.5 },
        ...(isDashboard
            ? [{ field: "created_at", headerName: "Created At", flex: 0.5 }]
            : [
                {
                    field: " ",
                    headerName: "Email",
                    flex: 0.2,
                    renderCell: (params: any) => {
                        return (
                            <a href={`mailto:${params.row.email}`}>
                                <AiOutlineMail
                                    className="dark:text-white text-black"
                                    size={20}
                                />
                            </a>
                        );
                    },
                },
            ]),
    ];

    const rows: any = [];

    orderdata && orderdata.forEach((order: any) => {
        rows.push({
            id: order.id,
            name: order?.user?.firstName + " " + order?.user?.lastName,
            email: order?.user?.emailAddresses[0]?.emailAddress,
            title: order?.prompt?.name,
            price: "US $" + order?.prompt.price,
            created_at: format(order?.createdAt),
        })
    })

    return (

        <div>
            <Box m={`${!isDashboard && "20px"}`}>
                <Box
                    m={`${!isDashboard && "40px 0 0 0"}`}
                    height={isDashboard ? "38vh" : "90vh"}
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
                          borderBottom: "2px solid #5432D3!important",
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
                          backgroundColor: "#5432D3",
                          borderBottom: "none",
                          color: "#fff",
                        },
                        "& .MuiDataGrid-virtualScroller": {
                          backgroundColor: "#141829",
                        },
                        "& .MuiDataGrid-footerContainer": {
                          color: "dark",
                          borderTop: "none",
                          backgroundColor: "#5432D3",
                        },
                        "& .MuiCheckbox-root": {
                          color: `#b7ebde !important`,
                        },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                          color: `#fff !important`,
                        },
                      }}
                >
                    <DataGrid
                        checkboxSelection={isDashboard ? false : true}
                        rows={rows}
                        columns={columns}
                        slots={isDashboard ? {} : { toolbar: GridToolbar }}
                    />
                </Box>
            </Box>
        </div>

    )
}

export default ShopOrder