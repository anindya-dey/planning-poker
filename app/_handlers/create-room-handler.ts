import { SyntheticEvent } from "react";
import { getAblyClient } from "../_libs/get-ably-client";
import { redirect } from 'next/navigation'

export default function createRoomHandler(event: SyntheticEvent) {
    event.preventDefault();

    const { roomName, isGuest } = event.target as typeof event.target & {
        roomName: { value: string };
        isGuest: { checked: boolean };
    };

    console.log(roomName.value, isGuest.checked);

    // Create Room
    const ably = getAblyClient();
    const channel = ably.channels.get(roomName.value);

    console.log(channel);

    // Redirect
    return redirect(`/rooms/${channel.name}`);
};
