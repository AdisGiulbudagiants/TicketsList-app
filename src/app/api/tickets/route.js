import connectMongoDb from '@/libs/mongodb'
import Ticket from '@/models/ticketSchema'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const { title, description } = await req.json()
  await connectMongoDb()
  await Ticket.create({ title, description })
  return NextResponse.json({ message: 'Ticket Created' }, { status: 201 })
}

export async function GET() {
  await connectMongoDb()
  const tickets = await Ticket.find()
  return NextResponse.json({ tickets })
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get('id')
  await connectMongoDb()
  await Ticket.findByIdAndDelete(id)
  return NextResponse.json({ message: 'Ticket Deleted' }, { status: 200 })
}
