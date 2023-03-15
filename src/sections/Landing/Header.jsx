function Header() {
  return (
    <div class='flex flex-col justify-between sm:block pt-28 sm:pt-32 tracking-wider h-full'>
      <div>
        <h1 class="text-2xl sm:text-5xl font-['Krona_One'] tracking-tighter mb-6 -ml-1">
          IEDC CEC
        </h1>
        <h3 class='text-sm sm:text-xl mb-6'>
          Innovation And Entrepreneurship <br />
          Development Cell Bootcamp CEC
        </h3>
      </div>
      <button
        id='blogs'
        class='bg-black mt-2 text-sm sm:text-base text-white px-8 py-[10px] 
        rounded-md hover:scale-110 transition'
      >
        See What's New!
      </button>
    </div>
  )
}

export default Header
