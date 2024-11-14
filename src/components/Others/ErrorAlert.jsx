

const ErrorAlert = ({ children }) => {
	return (
		<p className="text-red-700 text-[90%] font-bold">
			{children}
		</p>
	)
}

export default ErrorAlert