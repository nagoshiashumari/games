App = React.createClass({
	getTests() {
		return [
			{ _id: 1, text: "This is task 1"},
			{ _id: 2, text: "This is task 2"},
			{ _id: 3, text: "This is task 3"}
		]
	},

	renderTasks() {
		return this.getTests().map((task) => {
			return <Task key={task._id} task ={task} />;
		})
	},

	render() {
		return (
			<div className="container">
				<header>
					<h1>ToDo</h1>
				</header>
				<ul>
					{this.renderTasks()}
				</ul>
			</div>
		);
	}
});
