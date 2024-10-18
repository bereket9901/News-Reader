// components/NewsReaderHome.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component
import NewsCard from './NewsCard';

function NewsReaderHome() {
  const [news, setNews] = useState([{
    title: "UN Calls for Urgent Ceasefire as Middle East Tensions Rise",
    url: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    imageURL: "https://townsquare.media/site/942/files/2024/10/attachment-s-22.jpg?format=natural",
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
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchNews();
  }, [category]);

  const fetchNews = async (searchQuery = '') => {
    try {
      const response = await axios.get(`https://newsdata.io/api/1/latest?apikey=pub_5533188998eb573b65585fb63581120da41e4&q=pizza`, {
        params: {
          country: 'us', // You can replace with targeted country
          category: category || '',
          q: searchQuery || '',
          apiKey: 'your_news_api_key', // Replace with your NewsAPI key
        },
      });
      setNews(response.data.articles);
    } catch (error) {
      console.error('Error fetching the news:', error);
    }
  };

  const handleSearch = (searchQuery) => {
    fetchNews(searchQuery);
  };

  return (
    <div className="news-reader-home container mx-auto p-4">
      {/*Header Component */}
      <Header onSearch={handleSearch} />

      {/* Categories Section */}
      <div className="categories flex justify-center">
        <select className='bg-transparent font-bold text-lg'>
          <option className='font-bold'>All News</option>
        </select>
      </div>
      <select className='bg-transparent font-bold text-sm mb-12'>
        <option className='font-bold'>Sources</option>
      </select>
      {/* News Content Section */}
      <main className="news-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {news.length > 0 ? (
          news.map((article, index) => (
            <NewsCard key={index}  article={article} />
          ))
        ) : (
          <p className="text-center col-span-3">No news articles found.</p>
        )}
      </main>

      {/*Footer Component */}
      <Footer />
    </div>
  );
}

export default NewsReaderHome;
