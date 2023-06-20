import { useState } from "react";
import { Link } from "react-router-dom";
import Divider from "./Divider";

export default function Home() {
    const [roomId, setRoomId] = useState("");
    const [username, setUserName] = useState("");
    
    return (
        <div className="flex flex-col justify-center w-full space-y-10">
            <div className="text-3xl text-center text-indigo-600 md:mb-4">Planning Poker</div>
            <div>
                <form className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-2">
                    <input type="text" className="py-2 text-indigo-600 border border-gray-300 rounded md:w-3/5 placeholder:text-indigo-300 focus:ring-indigo-600" placeholder="Room Id" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
                    <input type="text" className="py-2 text-indigo-600 border border-gray-300 rounded md:w-3/5 placeholder:text-indigo-300 focus:ring-indigo-600" placeholder="Your Name" value={username} onChange={(e) => setUserName(e.target.value)} />
                    <Link className="md:w-2/5" to={`/room/${roomId}`}>
                        <button type="submit" className="w-full px-6 py-2 text-center text-white transition-all ease-in-out bg-indigo-600 rounded hover:bg-indigo-800 hover:cursor-pointer">Join</button>
                    </Link>
                </form>
            </div>

            <Divider />

            <div>
                <Link to={"/room/new"}>
                    <div className="px-6 py-2 text-center text-indigo-600 transition-all ease-in-out border border-indigo-600 rounded-md hover:text-white hover:bg-indigo-600 hover:cursor-pointer">Create new room</div>
                </Link>
            </div>
        </div>
    );
}
