"use client";
import React, { useState } from "react";
// Import the Slate editor factory.
import { createEditor } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";
type Props = {};

const initialValue = [
	{
		type: "paragraph",
		children: [{ text: "A line of text in a paragraph." }],
	},
];
const page = (props: Props) => {
	const [editor] = useState(() => withReact(createEditor()));
    console.log(editor)
	return (
		<div className='w-[70%] mx-auto mt-16 min-h-[500px]'>
			// Add the editable component inside the context.
			<Slate
				editor={editor}
				initialValue={initialValue}
			>
				<Editable />
			</Slate>
		</div>
	);
};

export default page;
