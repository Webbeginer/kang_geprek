"use client";

import { useRouter } from "next/navigation";
import IntroSection from "@/components/Intro";

export default function IntroPage() {
  const router = useRouter();

  return (
    <IntroSection onEnter={() => router.push("/home")} />
  );
}
