import ProductDetail from "@/components/DetailProduct";
import ModalProduct from "@/components/Modal";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <ModalProduct>
      <ProductDetail id={id} />
    </ModalProduct>
  );
}
