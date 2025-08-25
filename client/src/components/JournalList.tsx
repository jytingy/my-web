import { useEffect, useState } from "react";

interface JournalPage {
  _id: string;
  title: string;
  content: string;
  date?: string;
}

export default function JournalList() {
  const [pages, setPages] = useState<JournalPage[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/journal?p=0")
      .then((res) => res.json())
      .then((data: JournalPage[]) => setPages(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Journal Pages</h1>
      <ul>
        {pages.map((page) => (
          <li key={page._id}>
            <h2>{page.title}</h2>
            <p>{page.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
