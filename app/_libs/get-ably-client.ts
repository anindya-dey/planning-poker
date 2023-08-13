import Ably from "ably/promises";

let ably: Ably.Types.RealtimePromise | null = null;

export function getAblyClient() {
    if(!ably) {
        ably = new Ably.Realtime.Promise({ authUrl: '/api/ably/token' });
    }
    return ably;
};
