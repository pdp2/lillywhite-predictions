import { JSX } from "preact";
import { useSignal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

export default function AddFixtureRoundForm(props: JSX.HTMLAttributes<HTMLFormElement>) {
    const fixtureCount = useSignal(1);
    const fixtures = useSignal([1]);

    function addFixtureClick() {
      fixtureCount.value += 1;
      fixtures.value = [...fixtures.value, fixtureCount.value];
    }

    return (
        <form 
          {...props}
          action="/fixtures/list"
          method="post"
        >
          <label for="firstFixtureDate">
            First fixture date
          </label>
          <input 
            type="date"
            name="firstFixtureDate"
            class="block border border-green-700 mb-4"
            required
          />
          <label for="lastFixtureDate">
            Last fixture date
          </label>
          <input 
            type="date"
            name="lastFixtureDate"
            class="block border border-green-700 mb-4"
            required
          />
          {fixtures.value.map(fixtureNumber => (
            <>
              <fieldset class="border-dashed border-2 p-4">
                <legend>Fixture {fixtureNumber}</legend>
                <label for={`fixture${fixtureNumber}HomeTeam`}>
                  Home team
                </label>
                <select 
                  name={`fixture${fixtureNumber}HomeTeam`}
                  class="block border border-green-700 mb-4"
                  required
                >
                  <option value="">Choose home team</option>
                  <option value="arsenal">Arsenal</option>
                </select>
                <label for={`fixture${fixtureNumber}AwayTeam`}>
                  Away team
                </label>
                <select 
                  name={`fixture${fixtureNumber}AwayTeam`}
                  class="block border border-green-700 mb-4"
                  required
                >
                  <option value="">Choose away team</option>
                  <option value="burnley">Burnley</option>
                </select>
              </fieldset>
            </>
          ))}
          <div class="block my-2">
            <Button type="button" onClick={addFixtureClick}>
              Add fixture
            </Button>
          </div>
          <div class="block mb-2">Number of fixtures: {fixtureCount}</div>
          <Button
            type="submit"
          >
            Save
          </Button>
        </form>
    );
}