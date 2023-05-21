import connectToDatabase from "@/lib/mongodb";
import Coffee from "@/models/coffee";

import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { NextApiResponse } from "next";

export async function GET() {
  const url = process.env.MONGODB_URI;

  try {
    console.log("ENTRO AQUI NO?");
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db("coffee_place");

    const collection = db.collection("coffee");
    const documents = await collection.find({}).toArray();

    console.log("TUS DOCUMENTO", documents);

    client.close();

    return new NextResponse(JSON.stringify(documents));
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    return new NextResponse("Error al conectar a la base de datos", {
      status: 500,
    });
  }
}
