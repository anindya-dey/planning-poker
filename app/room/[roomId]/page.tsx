import Divider from "@/components/divider";
import GoToHome from "@/components/go-to-home";

type RoomPageProps = {
    params: Promise<{ roomId: string }>;
};

export default async function RoomPage({ params }: RoomPageProps) {
    const { roomId } = await params;
    return (
        <>
            <div className="text-center">
            <div className="text-3xl text-indigo-600">RoomName | Planning Poker</div>
            <div className="mt-4 text-xl font-thin text-indigo-400">
                <span>
                    Join using Room Id{' '}
                </span>
                <span className="font-bold">
                    {`${roomId}`}
                </span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-10 lg:grid-cols-3">
                <div className="px-2 py-10 text-sm text-indigo-600 border border-indigo-600 rounded-lg">Anindya</div>
                <div className="px-2 py-10 text-sm text-indigo-600 border border-indigo-600 rounded-lg">Apoorv</div>
                <div className="px-2 py-10 text-sm text-indigo-600 border border-indigo-600 rounded-lg">Chris</div>
                <div className="px-2 py-10 text-sm text-indigo-600 border border-indigo-600 rounded-lg">Dhruv</div>
                <div className="px-2 py-10 text-sm text-indigo-600 border border-indigo-600 rounded-lg">Niket</div>
                <div className="px-2 py-10 text-sm text-indigo-600 border border-indigo-600 rounded-lg">Rishit</div>
            </div>

            <Divider />

            <div className="text-center">
                <GoToHome />
            </div>
        </div>
        </>
    )
};
