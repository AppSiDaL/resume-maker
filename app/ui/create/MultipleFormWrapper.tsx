"use client";
import React from "react";
import { useAppState, useAppDispatch } from "@/app/StateProvider";

interface MultipleFormWrapperProps {
  children: React.ReactNode;
}
export default function MultipleFormWrapper({
  children,
}: MultipleFormWrapperProps) {
  const state = useAppState();

  return <div>
  </div>;
}
