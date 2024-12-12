import CarsFilterOption from "@/components/Home/CarsFilterOptions";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";

export default function Home() {
  return (
    <main className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOption />
    </main>
  );
}
