import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [ roomId, setRoomId ] = useState()
    return (
        <div className="flex justify-center md:items-center md:h-screen selection:bg-indigo-600 selection:text-white">
            <div className="md:w-6/12 lg:w-4/12 xl:w-3/12 px-6 py-16 md:border md:border-gray-200 md:rounded-lg md:shadow-lg md:shadow-indigo-100">
                <div className="w-full flex flex-col space-y-10 justify-center">
                    <div className="md:mb-4 text-3xl text-center text-indigo-600">Planning Poker</div>
                    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-2">
                        <input type="text" className="py-2 md:w-3/5 rounded border border-gray-300 placeholder:text-indigo-300 text-indigo-600 focus:ring-indigo-600" placeholder="Room Id" value={roomId} onChange={() => setRoomId(roomId) }/>
                        <Link className="md:w-2/5" to={`/room/${roomId}`}>
                            <div className="px-6 py-2 bg-indigo-600 text-white text-center rounded hover:bg-indigo-800 hover:cursor-pointer transition-all ease-in-out">Join</div>
                        </Link>
                    </div>
                    <div className="border border-b-2 border-gray-100"></div>
                    <div>
                        <Link to={"/room/new"}>
                            <div className="px-6 py-2 rounded-md text-center text-indigo-600 border border-indigo-600 hover:text-white hover:bg-indigo-600 hover:cursor-pointer transition-all ease-in-out">Create new room</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
