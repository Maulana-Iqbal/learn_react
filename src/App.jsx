import { TbBrandGithub } from 'react-icons/tb';
import Button from './components/button';
import Card from './components/Card';
import PlaceContentCenter from './components/PlaceContentCenter';
import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount((x) => x + 1);
	}
	return (
		<div className={'bg-slate-100 text-slate-800 tracking-tight antialiased flex flex-col gap-4 items-center justify-center min-h-screen'}>
			<div className='max-w-2xl flex items-center gap-4 w-full'>
				<Card>
					<Card.Title>Halo React</Card.Title>
					<Card.Body>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui veritatis praesentium blanditiis neque accusantium excepturi quaerat expedita atque numquam, sit distinctio amet ducimus sapiente eos aliquam labore alias
						architecto ipsa.
					</Card.Body>
					<Card.Footer>
						<Button>
							<TbBrandGithub />
							Login
						</Button>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Title>Halo React</Card.Title>
					<Card.Body>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui veritatis praesentium blanditiis neque accusantium excepturi quaerat expedita atque numquam, sit distinctio amet ducimus sapiente eos aliquam labore alias
						architecto ipsa.
					</Card.Body>
					<Card.Footer>
						<Button>
							<TbBrandGithub />
							Login
						</Button>
					</Card.Footer>
				</Card>
			</div>

			<div className='max-w-2xl flex items-center gap-4 w-full'>
				<PlaceContentCenter>
					<h1 className='text-5xl font-blod'>{count}</h1>
					<div className='mt-5 flex items-center gap-2'>
						<Button onClick={handleClick}>+1 </Button>
						<Button
							onClick={() => {
								handleClick();
								handleClick();
								handleClick();
							}}>
							+3
						</Button>
					</div>
				</PlaceContentCenter>
			</div>
		</div>
	);
}

export default App;
