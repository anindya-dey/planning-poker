"use client";

import createRoomHandler from "@/handlers/create-room-handler";
import { useState } from "react";

export default function CreateRoomForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [roomId, setRoomId] = useState("");

  return (
    <>
      <div className="flex flex-col justify-center w-full space-y-10">
        <div className="text-xl font-thin text-center text-indigo-600">
          Create New Room
        </div>
        <div>
          <form onSubmit={createRoomHandler} className="flex flex-col space-y-6">
            <div className="flex flex-row justify-between">
              <div className="w-4/5">
                <input
                  type="text"
                  name="roomName"
                  className="w-full py-2 text-indigo-600 border border-gray-300 rounded placeholder:text-indigo-300 focus:ring-indigo-600"
                  placeholder="Room Name"
                  onChange={(e) => setRoomId(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-end w-auto">
                <input
                  type="checkbox"
                  name="isGuest"
                  className="text-indigo-600 border-gray-300 rounded "
                />{" "}
                <label htmlFor="guest" className="ml-2 text-sm font-medium">
                  Join as Guest
                </label>
              </div>
            </div>
              <button type="submit" className="w-full px-6 py-2 mt-2 text-center text-white transition-all ease-in-out bg-indigo-600 rounded hover:bg-indigo-800 hover:cursor-pointer">
                Create
              </button>
          </form>
        </div>
      </div>
    </>
  );
}
