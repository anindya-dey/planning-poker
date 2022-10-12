import { useParams } from "react-router-dom"

export default function Room() {
    const params = useParams();

    console.log(params);

    return <div>{ params.roomId }</div>
}