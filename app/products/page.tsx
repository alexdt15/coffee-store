async function getData() {
  const response = fetch("http:localhost:3000/api/products", {
    cache: "no-store",
  });
  const data = (await response).json();
  console.log(data);
  return data;
}

export default async function Products() {
  const coffeeList = await getData();
  console.log();

  return (
    <main>
      <h1>Products</h1>
      <div>
        <div>
          {coffeeList.map((coffee) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3>Coffee List</h3>
                <p>{coffee.price}€</p>
                <p>{coffee.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
