import { useMatches } from "react-router";

export default function SetPageTitle(): JSX.Element {
  const matches = useMatches();
  const matchedRoutes = matches.filter((match) => Boolean((match.handle as any)?.title));
  if (!matchedRoutes.length) return <></>;

  const currentRoute = matchedRoutes.slice(-1)[0];

  const title = (currentRoute as any).handle.title();

  document.title = title + " | Smart Meter Logger";

  return <></>;
}
