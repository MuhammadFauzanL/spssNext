import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const project = await prisma.project.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!project) {
            return NextResponse.json({ error: "Proyek tidak ditemukan" }, { status: 404 });
        }

        return NextResponse.json(project);
    } catch (error) {
        console.error("Error fetching single project:", error);
        return NextResponse.json({ error: "Gagal mengambil data proyek" }, { status: 500 });
    }
}
