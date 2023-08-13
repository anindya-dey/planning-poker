"use client";

import Link from "next/link";
import { useState } from "react";

export default function JoinRoomForm() {
    const [roomId, setRoomId] = useState("");
    const [username, setUserName] = useState("");
    
    return (
        <>
        <div className="flex flex-col justify-center w-full space-y-10">
            
        <div className="text-xl font-thin text-center text-indigo-600">
          Join a Room
        </div>
            <form className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-2">
                <input type="text" className="py-2 text-indigo-600 border border-gray-300 rounded md:w-3/5 placeholder:text-indigo-300 focus:ring-indigo-600" placeholder="Room Id" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
                <input type="text" className="py-2 text-indigo-600 border border-gray-300 rounded md:w-3/5 placeholder:text-indigo-300 focus:ring-indigo-600" placeholder="Your Name" value={username} onChange={(e) => setUserName(e.target.value)} />
                <Link className="md:w-2/5" href={`/room/${roomId}`}>
                    <button type="submit" className="w-full px-6 py-2 text-center text-white transition-all ease-in-out bg-indigo-600 rounded hover:bg-indigo-800 hover:cursor-pointer">Join</button>
                </Link>
            </form>
        </div>
        </>
    );
}
