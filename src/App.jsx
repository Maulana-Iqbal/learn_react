import { TbBrandGithub } from 'react-icons/tb';
import Button from './components/button';
import Card from './components/Card';

function App() {
	return (
		<div className={'bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen'}>
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
		</div>
	);
}

export default App;
