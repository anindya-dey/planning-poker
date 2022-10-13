import Error from "./Error";

export default function RoomNotFound() {
    return (
        <Error
            errorTitle="404 - Room Not Found!" 
            errorDescription=" Check if the room id you have entered is correct."
        />
    )
}