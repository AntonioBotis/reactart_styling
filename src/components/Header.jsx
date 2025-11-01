import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header className="flex flex-col items-center text-center mt-10 mb-16 md:mt-16">
            <img
                src={logo}
                alt="A colorful art canvas"
                className="mb-6 w-40 h-40 md:w-52 md:h-52 object-contain drop-shadow-lg"
            />
            <h1 className="text-5xl md:text-6xl font-bold tracking-widest uppercase text-amber-800 font-title">
                ReactArt
            </h1>
            <p className="text-stone-600 mt-3 text-lg">
                A community of artists and art-lovers.
            </p>
        </header>
    );
}
