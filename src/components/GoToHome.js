import { Link } from "react-router-dom";

export default function GoToHome() {
    return (
        <div className="font-thin">
            <span>Go to{' '}</span>
            <Link to="/">
                <span className="text-indigo-600">Home &rarr;</span>
            </Link>
        </div>
    )
}