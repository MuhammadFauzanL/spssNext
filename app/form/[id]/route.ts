import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

export async function GET(request: Request) {
    try {
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");

        if (!userId) {
            return NextResponse.json({ error: "User ID diperlukan" }, { status: 400 });
        }

        const projects = await prisma.project.findMany({
            where: {
                userId: parseInt(userId),
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        return NextResponse.json({ error: "Gagal mengambil data proyek" }, { status: 500 });
    }
}