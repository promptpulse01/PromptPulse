import React, { useState } from "react";
import AdminSidebar from "@/components/Admin/Sidebar/AdminSidebar";
import { getUser } from "@/actions/users/getUser";


export default async function Sidebar() {
  const {user,shop}=JSON.parse(JSON.stringify(await getUser()));
  return (
    <div>
        <AdminSidebar user={user}/>
    </div>
  );
}

