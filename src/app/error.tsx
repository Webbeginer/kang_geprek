"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ textAlign: "center", padding: "80px" }}>
      <h2 className="text-3xl text-red-700">Terjadi Kesalahan 😥</h2>
      <p>{error.message}</p>

      <button onClick={() => reset()}>
        Coba Lagi
      </button>
    </div>
  );
}
