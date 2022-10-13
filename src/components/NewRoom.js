import { Link } from "react-router-dom";
import Divider from "./Divider";
import GoToHome from "./GoToHome";

export default function NewRoom() {
    return (
        <div className="w-full flex flex-col space-y-10 justify-center">
            <div className="text-3xl text-center text-indigo-600">Planning Poker</div>
            <div className="text-xl text-center text-indigo-600 font-thin">Create New Room</div>
            <div>
                <form className="flex flex-col space-y-6">
                    <input type="text" className="py-2 w-full rounded border border-gray-300 placeholder:text-indigo-300 text-indigo-600 focus:ring-indigo-600" placeholder="Room Name" />
                    <div className="flex items-center">
                        <input type="checkbox" name="guest" className="text-indigo-600 rounded border-gray-300" />{' '}
                        <label htmlFor="guest" className="ml-2 text-sm font-medium">Join as Guest</label>
                    </div>
                    <Link to={"/room/create"}>
                        <button className="mt-2 px-6 py-2 w-full bg-indigo-600 text-white text-center rounded hover:bg-indigo-800 hover:cursor-pointer transition-all ease-in-out">Create</button>
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