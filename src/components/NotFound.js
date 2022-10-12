import Divider from "./Divider";
import GoToHome from "./GoToHome";
import TileLayout from "./TileLayout";

export default function NotFound() {
    return (
        <TileLayout>
            <div className="text-center">
                <div className="mb-6 text-3xl text-indigo-600">404 - Page Not Found!</div>

                <Divider />

                <div className="mt-6">
                    <GoToHome />
                </div>
            </div>
        </TileLayout>
    )
}