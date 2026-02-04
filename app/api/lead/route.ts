import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'data', 'leads.json');

export async function POST(request: Request) {
  const body = await request.json();
  const lead = {
    ...body,
    createdAt: new Date().toISOString(),
  };

  if (process.env.NODE_ENV !== 'production') {
    try {
      const file = await fs.readFile(DATA_PATH, 'utf-8');
      const existing = JSON.parse(file) as unknown[];
      const updated = Array.isArray(existing) ? [...existing, lead] : [lead];
      await fs.writeFile(DATA_PATH, JSON.stringify(updated, null, 2));
    } catch {
      await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
      await fs.writeFile(DATA_PATH, JSON.stringify([lead], null, 2));
    }
  } else {
    console.log('Lead received', lead);
  }

  return NextResponse.json({ ok: true });
}
