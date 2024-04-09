import connectMongoDb from '@/libs/mongodb'
import Ticket from '@/models/ticketSchema'
import { NextResponse } from 'next/server'

export async function PUT(req, { params }) {
  const { id } = params
  const { newTitle: title, newDescription: description } = await req.json()
  await connectMongoDb()
  await Ticket.findByIdAndUpdate(id, { title, description })
  return NextResponse.json({ message: 'Topic updated' }, { status: 200 })
}

export async function GET(req, { params }) {
  const { id } = params
  await connectMongoDb()
  const ticket = await Ticket.findOne({ _id: id })
  return NextResponse.json({ ticket }, { status: 200 })
}
