export default function NewsCard(props) {
    return (
        <div key={props.key} onClick={() => { }}>
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
