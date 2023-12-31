import Link from "next/link";

export default function Home() {
  
	return (
		<main className='flex min-h-screen flex-col items-center justify-start p-24'>
			<Link href="/quill">Quill</Link>
			<Link href="/jodit">Jodit</Link>
			<Link href="/slate">Slate</Link>
			<Link href="/slateadvance">Slate Advanced</Link>

		</main>
	);
}
