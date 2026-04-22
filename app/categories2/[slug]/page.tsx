import { Suspense } from "react";
import { CategoriesClient } from "../CategoriesClient";

export const dynamic = 'force-dynamic'; // Add this for good measure

export default function CategoryPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoriesClient />
    </Suspense>
  );
}