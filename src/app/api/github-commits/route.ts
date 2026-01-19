import { NextResponse } from "next/server";

const USERNAME = process.env.GITHUB_USERNAME;
const TOKEN = process.env.GITHUB_TOKEN;
const BASE = process.env.GITHUB_API;


export async function GET() {
  const res = await fetch(
    `${BASE}/search/commits?q=author:${USERNAME}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "application/vnd.github.cloak-preview",
        "User-Agent": "NextJS-App",
      },
      cache: "no-store",
    }
  );

  const data = await res.json();

  return NextResponse.json({
    username: USERNAME,
    totalCommits: data.total_count ?? 0,
  });
}