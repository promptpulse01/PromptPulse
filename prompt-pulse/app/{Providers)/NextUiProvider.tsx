'use client'
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";

interface ProviderProps{
    children: React.ReactNode;
}

export default function Provider({children}:ProviderProps) {
 
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}