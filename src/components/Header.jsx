// components/Header.js
import { useState } from 'react';

function Header({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <header className="flex justify-between header text-center mb-8">
            <p className="text-md font-bold text-orange-600">Haq News</p>
            {/* Search Form */}
            <form className="flex justify-center mb-4" onSubmit={handleSearch}>
                <input
                    className="bg-transparent p-2 rounded-r-lg"
                    type="text"
                    placeholder="Search news..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-black text-white px-2 rounded-r-lg hover:bg-gray-700" type="submit">
                    Search
                </button>
            </form>
        </header>
    );
}

export default Header;
