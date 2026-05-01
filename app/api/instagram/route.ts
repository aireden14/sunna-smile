import { NextResponse } from "next/server";

// Instagram Basic Display API endpoint.
// Docs: https://developers.facebook.com/docs/instagram-basic-display-api/reference/user/media
// The access token must belong to the account @sunna_smile_ (or a business
// account that owns it). Configure INSTAGRAM_ACCESS_TOKEN in .env.local.

export const revalidate = 600; // cache 10 min

type IgMediaItem = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp?: string;
};

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const limit = Number(process.env.INSTAGRAM_LIMIT || 12);

  if (!token) {
    return NextResponse.json({
      ok: true,
      configured: false,
      data: [],
      error: "INSTAGRAM_ACCESS_TOKEN is not set — running in demo mode.",
    });
  }

  const fields =
    "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
  const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${token}`;

  try {
    const res = await fetch(url, { next: { revalidate: 600 } });
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { ok: false, configured: true, data: [], error: text },
        { status: 502 }
      );
    }
    const json = (await res.json()) as { data: IgMediaItem[] };
    return NextResponse.json({
      ok: true,
      configured: true,
      data: json.data ?? [],
    });
  } catch (e) {
    return NextResponse.json(
      {
        ok: false,
        configured: true,
        data: [],
        error: (e as Error).message,
      },
      { status: 500 }
    );
  }
}
