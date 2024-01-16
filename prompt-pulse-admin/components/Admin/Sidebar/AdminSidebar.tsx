"use client";
import { FC, useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import {
  HomeOutlinedIcon,
  ArrowForwardIosIcon,
  ArrowBackIosIcon,
  ReceiptOutlinedIcon,
  MapOutlinedIcon,
  GroupsIcon,
  ManageHistoryIcon,
  StorefrontIcon,
  ExitToAppIcon,
} from "./Icons";
import Link from "next/link";
import Image from "next/image";
import { useClerk } from "@clerk/nextjs";
import { useSelectedLayoutSegment } from "next/navigation";

interface itemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: any;
}

const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={"/"+selected === to}
      onClick={() => setSelected(title)}
      icon={icon}
      className="my-5"
    >
      <Typography className="!text-[18px] !font-Poppins text-ellipsis">
        {title}
      </Typography>
      <Link href={to} />
    </MenuItem>
  );
};



const Sidebar = ({ user }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { signOut } = useClerk();



  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const logoutHandler = async () => {
    await signOut();
  };
  let param=useSelectedLayoutSegment() || 'dashboard';
  // console.log(param)
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${"#111C43 !important"}`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
          opacity: 1,
        },
        "& .pro-menu-item": {
          color: "#fff",
        },
      }}
      className="bg-[#111C43]"
    >
      <ProSidebar
        collapsed={isCollapsed}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          zIndex: 99999999999999,
          width: isCollapsed ? "0%" : "16%",
        }}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <ArrowForwardIosIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Link href="/" className="block">
                  <h3 className="text-[25px] font-Poppins uppercase text-white">
                    Prompt Pulse
                  </h3>
                </Link>
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="inline-block"
                >
                  <ArrowBackIosIcon className="text-[#ffffffc1]" />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  alt="profile-user"
                  width={100}
                  height={100}
                  src={
                    user?.imageUrl
                  }
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    border: "3px solid #5b6fe6",
                  }}
                  priority
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  className="!text-[20px]  text-[#ffffffc1]"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user?.firstName+ " "+user?.lastName}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ m: "10px 0 0 0" }}
                  className="!text-[20px]  text-[#ffffffc1] capitalize"
                >
                  - Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={param}
              setSelected={param}
            />
            <Item
              title="Users"
              to="/users"
              icon={<GroupsIcon />}
              selected={param}
              setSelected={param}
            />

            <Item
              title="Shops"
              to="/shops"
              icon={<StorefrontIcon />}
              selected={param}
              setSelected={param}
            />

            <Item
              title="Invoices"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={param}
              setSelected={param}
            />
            <Item
              title="All Prompts"
              to="/prompts"
              icon={<MapOutlinedIcon />}
              selected={param}
              setSelected={param}
            />
            <div onClick={logoutHandler}>
              <Item
                title="Logout"
                to="/"
                icon={<ExitToAppIcon />}
                selected={param}
                setSelected={param}
              />
            </div>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
