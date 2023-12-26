"use client";
import { MyProvider } from "../Context/Context";
import Counter from "../components/Counter";

export default function page() {
  return (
    <MyProvider>
      <Counter />
    </MyProvider>
  );
}
