import React from "react";

const TodoList = () => {
	return (
		<>
			<div className="overflow-x-auto w-1/2 mx-auto flex flex-col items-center mt-14">
				<table className="table">
					{/* head */}
					<thead>
						<tr className="text-base">
							<th></th>
							<th>Title</th>
							<th>Actions</th>
							{/* <th>Delete</th> */}
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="p-5">2</th>
							<td>Hart Hagerty gggggggggggggg</td>
							
							<th className="w-20 p-1">
								<button className="btn btn-ghost btn-sm bg-sky-400">Edit</button>
							</th>
							<th className="w-20 p-1">
								<button className="btn btn-ghost btn-sm bg-green-400">Delete</button>
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TodoList;
