export default function Layout({ children }) {
    return (
        <div className="flex justify-center w-3/4 m-auto md:w-96 py-10 selection:bg-indigo-600 selection:text-white">
            {children}
        </div>
    )
}
