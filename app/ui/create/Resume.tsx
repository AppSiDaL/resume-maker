"use client";
import { useAppState } from "@/app/StateProvider";

export default function Resume() {
  const state = useAppState();

  return (
    <div>
      <h1>Resume</h1>
      <p>First Name: {state.firstName}</p>
      <p>Last Name: {state.lastName}</p>
      <p>Email: {state.email}</p>
      <p>Phone: {state.phone}</p>
      <p>Address: {state.address}</p>
      <p>Job Title: {state.title}</p>
      {/* Muestra más campos según sea necesario */}
    </div>
  );
}