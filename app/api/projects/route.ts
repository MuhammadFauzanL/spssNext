import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
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

export async function POST(request: Request) {
    try {
        const { title, description, category, userId } = await request.json();

        if (!title || !userId) {
            return NextResponse.json({ error: "Judul dan User ID diperlukan" }, { status: 400 });
        }

        const project = await prisma.project.create({
            data: {
                title,
                description,
                category,
                userId: parseInt(userId),
                status: "active", // default status
                responses: 0
            },
        });

        return NextResponse.json(project, { status: 201 });
    } catch (error) {
        console.error("Error creating project:", error);
        return NextResponse.json({ error: "Gagal membuat proyek" }, { status: 500 });
    }
}

