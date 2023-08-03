import { JSX } from "preact";
import { Button } from "./Button.tsx";

export default function AddFixtureRoundForm(props: JSX.HTMLAttributes<HTMLFormElement>) {
    return (
        <form 
          {...props}
          action="/fixtures/list"
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
          <Button
            type="submit"
          >
            Add
          </Button>
        </form>
    );
}