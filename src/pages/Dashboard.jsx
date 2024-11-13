import { Outlet } from "react-router-dom"

const Dashboard = () => {
	return (
		<div className="w-full h-auto overflow-y-auto flex items-center justify-center">
			<Outlet />
		</div>
	)
}

export default Dashboard