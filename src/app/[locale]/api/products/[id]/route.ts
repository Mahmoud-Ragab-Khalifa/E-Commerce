import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string; locale: string }> },
) {
  const { id } = await params;

  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
