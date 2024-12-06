import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}:{searchParams: Promise<{query?: string}>}) {
const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Stratup <br /> Connect with entrepreneurs.
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on pitches, and Get noticed in virtual
          competitions!
        </p>
        <SearchForm query={query}/>
      </section>
    </>
  );
}
