import Hello from '../components/hello';

const Home = () => {
	console.log('type of component?');
	return (
		<main>
			<div className="text-3xl font-bold underline">Home</div>
			<Hello />
		</main>
	);
};

export default Home;
