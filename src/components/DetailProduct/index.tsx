import DetailProductClient from "../DetailProductClien";

export default async function ProductDetail({ id }: { id: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/product?id=${id}`, {
    cache: "no-store",
  });
  const product = await res.json();

  return <DetailProductClient product={product.data} />;
}
