import { Link } from "react-router-dom";
import Divider from "./Divider";
import GoToHome from "./GoToHome";
import { useState } from "react";

export default function NewRoom() {
    const [roomId, setRoomId] = useState("");
    
    return (
        <div className="flex flex-col justify-center w-full space-y-10">
            <div className="text-3xl text-center text-indigo-600">Planning Poker</div>
            <div className="text-xl font-thin text-center text-indigo-600">Create New Room</div>
            <div>
                <form className="flex flex-col space-y-6">
                    <input type="text" className="w-full py-2 text-indigo-600 border border-gray-300 rounded placeholder:text-indigo-300 focus:ring-indigo-600" placeholder="Room Name" onChange={(e) => setRoomId(e.target.value)} />
                    <div className="flex items-center">
                        <input type="checkbox" name="guest" className="text-indigo-600 border-gray-300 rounded" />{' '}
                        <label htmlFor="guest" className="ml-2 text-sm font-medium">Join as Guest</label>
                    </div>
                    <Link to={`/room/${roomId}`}>
                        <button className="w-full px-6 py-2 mt-2 text-center text-white transition-all ease-in-out bg-indigo-600 rounded hover:bg-indigo-800 hover:cursor-pointer">Create</button>
                    </Link>
                </form>
            </div>

            <Divider />

            <div className="text-center">
                <GoToHome />
            </div>
        </div>
    );
}