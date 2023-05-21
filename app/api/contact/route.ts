import connectToDatabase from "@/lib/mongodb";

export default async function handler(req, res) {
  connectToDatabase().catch(() =>
    res.status(405).json({ error: "FAILED TO CONNECT TO DB" })
  );

  const { method } = req;
  switch (method) {
    case "GET":
      res.status(201).json({ methodName: "GET METHOD" });
      break;
    case "POST":
      res.status(200).json({ methodName: method });
      break;
    case "PUT":
      res.status(200).json({ methodName: "PUT METHOD" });
      break;
    case "DELETE":
      res.status(200).json({ methodName: "DELETE METHOD" });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
  res.status(200).json({ hello: "world" });
}
