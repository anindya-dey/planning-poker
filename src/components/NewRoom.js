import { Link } from "react-router-dom";
import GoToHome from "./GoToHome";

import TileLayout from "./TileLayout";

export default function NewRoom() {
    return (
        <TileLayout>
            <div className="w-full flex flex-col space-y-10 justify-center">
                <div className="text-3xl text-center text-indigo-600">Planning Poker</div>
                <div className="text-xl text-center text-indigo-600 font-thin">Create New Room</div>
                <div className="flex flex-col space-y-4">
                    <input type="text" className="py-2 w-full rounded border border-gray-300 placeholder:text-indigo-300 text-indigo-600 focus:ring-indigo-600" placeholder="Room Name" />
                    <Link to={"/room/new"}>
                        <div className="px-6 py-2 bg-indigo-600 text-white text-center rounded hover:bg-indigo-800 hover:cursor-pointer transition-all ease-in-out">Create</div>
                    </Link>
                </div>

                <div className="text-center">
                    <GoToHome />
                </div>
            </div>
        </TileLayout>
    );
}