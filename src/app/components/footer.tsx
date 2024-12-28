import Link from 'next/link';
export default function Footer() {
    return (
        

<footer className="bg-white rounded-lg shadow m-4 light:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center light:text-gray-400">© 2024 <a href="https://firststep.uno/" className="hover:underline">FIRSTSTEP™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 light:text-gray-400 sm:mt-0">
        <li>
            <Link href="#" className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

    );
}