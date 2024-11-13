import { Outlet } from "react-router-dom"

const Dashboard = () => {
	return (
		<div className="w-full h-auto overflow-y-auto border">
			<Outlet />
		</div>
	)
}

export default Dashboard