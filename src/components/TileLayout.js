export default function TileLayout({ children }) {
    return (
        <div className="flex justify-center md:items-center h-screen selection:bg-indigo-600 selection:text-white">
            <div className="md:w-6/12 lg:w-4/12 xl:w-3/12 px-6 py-16 md:border md:border-gray-200 md:rounded-lg md:shadow-lg md:shadow-indigo-100">
                {children}
            </div>
        </div>
    )
}
