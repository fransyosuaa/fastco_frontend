import { NextResponse } from 'next/server';
import axios from 'axios';

const expressUrl = process.env.API_HOST;

export async function GET() {
  const res = await axios.get(`${expressUrl}/schedule`);
  const {
    data: { data: result },
  } = res;

  return NextResponse.json({ data: result });
}

export async function DELETE(request) {
  const q = request.nextUrl.searchParams.get('q');
  const res = await axios.delete(`${expressUrl}/schedule/${q}`);
  const {
    data: { data: result },
  } = res;

  return NextResponse.json({ data: result });
}

export async function POST(request) {
  const req = await request.json();
  const { name, time, id } = req;
  if (id) {
    const res = await axios.put(`${expressUrl}/schedule/${id}`, {
      name,
      time,
    });
    const {
      data: { data: result },
    } = res;
    return NextResponse.json({ data: result });
  }

  const res = await axios.post(`${expressUrl}/schedule`, req);
  const {
    data: { data: result },
  } = res;
  return NextResponse.json({ data: result });
}
