import { useParams, redirect } from "react-router-dom"
import Divider from "./Divider";
import GoToHome from "./GoToHome";

export default function Room() {
    const params = useParams();

    console.log(params);

    if (!params.roomId) {
        return redirect("/room/new");
    }

    return (
        <div className="text-center">
            <div className="text-3xl text-indigo-600">RoomName | Planning Poker</div>
            <div className="mt-4 text-xl text-indigo-400 font-thin">
                <span>
                    Join using Room Id{' '}
                </span>
                <span className="font-bold">
                    {`${params.roomId}`}
                </span>
            </div>
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="text-sm text-indigo-600 px-2 py-10 border border-indigo-600 rounded-lg">Anindya</div>
                <div className="text-sm text-indigo-600 px-2 py-10 border border-indigo-600 rounded-lg">Apoorv</div>
                <div className="text-sm text-indigo-600 px-2 py-10 border border-indigo-600 rounded-lg">Chris</div>
                <div className="text-sm text-indigo-600 px-2 py-10 border border-indigo-600 rounded-lg">Dhruv</div>
                <div className="text-sm text-indigo-600 px-2 py-10 border border-indigo-600 rounded-lg">Niket</div>
                <div className="text-sm text-indigo-600 px-2 py-10 border border-indigo-600 rounded-lg">Rishit</div>
            </div>

            <Divider />

            <div className="text-center">
                <GoToHome />
            </div>
        </div>
    )
}