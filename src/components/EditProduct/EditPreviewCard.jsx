import { Image, ShoppingCart, Star } from "@mui/icons-material"

const EditPreviewCard = ({ imageobj, formik, imageurl }) => {
	return (
		<div className="w-[25%] border-[black] border-[0px] flex flex-col items-center justify-start gap-[15px] sticky top-[50px]">
			<p className="text-[150%] font-bold underline">EditPreviewCard</p>
			<div className="w-full h-auto bg-white rounded-[6px] p-[10px] flex flex-col items-start justify-start border-[#D9D9D9] border-[2px] gap-[5px]">
				<div className="w-[100%] h-[15dvw] border-[#D9D9D9] border-[1px] flex items-center justify-center rounded-[8px] overflow-hidden">
					{imageobj
						?
						<img src={URL.createObjectURL(imageobj)} className="max-h-[100%]" />
						:
						imageurl
							?
							<img src={imageurl} className="max-h-[100%]" />
							:
							<Image />

					}

				</div>
				<p className="text-[150%] text-[#262626]">{formik.values.name ? formik.values.name : "Name"}</p>
				<p className="text-[#686363]">
					{formik.values.Units_Box ? formik.values.Units_Box : "XX"} Pcs/Box, {formik.values.Box_Carton ? formik.values.Box_Carton : "XX"} Box/Carton
				</p>
				<div className="w-full h-auto flex flex-row items-center justify-between">
					<div className="w-auto h-auto flex flex-row items-center justify-between gap-[10px]">
						<p className="text-[#686363] line-through">
							&#x20B9;{formik.values.Price ? formik.values.Price : "XXX"}
						</p>
						<p className="text-[#133DF6] font-bold">3% off</p>
					</div>
					<div className="w-auto h-auto flex items-center justify-center gap-[2px] px-[5px] bg-[#133DF6] text-[white] scale-[90%] rounded-md">
						<p>4.5</p>
						<Star className="scale-[90%]" />
					</div>
				</div>
				<div className="w-auto h-auto flex flex-row items-center justify-between gap-[10px]">
					<p className="text-[160%] font-bold text-[#262626]">
						&#x20B9;{formik.values.OfferPrice ? formik.values.OfferPrice : "XX"}
					</p>
					<p className="font-bold opacity-[90%] scale-[90%]">
						@&#x20B9;{formik.values.UnitPrice ? formik.values.UnitPrice : "XX"}-per piece
					</p>
				</div>

				<div className=" bg-[#133df6] rounded-md w-auto h-auto flex flex-row items-center justify-between gap-[15px] px-[15px] py-[5px] text-white m-auto">
					<ShoppingCart />
					<p className="font-bold">Add to Cart</p>
				</div>
			</div>
		</div>
	)
}

export default EditPreviewCard