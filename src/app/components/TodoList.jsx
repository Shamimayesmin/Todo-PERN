"use client";
import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const fetchAllTodos = async () => {
		try {
			const response = await fetch("http://localhost:5000/todos");
			const data = await response.json();
			// console.log("fetch data", data.data);
			setTodos(Array.isArray(data?.data) ? data.data : []);
		} catch (error) {
			console.error("Failed to fetch todos:", error.message);
		}
	};

	useEffect(() => {
		fetchAllTodos();
	}, []);

	// delete todo
	const deleteTodo = async (id) => {
		try {
			const response = await fetch(`http://localhost:5000/todos/${id}`, {
				method: "DELETE",
			});
			setTodos(todos.filter((todo) => todo?.id !== id));
		} catch (error) {
			console.error(error.message);
		}
	};
	return (
		<>
			<div className="overflow-x-auto w-1/2 mx-auto flex flex-col items-center mt-14">
				<table className="table">
					<thead>
						<tr className="text-base">
							<th></th>
							<th>Title</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{todos.length === 0 ? (
							
							<tr>
								<td colSpan="3" className="text-center p-5">
									No todos available.
								</td>
							</tr>
						) : (
						
							todos?.map((todo, index) => (
								<tr key={todo?.id}>
									<th className="p-5">{index + 1}</th>
									<td>{todo?.description}</td>
									
									<th className="w-20 p-1">
									<EditTodo todo={todo} fetchAllTodos={fetchAllTodos}/>
									</th>
									<th className="w-20 p-1">
										<button  onClick={() => deleteTodo(todo?.id)} className="btn btn-ghost btn-sm bg-green-400">
											Delete
										</button>
									</th>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TodoList;
