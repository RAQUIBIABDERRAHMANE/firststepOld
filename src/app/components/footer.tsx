import Link from 'next/link';
export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow m-4 light:bg-gray-800 flex ">
            <div className="w-full flex flex-col mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center light:text-gray-400 mb-3">© 2024 <a href="https://firststep.uno/" className="hover:underline">FIRSTSTEP™</a>. All Rights Reserved.
                </span>
                <ul className="mb-4  flex flex-wrap items-center mr-8 text-sm font-medium text-gray-500 light:text-gray-400 sm:mt-0">
                    {/* <li>
                        <Link href="#" className="hover:underline me-4 md:me-6">Facebook</Link>
                    </li> */}
                    <li>
                        <a href="https://www.instagram.com/firststep.uno/" target="_blank" className="hover:underline me-4 md:me-6">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UC1jjsmOac2Ivw831NtHJmag/" className="hover:underline me-4 md:me-6">Youtube</a>
                    </li>
                </ul>
                <ul className="flex flex-wrap items-center mt-3 mr-8 text-sm font-medium text-gray-500 light:text-gray-400 sm:mt-0">
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
            <div className='w-full flex flex-col mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
                <h4 className='text-gray-500'>Contact</h4>
                <p><Link href="tel:+212665830816" target='_blank' className='hover:underline'>+212665830816</Link></p>
                <p><Link href="mailto:support@firststep.uno" target='_blank' className='hover:underline'>support@firststep.uno</Link></p>
            </div>
        </footer>

    );
}