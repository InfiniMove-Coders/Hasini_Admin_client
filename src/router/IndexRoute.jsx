import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import EditProduct from "../pages/EditProduct"
import AddProduct from "../pages/AddProduct"


const IndexRoute = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dashboard" element={<Dashboard />} >
				<Route path="edit" element={<EditProduct />} />
				<Route path="add" element={<AddProduct />} />
			</Route>
		</Routes>
	)
}

export default IndexRoute