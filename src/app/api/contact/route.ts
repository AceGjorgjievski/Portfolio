import { transporter } from "@/lib/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();
    console.log("Received data:", data);

    try {
        const emailResponse = await transporter.sendMail({
            from: `"User" <${process.env.EMAIL}>`,
            replyTo: data.email, // User's actual email
            to: process.env.EMAIL, // Your target email
            subject: data.subject,
            text: data.message,
            html: `<h1>${data.subject}</h1><p>${data.message}</p>`
        });
        
    
        console.log("Email sent: ", emailResponse);
        return NextResponse.json({ message: "Message received!", data: data });

    } catch(err) {

        console.log("err: ", err);
        return NextResponse.json({ message: "Error received!", data: err.message });
    }

}


