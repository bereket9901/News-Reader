// components/NewsReaderHome.js
import { useState, useEffect } from 'react';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component
import NewsCard from './NewsCard';
import { fetchNewsData, fetchNewsDataCategory, fetchNewsDataCountry, fetchNewsDataSearch } from '../services/newsAPIService';

function NewsReaderHome() {
  const [news, setNews] = useState([])
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true); setSearchQuery
      setError(null);

      try {
        let newsData;

        if (category) {
          newsData = await fetchNewsDataCategory(category);  // Fetch news based on category
        } else if (country) {
          newsData = await fetchNewsDataCountry(country);  // Fetch news based on country
        }
        else if (searchQuery) {
          newsData = await fetchNewsDataSearch(searchQuery);  // Fetch news based on country
        }
        else {
          newsData = await fetchNewsData();  // Default news fetch
        }

        setNews(newsData);
      } catch (error) {
        setError('Failed to load news');
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [category, country, searchQuery]);  // Watch for changes in category and country

  // Handle search input change
  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
    setCountry('');
    setCategory('');
  };

  // Handle category change
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setCountry('');  // Reset country when category is selected
    searchQuery('');
  };

  // Handle country change
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    setCategory('');  // Reset category when country is selected
    setSearchQuery('');
  };

  return (
    <div className="news-reader-home container mx-auto p-4">
      {/*Header Component */}
      <Header onSearch={handleSearch} />

      {/* Categories Section */}
      <div className="categories flex justify-center">
        <select value={category} onChange={handleCategoryChange} className='bg-transparent font-bold text-lg'>
          <option className='font-bold'>All News</option>
          <option className='font-bold' value='business'>Business</option>
          <option className='font-bold' value='crime'>Crime</option>
          <option className='font-bold' value='entertainment'>Entertainment</option>
          <option className='font-bold' value='science'>Science</option>
          <option className='font-bold' value='sport'>Sports</option>
          <option className='font-bold' value='technology'>Technology</option>
        </select>
      </div>
      <select value={country} onChange={handleCountryChange} className='bg-transparent font-bold text-sm mb-12'>
        <option className='font-bold'>Country</option>
        <option className='font-bold' value='us'>United states of america</option>
        <option className='font-bold' value='gb'>United kingdom</option>
        <option className='font-bold' value='et'>Ethiopia</option>
      </select>
      {/* News Content Section */}
      <main className="news-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {!loading ? (news.length > 0 ? (
          news.map((article, index) => (
            <NewsCard  key={index} article={article} />
          ))
        ) : (
          <p className="text-center col-span-3">No news articles found.</p>
        )) : <p className="text-center col-span-3">Loading...</p>}
      </main>

      {/*Footer Component */}
      <Footer />
    </div>
  );
}

export default NewsReaderHome;
