import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return NextResponse.json({ error: "User tidak ditemukan" }, { status: 404 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: "Password salah" }, { status: 401 });
        }

        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        console.error("Error logging in:", error);
        return NextResponse.json({ error: "Gagal login" }, { status: 500 });
    }
}

