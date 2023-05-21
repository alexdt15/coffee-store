function getData() {
  const response = fetch("http:localhost:3000/api/products");
  console.log("RESPONSEEE!", response);
  return response;
}

export default async function Products() {
  const coffeeList = getData();
  console.log("COFFEEEE", coffeeList);

  return (
    <main>
      <h1>Products</h1>
      <div>
        <div>
          <h3>Coffee List!</h3>
          <p>HOPEFULY</p>
        </div>
      </div>
    </main>
  );
}
