function Login({ onCreateRoom, onJoinRoom }) {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-3/12 px-6 py-16 border border-gray-200 rounded-lg shadow-lg shadow-indigo-100">
                <div className="w-full flex flex-col space-y-10 justify-center">
                    <div className="mb-4 text-3xl text-center text-indigo-600">Planning Poker</div>
                    <div className="space-y-6">
                        <form>
                            <div className="flex space-x-2 w-full">
                                <input type="text" className="py-2 w-3/5 rounded border border-gray-300 placeholder:text-indigo-300 text-indigo-600 focus:ring-indigo-600" placeholder="Room Id" />
                                <button type="submit" className="px-6 py-2 w-2/5 bg-indigo-600 text-white rounded hover:bg-indigo-800 hover:cursor-pointer transition-all ease-in-out" onClick={(e) => { e.preventDefault(); onJoinRoom();}}>Join a room</button>
                            </div>
                        </form>
                    </div>
                    <div className="border border-b-2 border-gray-100"></div>
                    <div className="space-y-6">
                        <form>
                            <div className="flex flex-col space-y-4">
                                <button type="submit" className="px-6 py-2 rounded-md text-center text-indigo-600 border border-indigo-600 hover:text-white hover:bg-indigo-600 hover:cursor-pointer transition-all ease-in-out" onClick={(e) => { e.preventDefault(); onCreateRoom();}}>Create new room</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
