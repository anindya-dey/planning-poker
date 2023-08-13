import Ably from "ably/promises";
import { NextResponse } from "next/server";

export async function GET() {
    const ablyClient = new Ably.Realtime(process.env.ABLY_API_KEY || "");
    const token = await ablyClient.auth.createTokenRequest();
    return NextResponse.json({ token });
};
