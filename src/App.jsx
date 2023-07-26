import { TbBrandTwitter, TbBrandFacebook, TbBrandGithub, TbBrandGoogle } from 'react-icons/tb';
import clsx from 'clsx';
export default function App() {
	const type = 'submit';
	const onClick = () => console.log('Iqbal Maulana Default');
	return (
		<div className={'bg-slate-900 grid place-content-center min-h-screen'}>
			<div className={'flex gap-x-2'}>
				<Button>
					<TbBrandFacebook />
					Login
				</Button>
				<Button className={'bg-black'} onClick={() => console.log('Iqbal Maulana')} type='submit'>
					<TbBrandGithub />
					Login
				</Button>
				<Button className={'bg-sky-600'} onClick={() => console.log('Iqbal Maulana Sky')} type='reset'>
					<TbBrandTwitter />
					Login
				</Button>
				<Button className={'bg-red-600'} onClick={() => console.log('Iqbal Maulana Red')} type='button'>
					<TbBrandGoogle />
					Login
				</Button>
			</div>
		</div>
	);
}

function Button(props) {
	const { className = 'bg-blue-600', children, text, type = 'submit' } = props;
	return (
		<button {...props} type={type} className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex item-center gap-x-3 text-white  px-4 py-2 rounded')}>
			{text || children}
		</button>
	);
}
