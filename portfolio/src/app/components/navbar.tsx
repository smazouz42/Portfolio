import react from 'react'
import Image from 'next/image';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Navbar() {
	return (
		<nav className='pt-10 mb-12 flex justify-between'>
			<h1 className='text-2xl font-burtons'>Said Mazouz</h1>
			<ul className='flex items-center'>
				<li>
					<BsFillMoonStarsFill className='text-2xl' />
				</li>
				<li>
					<a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a>
				</li>
			</ul>
		</nav>
	)
}