import { SyntheticEvent } from "react";
import { redirect } from 'next/navigation'

export default function createRoomHandler(event: SyntheticEvent) {
    event.preventDefault();

    const { roomName, isGuest } = event.target as typeof event.target & {
        roomName: { value: string };
        isGuest: { checked: boolean };
    };

    console.log(roomName.value, isGuest.checked);

    // Create Room
    // Redirect
};
