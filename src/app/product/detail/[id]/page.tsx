import ProductDetail from "@/components/DetailProduct";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="h-[120vh] flex items-center justify-center">
      <ProductDetail id={id} />
    </div>
  );
}
