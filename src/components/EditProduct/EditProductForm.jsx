import { Upload } from "@mui/icons-material"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorAlert from "../Others/ErrorAlert";

const EditProductForm = ({ formik, imagename, setImagename, imageobj, setImageobj, imageref, imageerror, setImageerror, imageurl, setImageurl, FetchProductData }) => {

	const handleImage = (event) => {
		let size = 5 * 1024 * 1024;
		if (event.currentTarget.files.length == 0) {
			return;
		}

		if (event.currentTarget.files && event.currentTarget?.files?.[0]?.size > size) {
			imageref.value = "";
			toast.error("Image size should be less than 5Mb", { theme: "dark" });
		}
		else if (event.currentTarget.files && !event.currentTarget.files?.[0]?.type.includes("image")) {
			imageref.value = "";
			toast.error("File should be image type only", { theme: "dark" });
		}
		else {
			let file = event.currentTarget.files?.[0];
			setImageobj(file);
			setImagename(file.name);
			setImageerror(null);


		}

	}

	return (
		<div className="w-[40%] h-auto border-[black] border-[0px]">

			<p className="text-[150%] font-bold underline text-center">Edit Product</p>

			<form onSubmit={formik.handleSubmit} id="productEditForm">
				<div className="w-full h-auto mt-[10px] border-[black] border-[0px] p-[10px]">

					<input
						type="file"
						name="Product_Image"
						ref={imageref}
						className="hidden"
						onChange={handleImage}
					/>

					<div className="w-full h-[100px] rounded-[8px] border-[#6A6262] border-[3px] border-dashed bg-[#F1DFDF] p-[2px] flex flex-row items-center justify-center cursor-pointer" title="Upload Photo" onClick={() => { imageref.current.click() }}>
						{imageobj
							?
							<img src={URL.createObjectURL(imageobj)} className="h-[100%]" />
							:
							imageurl
								?
								<img src={imageurl} className="h-[100%]" />
								:
								<div className="w-auto h-auto flex flex-col items-center justify-between gap-[5px]">
									<div className="bg-white p-[2px] flex flex-row items-center justify-between gap-[2px] px-[10px] rounded-lg text-[#133DF6] font-[500]">
										<Upload />
										<p>Upload Photo or Drag the File</p>
									</div>
									<p className="text-[#676565]">(Max 5Mb)</p>
								</div>}
					</div>
					{imageerror && !imageobj ? <ErrorAlert>{imageerror}</ErrorAlert> : null}

					<div className="w-full h-auto flex flex-col items-start justify-start gap-[5px] mt-[20px]">
						<label className="text-[#151515]">Category:</label>
						<div className="w-auto h-auto flex flex-row items-center justify-start gap-[10px]">
							<div className="w-auto h-auto flex flex-row items-center justify-between gap-[5px]">
								<input
									type="radio"
									name="category"
									value={"Chocolate"}
									id="category_chocolate"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									checked={formik.values.category == "Chocolate"}

								/>
								<label htmlFor="category_chocolate" className="font-[300] cursor-pointer selection:bg-none">Chocolate</label>
							</div>
							<div className="w-auto h-auto flex flex-row items-center justify-between gap-[5px]">
								<input
									type="radio"
									name="category"
									value={"Biscuit"}
									id="category_biscuit"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									checked={formik.values.category == "Biscuit"}

								/>
								<label htmlFor="category_biscuit" className="font-[300] cursor-pointer selection:bg-none">Biscuit</label>
							</div>
							<div className="w-auto h-auto flex flex-row items-center justify-between gap-[5px]">
								<input
									type="radio"
									name="category"
									value={"Others"}
									id="category_other"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									checked={formik.values.category == "Others"}
								/>
								<label htmlFor="category_other" className="font-[300] cursor-pointer selection:bg-none">Others</label>
							</div>
						</div>
						{formik.touched.category && formik.errors.category ? <ErrorAlert>{formik.errors.category}</ErrorAlert> : null}
					</div>

					{/* name */}
					<div className="w-full h-auto flex flex-col items-start justify-start gap-[5px] mt-[10px]">
						<label className="text-[#151515]">Name:</label>
						<input
							type="text"
							className="w-full bg-transparent border-b-[#7A7272] border-b-[1px] outline-none"
							name="name"
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.name && formik.errors.name ? <ErrorAlert>{formik.errors.name}</ErrorAlert> : null}
					</div>

					{/* Units/Box */}
					<div className="w-full h-auto flex flex-col items-start justify-start gap-[5px] mt-[10px]">
						<label className="text-[#151515]">Units_Box:</label>
						<input
							type="number"
							className="w-full bg-transparent border-b-[#7A7272] border-b-[1px] outline-none"
							name="Units_Box"
							value={formik.values.Units_Box}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.Units_Box && formik.errors.Units_Box ? <ErrorAlert>{formik.errors.Units_Box}</ErrorAlert> : null}
					</div>

					{/* Box/Carton */}
					<div className="w-full h-auto flex flex-col items-start justify-start gap-[5px] mt-[10px]">
						<label className="text-[#151515]">Box_Carton:</label>
						<input
							type="number"
							className="w-full bg-transparent border-b-[#7A7272] border-b-[1px] outline-none"
							name="Box_Carton"
							value={formik.values.Box_Carton}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.Box_Carton && formik.errors.Box_Carton ? <ErrorAlert>{formik.errors.Box_Carton}</ErrorAlert> : null}
					</div>

					{/* Price */}
					<div className="w-full h-auto flex flex-col items-start justify-start gap-[5px] mt-[10px]">
						<label className="text-[#151515]">Price:</label>
						<input
							type="number"
							className="w-full bg-transparent border-b-[#7A7272] border-b-[1px] outline-none"
							name="Price"
							value={formik.values.Price}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.Price && formik.errors.Price ? <ErrorAlert>{formik.errors.Price}</ErrorAlert> : null}
					</div>

					{/* OfferPrice */}
					<div className="w-full h-auto flex flex-col items-start justify-start gap-[5px] mt-[10px]">
						<label className="text-[#151515]">OfferPrice:</label>
						<input
							type="number"
							className="w-full bg-transparent border-b-[#7A7272] border-b-[1px] outline-none"
							name="OfferPrice"
							value={formik.values.OfferPrice}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.OfferPrice && formik.errors.OfferPrice ? <ErrorAlert>{formik.errors.OfferPrice}</ErrorAlert> : null}
					</div>

					{/* UnitPrice */}
					<div className="w-full h-auto flex flex-col items-start justify-start gap-[5px] mt-[10px]">
						<label className="text-[#151515]">UnitPrice:</label>
						<input
							type="number"
							className="w-full bg-transparent border-b-[#7A7272] border-b-[1px] outline-none"
							name="UnitPrice"
							value={formik.values.UnitPrice}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.UnitPrice && formik.errors.UnitPrice ? <ErrorAlert>{formik.errors.UnitPrice}</ErrorAlert> : null}
					</div>

					{/* Description */}
					<div className="w-full h-auto flex flex-col items-start justify-start gap-[5px] mt-[10px]">
						<label className="text-[#151515]">Description:</label>
						<input
							type="text"
							className="w-full bg-transparent border-b-[#7A7272] border-b-[1px] outline-none"
							name="Description"
							value={formik.values.Description}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.Description && formik.errors.Description ? <ErrorAlert>{formik.errors.Description}</ErrorAlert> : null}
					</div>

					{/* Weight */}
					<div className="w-full h-auto flex flex-col items-start justify-start gap-[5px] mt-[10px]">
						<label className="text-[#151515]">Weight:</label>
						<input
							type="text"
							className="w-full bg-transparent border-b-[#7A7272] border-b-[1px] outline-none"
							name="Weight"
							value={formik.values.Weight}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.Weight && formik.errors.Weight ? <ErrorAlert>{formik.errors.Weight}</ErrorAlert> : null}
					</div>

					{/* Manufacture */}
					<div className="w-full h-auto flex flex-col items-start justify-start gap-[5px] mt-[10px]">
						<label className="text-[#151515]">Manufacture:</label>
						<input
							type="text"
							className="w-full bg-transparent border-b-[#7A7272] border-b-[1px] outline-none"
							name="Manufacture"
							value={formik.values.Manufacture}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.Manufacture && formik.errors.Manufacture ? <ErrorAlert>{formik.errors.Manufacture}</ErrorAlert> : null}
					</div>

					<div className="w-full h-auto flex flex-row items-center justify-center gap-[20px] mt-[10px]">
						<div
							className="font-bold px-[10px] py-[1px] rounded-lg border-[rgba(0,0,0,0.5)] border-[1px] bg-[#D9DD9D9] cursor-pointer"
							onClick={() => {
								FetchProductData();
								setImagename("");
								setImageobj(false);
								imageref.current.value = "";

							}}
							id="resetEditForm"

						>
							Reset
						</div>
						<button
							className="font-bold px-[10px] py-[1px] rounded-lg border-[rgba(0,0,0,0.5)] border-[1px] bg-[#D9DD9D9]"
							type="submit"
						>
							Save
						</button>
					</div>

				</div>
			</form>
			<ToastContainer />
		</div>
	)
}

export default EditProductForm