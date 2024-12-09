import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}:{searchParams: Promise<{query?: string}>}) {
const query = (await searchParams).query;

const posts = [{
  _createdAt: new Date(),
  views: 55,
  author: {_id: 1, name: 'Mihai'},
  description: 'This is a description',
  image: 'a url',
  category: 'Robots',
  title: 'We robots',
}]
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
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : `All Startups`}
        </p>

        <ul className="mt-7 card_grid">
          {posts ?.length > 0 ? (
            posts.map((post: StartUpCardType, index: number) => (
              <StartupCard key={post ?._id} post={post}/>
            ))
          ) : ( 
          <p className="no-results">No Startup found.</p>
          )}
        </ul>

      </section>
    </>
  );
}
