import connectToDatabase from './mongodb';

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const collection = db.collection('coffee'); // Reemplaza 'your_collection_name' con el nombre de tu colección

  switch (req.method) {
    case 'GET':
      // Obtén todos los documentos de la colección
      const documents = await collection.find({}).toArray();
      res.status(200).json(documents);
      break;

    case 'POST':
      // Inserta un nuevo documento en la colección
      const result = await collection.insertOne(req.body);
      res.status(201).json(result.ops[0]);
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}