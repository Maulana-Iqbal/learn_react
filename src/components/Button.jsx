import clsx from 'clsx';
import { TbBrandGithub } from 'react-icons/tb';
export default function Button(props) {
	const { className = 'bg-blue-600', children, text, type = 'submit' } = props;
	return (
		<button {...props} type={type} className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex item-center gap-x-3 text-white  px-4 py-2 rounded')}>
			{text || children}
		</button>
	);
}
