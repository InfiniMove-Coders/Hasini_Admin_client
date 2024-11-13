

const ContainerDiv = ({ children }) => {
	return (
		<div className="w-full h-screen border-[black] border-[0px] overflow-hidden px-[5dvw] py-[2dvw]">
			<div className="w-full h-full border-[rgba(0,0,0,0.2)] border-[2px] rounded-[10px] p-[1dvw] overflow-y-auto">
				{children}
			</div>
		</div>
	)
}

export default ContainerDiv;