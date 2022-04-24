import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("Mario");
	const [isPending, setIsPending] = useState(false);
	const navigate = useNavigate();
	const handleSubmit = e => {
		e.preventDefault();
		setIsPending(true);
		const blog = { title, body, author };
		fetch(`http://localhost:8000/blogs`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			setIsPending(false);
			navigate("/");
		});
	};

	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title :</label>
				{/* prettier-ignore */}
				<input
					type="text"
					required
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<label>Blog body :</label>
				{/* prettier-ignore */}
				<textarea
					required
					value={body}
					onChange={e => setBody(e.target.value)}
				></textarea>
				<label>Blog author :</label>
				{/* prettier-ignore */}
				<select
					value={author}
					onChange={e => setAuthor(e.target.value)}
				>
					<option value="mario">Mario</option>
					<option value="ahmed">Ahmed</option>
				</select>
				{!isPending && <button>Add Blog</button>}
				{isPending && <button>Adding Blog ...</button>}
			</form>
		</div>
	);
};

export default Create;
