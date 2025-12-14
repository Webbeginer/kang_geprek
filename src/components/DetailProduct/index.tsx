import DetailProductClient from "../DetailProductClien";

export default async function ProductDetail({ id }: { id: string }) {
  const res = await fetch(`http://localhost:3000/api/product?id=${id}`, {
    cache: "no-store",
  });
  const product = await res.json();

  return <DetailProductClient product={product.data} />;
}
