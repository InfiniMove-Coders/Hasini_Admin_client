import ContainerDiv from "../components/Others/ContainerDiv";
import { Login } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import EditPreviewCard from "../components/EditProduct/EditPreviewCard";
import EditProductForm from "../components/EditProduct/EditProductForm";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditProduct = () => {

	const navigate = useNavigate();
	const [productData, setProductData] = useState();
	const [imagename, setImagename] = useState();
	const [imageobj, setImageobj] = useState(false);
	const [imageerror, setImageerror] = useState(null);
	const [imageurl, setImageurl] = useState("");
	const imageref = useRef();

	const FetchProductData = () => {

		//code to fetch product data...

		//demo data
		let data = {
			name: "chocolate",
			Units_Box: "23",
			Box_Carton: "34",
			Price: "345",
			OfferPrice: "200",
			UnitPrice: "4",
			Description: "it is good",
			Weight: "23",
			Manufacture: "good",
			Product_Image: "https://picsum.photos/seed/picsum/200/300",
			category: "Biscuit",
		}
		//placing the data into formik
		Object.entries(data).forEach(([k, v]) => {
			formik.values[k] = data[k];
		})
		setImageurl(data["Product_Image"])
		setProductData(data);

	}

	useEffect(() => {
		FetchProductData();
	}, [])

	const handleProductEdit = (data) => {
		data["Product_Image"] = imageobj ? imageobj : imageurl;

		// code to send data to backend....

		console.log(data);

		//After adding the product
		toast.success("Product edited successfully", { theme: "dark" })
		setImagename("");
		setImageobj(false);
		setImageerror(null);
		imageref.current.value = "";
		FetchProductData();

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
		category: Yup.string().required("*select one type")
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
			category: "",
		},
		validationSchema,
		onSubmit: (values) => {
			/* alert(JSON.stringify(values)); */
			if (!imageobj && !imageurl) {
				setImageerror("*Image required");
				return;
			}
			let data = JSON.parse(JSON.stringify(values));
			handleProductEdit(data);
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
						<p className="text-[170%] font-bold text-[#38023B]">Edit Product</p>
					</div>

					<div className="w-full h-auto border-[black] border-[0px] flex flex-row items-start justify-around">
						<EditPreviewCard formik={formik} imageobj={imageobj} imageurl={imageurl} />
						<div className="w-[2px] border-[#D9D9D9] border-[1px] h-[40dvw]"></div>
						<EditProductForm formik={formik} imagename={imagename} setImagename={setImagename} imageobj={imageobj} setImageobj={setImageobj} imageref={imageref} imageerror={imageerror} setImageerror={setImageerror} imageurl={imageurl} setImageurl={setImageurl} FetchProductData={FetchProductData} />
					</div>
				</div>
			</ContainerDiv>
		</>
	)
}

export default EditProduct;