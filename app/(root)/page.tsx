
import Hello from "../components/hello";

export default function Home() {
console.log("Server component, I am!");

  return (
    <>
      <h1 className="text-3xl">Welcome to Startup Finder!</h1>
      <Hello />
    </>
  );
}

// moved homepage page.tsx into app/(root)
