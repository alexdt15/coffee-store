import connectToDatabase from "@/lib/mongodb";
import Coffee from "@/models/coffee";

export async function handler(req, res) {
  console.log("REQUESTSITA", req);
  // const coffeeList = [
  //   {
  //     id: 1,
  //     name: "Colombia Monte Pijuru",
  //     price: 8.5,
  //   },
  //   {
  //     id: 2,
  //     name: "Etiopía lavado",
  //     price: 10,
  //   },
  //   {
  //     id: 3,
  //     name: "Perú yo qué sé ta weno",
  //     price: 9.2,
  //   },
  // ];

  connectToDatabase().catch(() =>
    res.status(405).json({ error: "FAILED TO CONNECT TO DB" })
  );
  getCoffeeList(req, res);
  const { method } = req;
  switch (method) {
    case "GET":
      getCoffeeList(req, res);
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
const getCoffeeList = async (req, res) => {
  try {
    console.log("CALLING COFFEE");
    const coffeeList = await Coffee.findOne({});

    if (!coffeeList) {
      return res.status(404).json({ error: "NO COFFEE FOUND" });
    }
    res.status(200).json({ coffee: coffeeList });
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
};
