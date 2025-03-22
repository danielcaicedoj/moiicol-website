const TableOfContents = ({ headings }) => {
    return (
        <div className="table-of-contents bg-gray-100 p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-4">Contenido</h2>
            <ul>
                {headings.map((heading) => (
                    <li key={heading.id} style={{ marginLeft: `${heading.level - 1}rem` }}>
                        <a href={`#${heading.id}`} className="text-blue-600 hover:underline">
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TableOfContents;

