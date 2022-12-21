function Navlink({ linkText, linkAddress }) {
  return (
    <li
      class='text-sm mr-12 text-black bg-transparent px-4 py-2
      hidden sm:block hover:bg-white'
    >
      <a
        class='cursor-pointer hover:border-b-2  border-black'
        href={linkAddress}
      >
        {linkText}
      </a>
    </li>
  )
}

export default Navlink
