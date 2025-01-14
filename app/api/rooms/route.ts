import { NextResponse } from "next/server";
import client from "@/utils/db";

// Named export for GET method
export async function GET() {
  try {
    // Connect to MongoDB
    const dbClient = await client.connect();
    const db = dbClient.db("hostel"); // Use the correct database name
    const collection = db.collection("rooms"); // Use the correct collection name

    // Fetch all the rooms from the collection
    const rooms = await collection.find({}).toArray();

    // Return the data as a JSON response
    return NextResponse.json(rooms);
  } catch (error) {
    console.error("Error retrieving data:", error);
    return NextResponse.json(
      { error: "Failed to retrieve data." },
      { status: 500 }
    );
  }
}
