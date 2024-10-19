import { useNavigate } from "react-router-dom";
export default function NewsCard(props) {
    const article = props.article;
    const navigate = useNavigate();
    const handleClick = () => {
        // Navigate to the detailed page with article data
        navigate(`/news/${props.article.article_id}`, { state: { article } });
    };
    return (
        <div className="cursor-pointer" key={props.key} onClick={handleClick}>
            <img src={props.article.image_url} alt={props.article.title} className="w-full h-48 object-cover rounded-2xl" />
            <p className="text-sm text-gray-500">{props.article.source_name} - {new Date(props.article.pubDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
            })}</p>
            <h2 className="text-sm font-bold mb-1">{props.article.title}</h2>
            <p className="text-sm mb-4">{props.article.description?.substring(0, 100)}...</p>
        </div>
    )
}
