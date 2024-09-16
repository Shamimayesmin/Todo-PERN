import React from "react";

const TodoList = () => {
	return (
		<>
			<div className="overflow-x-auto w-1/2 mx-auto flex flex-col items-center">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Title</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
					

						<tr className="">
							<th>2</th>
							<td>Hart Hagerty</td>
							<td>Desktop Support Technician</td>
							<td>Purple</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TodoList;
