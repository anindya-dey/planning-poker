import { useParams } from "react-router-dom"
import GoToHome from "./GoToHome";
import TileLayout from "./TileLayout";

export default function Room() {
    const params = useParams();

    console.log(params);

    return (
        <TileLayout>
            <div className="text-center">
                <div className="text-3xl text-indigo-600">RoomName | Planning Poker</div>
                <div className="mt-4 text-xl text-indigo-400 font-thin">(Join this room using RoomId)</div>
                <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="text-sm text-indigo-600 px-2 py-10 border border-indigo-600 rounded-lg">Anindya</div>
                    <div className="text-sm text-indigo-600 px-2 py-10 border border-indigo-600 rounded-lg">Apoorv</div>
                    <div className="text-sm text-indigo-600 px-2 py-10 border border-indigo-600 rounded-lg">Chris</div>
                    <div className="text-sm text-indigo-600 px-2 py-10 border border-indigo-600 rounded-lg">Dhruv</div>
                    <div className="text-sm text-indigo-600 px-2 py-10 border border-indigo-600 rounded-lg">Niket</div>
                    <div className="text-sm text-indigo-600 px-2 py-10 border border-indigo-600 rounded-lg">Rishit</div>
                </div>

                <div className="mt-6 text-center">
                    <GoToHome />
                </div>
            </div>
        </TileLayout>
    )
}