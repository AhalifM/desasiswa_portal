import { NextResponse } from "next/server";
import client from "../../../utils/db";

// Named export for POST method
export async function POST() {
  try {
    const dbClient = await client.connect();
    const db = dbClient.db("hostel");
    const collection = db.collection("rooms");

    const dummyData = [
      { roomNumber: "101", capacity: 2, occupied: true },
      { roomNumber: "102", capacity: 3, occupied: false },
      { roomNumber: "103", capacity: 4, occupied: true },
    ];

    await collection.insertMany(dummyData);

    return NextResponse.json({ message: "Dummy data added successfully." });
  } catch (error) {
    console.error("Error seeding data:", error);
    return NextResponse.json(
      { error: "Failed to seed data." },
      { status: 500 }
    );
  }
}
