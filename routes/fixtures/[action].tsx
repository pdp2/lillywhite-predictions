import { PageProps, Handlers } from "$fresh/server.ts";
import Header from "../../components/Header.tsx";
import LayoutContainer from "../../components/LayoutContainer.tsx";
import AddFixtureRoundForm from "../../components/AddFixtureRoundForm.tsx";

interface Data {
  firstFixtureDate: string;
  lastFixtureDate: string;
}

function getHeadingText(action: string) {
  let result = 'This page does not exist';

  switch (action) {
    case 'new':
      result = 'Create a new round of fixtures';
      break;
    case 'list':
      result = 'Fixture list';
      break;
  }

  return result;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const firstFixtureDate = url.searchParams.get('firstFixtureDate') || '';
    const lastFixtureDate = url.searchParams.get('lastFixtureDate') || '';
    return ctx.render({ firstFixtureDate, lastFixtureDate });
  },
};

export default function FixturesAction(props: PageProps<Data>) {
  const action = props.params.action;
  const headingText = getHeadingText(action);
  const showForm = action === 'new';
  const { firstFixtureDate, lastFixtureDate } = props.data;

  return (
    <>
      <Header />
      <LayoutContainer>
        <h2 
          class="my-6 text-2xl"
        >
          {headingText}
        </h2>
        { showForm ? (
          <AddFixtureRoundForm />
        ) : (
          <h2 
            class="my-5 text-xl"
          >
            <p>{firstFixtureDate}</p>
            <p>{lastFixtureDate}</p>
          </h2>
        )}
      </LayoutContainer>
    </>
  );
}
