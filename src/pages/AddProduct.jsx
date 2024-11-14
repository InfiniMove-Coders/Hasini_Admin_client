import { Login } from "@mui/icons-material"
import ContainerDiv from "../components/Others/ContainerDiv"
import { useNavigate } from "react-router-dom"
import AddPreviewCard from "../components/AddProduct/AddPreviewCard";
import AddProductForm from "../components/AddProduct/AddProductForm";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

	const navigate = useNavigate();
	const [imagename, setImagename] = useState();
	const [imageobj, setImageobj] = useState(false);
	const [imageerror, setImageerror] = useState(null);
	const imageref = useRef();

	const handleProductAdd = (data) => {
		data["Product_Image"] = imageobj;
		if (document.getElementById("category_chocolate").checked) {
			data["category_chocolate"] = "chocolate";
		}
		if (document.getElementById("category_biscuit").checked) {
			data["category_biscuit"] = "biscuit";
		}
		if (document.getElementById("category_other").checked) {
			data["category_other"] = "other";
		}

		// code to send data to backend....

		console.log(data);
		alert(data);
		//After adding the product
		toast.success("Product added successfully", { theme: "dark" })
		setImagename("");
		setImageobj(false);
		setImageerror(null);
		imageref.current.value = "";
		formik.resetForm();
		document.getElementById("resetAddForm").click();

	}

	const validationSchema = Yup.object({
		name: Yup.string().required("*required"),
		Units_Box: Yup.number().required("*required"),
		Box_Carton: Yup.number().required("*required"),
		Price: Yup.number().required("*required"),
		OfferPrice: Yup.number().required("*required"),
		UnitPrice: Yup.number().required("*required"),
		Description: Yup.string().required("*required"),
		Weight: Yup.number().required("required"),
		Manufacture: Yup.string().required("*required"),
	})

	const formik = useFormik({
		initialValues: {
			name: "",
			Units_Box: "",
			Box_Carton: "",
			Price: "",
			OfferPrice: "",
			UnitPrice: "",
			Description: "",
			Weight: "",
			Manufacture: "",
		},
		validationSchema,
		onSubmit: (values) => {
			/* alert(JSON.stringify(values)); */
			if (!imageobj) {
				setImageerror("*Image required");
				return;
			}
			handleProductAdd(values);
		}
	})

	const back = () => {
		navigate(-1);
	}

	return (
		<>
			<ContainerDiv>
				<div className="w-full min-h-full rounded-[8px] bg-[#FDF7F7] border-[rgba(0,0,0,0.2)] border-[2px] px-[20px] py-[10px] pb-[20px]">

					<div className="w-full h-auto flex flex-row items-center justify-start gap-[20px] bg-[#FDF7F7] sticky top-[-15px] pt-[20px] z-[2]">
						<div className="flex flex-row items-center justify-center gap-[0px] px-[8px] rounded-[10px] py-[1px] border text-[90%] bg-[#133DF6] text-[white] cursor-pointer"
							onClick={back}
						>
							<Login className="scale-[0.7] rotate-180" />
							Back
						</div>
						<p className="text-[170%] font-bold text-[#38023B]">Add Product</p>
					</div>

					<div className="w-full h-auto border-[black] border-[0px] flex flex-row items-center justify-around">
						<AddPreviewCard formik={formik} imageobj={imageobj} />
						<div className="w-[2px] border-[#D9D9D9] border-[1px] h-[40dvw]"></div>
						<AddProductForm formik={formik} imagename={imagename} setImagename={setImagename} imageobj={imageobj} setImageobj={setImageobj} imageref={imageref} imageerror={imageerror} setImageerror={setImageerror} />
					</div>

				</div>
			</ContainerDiv>
		</>
	)
}

export default AddProduct