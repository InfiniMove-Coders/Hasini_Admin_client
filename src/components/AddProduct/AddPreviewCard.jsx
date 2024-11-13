import { ShoppingCart, Star } from "@mui/icons-material"


const AddPreviewCard = () => {
	return (
		<div className="w-[30%] border-[black] border-[0px] flex flex-col items-center justify-start gap-[15px]">
			<p className="text-[150%] font-bold underline">AddPreviewCard</p>
			<div className="w-full h-auto bg-white rounded-[6px] p-[10px] flex flex-col items-start justify-start border-[rgba(0,0,0,0.2)] border-[2px] gap-[5px]">
				<div className="w-[100%] h-[20dvw] border-[black] border-[rgba(0,0,0,0.2)] border-[2px] flex items-center justify-center rounded-[8px] overflow-hidden">
					<img src="/images/ProductImages/IMG-20241021-WA0030.jpg" className="h-[100%]" />
				</div>
				<p className="text-[150%] text-[#262626]">Dairy Melts Chocolate bar</p>
				<p className="text-[#686363]">33 Pcs/Box, 24 Box/Carton</p>
				<div className="w-full h-auto flex flex-row items-center justify-between">
					<div className="w-auto h-auto flex flex-row items-center justify-between gap-[10px]">
						<p className="text-[#686363] line-through">&#x20B9;170</p>
						<p className="text-[#133DF6] font-bold">3% off</p>
					</div>
					<div className="w-auto h-auto flex items-center justify-center gap-[2px] px-[5px] bg-[#133DF6] text-[white] scale-[90%] rounded-md">
						<p>4.5</p>
						<Star className="scale-[90%]" />
					</div>
				</div>
				<div className="w-auto h-auto flex flex-row items-center justify-between gap-[10px]">
					<p className="text-[160%] font-bold text-[#262626]">&#x20B9;165</p>
					<p className="font-bold opacity-[90%] scale-[90%]">@&#x20B9;5-per piece</p>
				</div>

				<div className=" bg-[#133df6] rounded-md w-auto h-auto flex flex-row items-center justify-between gap-[15px] px-[15px] py-[5px] text-white m-auto">
					<ShoppingCart />
					<p className="font-bold">Add to Cart</p>
				</div>
			</div>
		</div>
	)
}

export default AddPreviewCard