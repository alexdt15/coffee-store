export default function Page({ params }: { params: { id: number } }) {
  return (
    <main>
      <h1>Product #{params.id}</h1>
    </main>
  )
}