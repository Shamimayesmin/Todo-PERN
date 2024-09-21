"use client";
import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoItem = () => {
	const [todos, setTodos] = useState([]);
	const [description, setDescription] = useState("");
	const [error, setError] = useState("");

	const onSubmitForm = async (e) => {
		e.preventDefault();

		// Input validation
		if (!description.trim()) {
			setError("Input field cannot be empty");
			return;
		}

		try {
			const body = { description };
			const response = await fetch("http://localhost:5000/todos", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

			window.location = "/";

			if (!response.ok) {
				throw new Error(`Server error: ${response.statusText}`);
			}

			const newTodo = await response.json();
			// console.log("Response from server:", newTodo);

			setTodos([...todos, newTodo]);
			setDescription("");
			setError("");
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<>
			<h1 className="text-center mt-11 mb-5 text-2xl text-sky-600 font-bold font-serif">
				Input TODO
			</h1>
			<div className="w-1/2 mx-auto">
				<form className=" p-2 flex justify-center" onSubmit={onSubmitForm}>
					<input
						type="text"
						placeholder="input todo"
						className={`w-1/2 p-3 text-center rounded-sm border-2 ${
							error ? "border-red-500" : ""
						}`}
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
							setError("");
						}}
					/>
					<button
						type="submit"
						className="px-4 bg-blue-500 text-white rounded-sm"
					>
						Add
					</button>
				</form>
				{error && <p className="text-red-500 text-center">{error}</p>}
			</div>
			<TodoList />
		</>
	);
};

export default TodoItem;
