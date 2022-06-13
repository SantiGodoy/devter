import Link from "next/link";

export default function Timeline({ userName }) {
  return (
    <>
      <h1>This is the timeline of {userName}</h1>
      <Link href="/">Go home</Link>
    </>
  );
}

Timeline.getInitialProps = () => {
  return fetch("http://localhost:3000/api/hello").then((res) => res.json());
};
