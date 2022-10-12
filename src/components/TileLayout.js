export default function TileLayout({ children }) {
    return (
        <div className="flex justify-center md:items-center h-screen selection:bg-indigo-600 selection:text-white">
            <div className="px-10 py-10 md:border md:border-gray-200 md:rounded-lg md:shadow-lg md:shadow-indigo-100">
                {children}
            </div>
        </div>
    )
}
