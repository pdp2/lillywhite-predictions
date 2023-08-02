import { PageProps } from "$fresh/server.ts";
import Header from "../../components/Header.tsx";

export default function Greet(props: PageProps) {
  const action = props.params.action;
  const headingText = action === 'new' ? 'Create a new round of fixtures' : 'This page does not exist'

  return (
    <>
      <Header></Header>
      <div class="p-4 mx-auto max-w-screen-md">
        <h2 class="my-6 text-2xl">{headingText}</h2>
      </div>
    </>
  );
}
