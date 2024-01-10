import Logo from "../assets/brand_logo.png"
function Nav() {
  return (
    <div className="mb-4">
        <nav className="flex justify-between max-w-6xl h-20 items-center mx-auto my-0">
            <div className="logo"><img src={Logo} alt="logo" />
            </div>
            <ul className="flex gap-x-8">
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button className="p-4 bg-red-600 h-8 text-white font-light mr-2 flex items-center justify-center">Login</button>
        </nav>
    </div>
  )
}

export default Nav