import { Login, Logout } from "@mui/icons-material"
import ContainerDiv from "../components/Others/ContainerDiv"
import { useNavigate } from "react-router-dom"
import AddPreviewCard from "../components/AddProduct/AddPreviewCard";
import AddProductForm from "../components/AddProduct/AddProductForm";


const AddProduct = () => {

	const navigate = useNavigate();

	const back = () => {
		navigate(-1);
	}

	return (
		<>
			<ContainerDiv>
				<div className="w-full min-h-full rounded-[8px] bg-[#FDF7F7] border-[rgba(0,0,0,0.2)] border-[2px] px-[20px] py-[10px] pb-[20px]">

					<div className="w-full h-auto flex flex-row items-center justify-start gap-[20px] bg-[#FDF7F7] sticky top-[-15px] py-[20px]">
						<div className="flex flex-row items-center justify-center gap-[0px] px-[8px] rounded-[10px] py-[1px] border text-[90%] bg-[#133DF6] text-[white] cursor-pointer"
							onClick={back}
						>
							<Login className="scale-[0.7] rotate-180" />
							Back
						</div>
						<p className="text-[170%] font-bold text-[#38023B]">Add Product</p>
					</div>

					<div className="w-full h-auto border-[black] border-[0px] flex flex-row items-center justify-around">
						<AddPreviewCard />
						<AddProductForm />
					</div>

				</div>
			</ContainerDiv>
		</>
	)
}

export default AddProduct