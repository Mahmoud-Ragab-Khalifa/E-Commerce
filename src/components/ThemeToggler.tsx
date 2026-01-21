"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ThemeToggler() {
  const { setTheme } = useTheme();

  return (
    <>
      <Button onClick={() => setTheme("light")}>Light</Button>
      <Button onClick={() => setTheme("dark")}>Dark</Button>
      <Button onClick={() => setTheme("system")}>System</Button>
    </>
  );
}
