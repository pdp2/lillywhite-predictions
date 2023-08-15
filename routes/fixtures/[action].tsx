import { PageProps, Handlers } from "$fresh/server.ts";
import Header from "../../components/Header.tsx";
import LayoutContainer from "../../components/LayoutContainer.tsx";
import AddFixtureRoundForm from "../../islands/AddFixtureRoundForm.tsx";

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

let firstFixtureDate = '';
let lastFixtureDate = '';

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    console.log('GET', req);
    return await ctx.render({ firstFixtureDate, lastFixtureDate });
  },
  async POST(req, ctx) {
    console.log('POST =======', req);
    console.log('POST =======', ctx);
    const form = await req.formData();
    firstFixtureDate = form.get('firstFixtureDate')?.toString() || '';
    lastFixtureDate = form.get('lastFixtureDate')?.toString() || '';
    
    return await ctx.render({firstFixtureDate, lastFixtureDate});
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
