import { useState } from "react";
import { Link } from "react-router-dom";
import Divider from "./Divider";

export default function Home() {
    const [roomId, setRoomId] = useState('')
    return (
        <div className="w-full flex flex-col space-y-10 justify-center">
            <div className="md:mb-4 text-3xl text-center text-indigo-600">Planning Poker</div>
            <div>
                <form className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-2">
                    <input type="text" className="py-2 md:w-3/5 rounded border border-gray-300 placeholder:text-indigo-300 text-indigo-600 focus:ring-indigo-600" placeholder="Room Id" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
                    <Link className="md:w-2/5" to={`/room/${roomId}`}>
                        <button type="submit" className="px-6 py-2 w-full bg-indigo-600 text-white text-center rounded hover:bg-indigo-800 hover:cursor-pointer transition-all ease-in-out">Join</button>
                    </Link>
                </form>
            </div>

            <Divider />

            <div>
                <Link to={"/room/new"}>
                    <div className="px-6 py-2 rounded-md text-center text-indigo-600 border border-indigo-600 hover:text-white hover:bg-indigo-600 hover:cursor-pointer transition-all ease-in-out">Create new room</div>
                </Link>
            </div>
        </div>
    );
}
