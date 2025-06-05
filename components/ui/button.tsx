
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { ReactNode } from 'react'

interface ButtonProps {
	label: ReactNode | string
	secondary?: boolean
	fullWidth?: boolean
	large?: boolean
	disabled?: boolean
	outline?: boolean
	type?: 'button' | 'submit'
	onClick?: () => void
	classNames?: string
	isLoading?: boolean
	roundedNone?: boolean
	active?: boolean 
}

export default function Button({
	label,
	disabled,
	fullWidth,
	large,
	onClick,
	outline,
	secondary,
	active,
	type,
	classNames,
	isLoading,
	roundedNone
}: ButtonProps) {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			type={type}
			className={cn(
				'cursor-pointer font-semibold border transition hover:opacity-80 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center',
				fullWidth ? 'w-full' : 'w-fit',
				active && "opacity-80",
				secondary ? 'bg-white text-black' : 'bg-sky-500 text-white',
				large ? 'text-xl px-5 py-3' : 'text-md md:px-4 md:py-3 py-1 px-2',
				outline ? 'bg-transparent border-slate-600 text-sky-500 hover:bg-slate-800/40' : '',
				roundedNone ? "rounded-sm" : "rounded-full", 
				classNames
			)}
		>
			<span>{label}</span>
			{isLoading && <Loader2 className='w-4 h-4 ml-2 animate-spin' />}
		</button>
	)
}
