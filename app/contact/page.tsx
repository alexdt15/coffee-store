async function getMethodName() {
  const resp = await fetch("http:localhost:3000/contact", {
    method: "GET",
  });
  console.log("ALGUIEN ME DISE QUE ES RESP?", resp);
  return resp;
}

export default function Contact() {
  const somethingToShow = getMethodName();
  return (
    <main>
      <h1>Contact</h1>
    </main>
  );
}
