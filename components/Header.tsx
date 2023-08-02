import { Head } from "$fresh/runtime.ts";
import { Link } from "../components/Link.tsx";

export default function Header() {
    return (
        <>
          <Head>
            <title>Football Scores Prediction League</title>
          </Head>
          <div class="p-4 mx-auto max-w-screen-md">
              <a href="/">
                <img
                  src="/lillywhite-foundation-logo.jpeg"
                  class="w-40"
                  alt="the lillywhite foundation logo"
                />
              </a>
              <h1 class="my-6 text-3xl">
                Football Scores Prediction League
              </h1>
              <Link href="/fixtures/new">
                Add new round of fixtures
              </Link>
          </div>
        </>
    )
}