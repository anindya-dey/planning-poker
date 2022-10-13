import Divider from "./Divider";
import GoToHome from "./GoToHome";

export default function Error({ errorTitle, errorDescription = "" }) {
    return (
        <div className="text-center">
            <div className="mb-6 text-3xl text-indigo-600">{errorTitle}</div>

            {
                errorDescription &&
                <div className="mt-6">
                    <div className="font-thin">{errorDescription}</div>
                </div>
            }

            <Divider />

            <GoToHome />
        </div>
    )
}