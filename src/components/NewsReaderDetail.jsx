import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import NewsCard from "./NewsCard";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchNewsDataCategoryThree } from "../services/newsAPIService";
import { AiOutlineArrowLeft } from 'react-icons/ai';
export default function NewsReaderDetail() {
  const [news, setNews] = useState([]);
  const location = useLocation();
  const { article } = location.state;  // Get the passed article data
  const navigate = useNavigate();
  useEffect(() => {
    const loadNews = async () => {
      try {

        const categoriesNews = await fetchNewsDataCategoryThree(article?.category[0])
        setNews(categoriesNews);
      }
      catch {
        console.log("Error fetching news data");
      }
    }
    loadNews();
  }, [])
  const handleBackClick = () => {
    navigate(-1);  // Go back to the previous page
  };
  return (
    <div className="container mx-auto p-4 px-24">
      <Header onSearch={() => { }} />
      <button onClick={handleBackClick} className="back-button">
        <AiOutlineArrowLeft size={24}/>
      </button>

      <main className="grid grid-flow-col gap-6">
        <div className="flex flex-col col-span-3">
          <img
            src={article.image_url}
            alt="image"
            className="rounded-2xl mb-2 h-96 w-11/12 object-cover" />
          <a href={article.link} className="text-sm text-gray-500">{article.source_id} - {new Date(article.pubDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}</a>
          <h2 className="text-5xl font-bold mb-2 w-3/4">{article.title}</h2>
          <p className="w-11/12">{article.description.substring(0, 2100)}  </p>
        </div>
        <div className="grid col-span-1 gap-3">
          {news.length > 0 ? (news.map((article, index) => (<NewsCard key={index} article={article} />))) : ""}
        </div>
      </main>
      <Footer />
    </div>
  )
}

