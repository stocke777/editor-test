"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
type Props = {};

const page = (props: Props) => {
	const [value, setValue] = useState("");
    console.log(value)
	return (
        <div className="w-[70%] mx-auto mt-16 min-h-[500px]">
		<ReactQuill
			theme='snow'
			value={value}
			onChange={setValue}
		/>
        </div>
	);
};

export default page;
