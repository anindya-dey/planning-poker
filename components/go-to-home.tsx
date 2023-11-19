import Link from "next/link";

export default function GoToHome() {
    return (
        <>
            <div className="font-thin">
            <span>Go to{' '}</span>
            <Link href="/">
                <span className="text-indigo-600">Home &rarr;</span>
            </Link>
        </div>
        </>
    )
}