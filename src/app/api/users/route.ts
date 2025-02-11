import { prisma } from "@/app/utils/PrismaClient";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json({
    users,
  });
}

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name") as User["name"] | null;

  if (!name) {
    return NextResponse.json(
      {
        message: "Name is required!",
      },
      { status: 400 }
    );
  }

  const email = formData.get("email") as User["email"] | null;

  if (!email) {
    return NextResponse.json(
      {
        message: "Email is required!",
      },
      { status: 400 }
    );
  }

  return await prisma.user
    .create({
      data: {
        name,
        email,
      },
    })
    .then(() => {
      return NextResponse.json(
        {
          message: "User was created!",
        },
        { status: 200 }
      );
    })
    .catch(() => {
      return NextResponse.json(
        {
          message: "There was an error when creating a user!",
        },
        { status: 500 }
      );
    });
}
