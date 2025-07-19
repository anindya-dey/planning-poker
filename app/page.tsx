import type { Metadata } from "next";

import Divider from "@/components/divider";
import CreateRoomForm from "@/components/forms/create-room-form";
import JoinRoomForm from "@/components/forms/join-room-form";

export const metadata: Metadata = {
  title: "Planning Poker",
  description: "App to help in sprint planning and story point estimation",
};

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full space-y-10">
      <div className="text-3xl text-center text-indigo-600 md:mb-4">
        Planning Poker
      </div>
      <div>
        <JoinRoomForm />
      </div>

      <Divider />

      <div>
        <CreateRoomForm />
      </div>
    </div>
  );
}
