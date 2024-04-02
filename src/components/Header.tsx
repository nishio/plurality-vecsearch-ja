const PROJECT_NAME = process.env.PROJECT_NAME!;

export function Header() {
  return (
    <header className="py-2 px-4 bg-blue-700 text-white shadow-lg">
      <h1 className="text-xl md:text-2xl font-bold">⿻VecSearchJA</h1>
      <p className="text-xs">
        Plurality Vector Search in Japanese from{" "}
        <a
          className="hover:underline"
          href="https://scrapbox.io/omoikane/"
          target="_blank"
        >
          [/{PROJECT_NAME}]
        </a>
      </p>
    </header>
  );
}
