import { JSX } from "preact";

export default function LayoutContainer(props: JSX.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
          {...props}
          class="p-4 mx-auto max-w-screen-md"
        />
    )
}