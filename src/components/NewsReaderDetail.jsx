import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import NewsCard from "./NewsCard";

export default function NewsReaderDetail() {
  const [news, setNews] = useState([{
    title: "UN Calls for Urgent Ceasefire as Middle East Tensions Rise",
    url: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    imageURL: "https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2023/10/AA-20231010-32360303-32360302-ISRAELI_AIRSTRIKES_CONTINUE_ON_GAZA.jpg?fit=1200%2C800&ssl=1",
    publishedAt: "2024-10-04 19:44:43",
    source: "Defenseworld Net",
  }, {
    title: "UN Calls for Urgent Ceasefire as Middle East Tensions Rise",
    url: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    imageURL: "https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2023/10/AA-20231010-32360303-32360302-ISRAELI_AIRSTRIKES_CONTINUE_ON_GAZA.jpg?fit=1200%2C800&ssl=1",
    publishedAt: "2024-10-04 19:44:43",
    source: "Defenseworld Net",
  }, {
    title: "UN Calls for Urgent Ceasefire as Middle East Tensions Rise",
    url: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    imageURL: "https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2023/10/AA-20231010-32360303-32360302-ISRAELI_AIRSTRIKES_CONTINUE_ON_GAZA.jpg?fit=1200%2C800&ssl=1",
    publishedAt: "2024-10-04 19:44:43",
    source: "Defenseworld Net",
  }]);
  const [mainNews, setMainNews] = useState({
    title: "UN Calls for Urgent Ceasefire as Middle East Tensions Rise",
    url: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    imageURL: "https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2023/10/AA-20231010-32360303-32360302-ISRAELI_AIRSTRIKES_CONTINUE_ON_GAZA.jpg?fit=1200%2C800&ssl=1",
    publishedAt: "2024-10-04 19:44:43",
    source: "Defenseworld Net",
  });
  return (
    <div className="container mx-auto p-4">
      <Header onSearch={() => { }} />
      <main className="grid grid-flow-col gap-6">
        <div className="flex flex-col col-span-3">
          <img
            src="https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2023/10/AA-20231010-32360303-32360302-ISRAELI_AIRSTRIKES_CONTINUE_ON_GAZA.jpg?fit=1200%2C800&ssl=1"
            alt="image"
            className="rounded-2xl mb-2 h-96 w-11/12 object-cover" />
          <p className="text-sm text-gray-500">{mainNews.source} - {new Date(mainNews.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}</p>
          <h2 className="text-5xl font-bold mb-2 w-3/4">UN Calls for Urgent Ceasefire as Middle East Tensions Rise</h2>
          <p className="w-11/12">Hours after Iran fired a reported 200 missiles at Israel in response to Israeli military incursions in southern Lebanon raising fears of a wider Middle East escalation, UN human rights chief Volker Türk insisted on Wednesday that “peace must prevail” in the Middle East, while UN Member States meeting in Geneva reiterated calls for a ceasefire in Gaza and beyond.
            In the Lebanese capital, UN humanitarians reported “another night of strikes” and ongoing attacks, as aid workers continued trying to help all those in need. This was “despite their own families being displaced and searching for safety”, said the UN’s top humanitarian coordinator in Lebanon, Imran Riza. “Another sleepless night in Beirut. Counting the blasts shaking the city. No warning sirens. Not knowing what’s next. Only that uncertainty lies ahead. Anxiety and fear are omnipresent,” said Jeanine Hennis, UN Special Coordinator for Lebanon.</p>
        </div>
        <div className="grid col-span-1 gap-3">
          {news.length > 0 ? (news.map((article, index) => (<NewsCard key={index} article={article} />))) : ""}
        </div>
      </main>
      <Footer />
    </div>
  )
}

