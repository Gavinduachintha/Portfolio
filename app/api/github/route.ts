import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.github.com/users/gavinduachintha", {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 },
    );
  }

  const data = await res.json();

  return NextResponse.json({
    followers: data.followers,
  });
}
