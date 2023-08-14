import {
  Hero,
  Banner,
  Probox,
  NewProducts,
  BestSellers,
  SpecialProduct,
  Blog,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      <Probox />
      <NewProducts />
      <BestSellers />
      <SpecialProduct />
      <Blog />
    </main>
  );
}
