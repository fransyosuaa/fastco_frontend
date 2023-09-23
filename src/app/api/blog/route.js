import { NextResponse } from 'next/server';
import axios from 'axios';

const expressUrl = process.env.API_HOST;

export async function GET(request) {
  const q = request.nextUrl.searchParams.get('q');
  const res = await axios.get(`${expressUrl}/blog?q=${q}`);
  const {
    data: { data: result },
  } = res;

  return NextResponse.json({ data: result });
}

export async function POST(request) {
  const req = await request.json();
  const { title, content } = req;
  const res = await axios.post(`${expressUrl}/blog`, {
    title,
    content,
  });
  const {
    data: { data: result },
  } = res;
  return NextResponse.json({ data: result });
}
