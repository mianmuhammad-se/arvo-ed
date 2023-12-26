import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href="users">Question 1: Dynamic Component Rendering Users</Link>
      <Link href="parent">Question 2: State Management & Prop Drilling</Link>
      <Link href="login">Question 3: Testing React Components</Link>
      <div href="login">Question 4: Performance Optimization(Check readme)</div>
    </main>
  );
}
