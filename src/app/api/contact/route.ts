import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();
    console.log("Received data:", data);

    return NextResponse.json({ message: "Message received!", data: data });
}
