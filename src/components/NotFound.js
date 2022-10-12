import { Link } from "react-router-dom";
import Divider from "./Divider";
import TileLayout from "./TileLayout";

export default function NotFound() {
    return (
        <TileLayout>
            <div className="text-center">
                <div className="mb-6 text-3xl text-indigo-600">404 - Page Not Found!</div>

                <Divider />

                <div className="mt-6 font-thin">
                    <span>Go to{' '}</span>
                    <Link to="/">
                        <span className="text-indigo-600">Home &rarr;</span>
                    </Link>
                </div>
            </div>
        </TileLayout>
    )
}