const FacebookBtn = () => {
  return (
    <button
      type="button"
      className="flex justify-center items-center py-2.5 px-5 w-full text-sm font-normal tracking-wider text-center text-white bg-[#3b5998] rounded-lg focus:ring-4"
    >
      <svg
        className="mr-2 -ml-1 w-4 h-4"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="facebook-f"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
        ></path>
      </svg>
      シェア
    </button>
  );
};

export default FacebookBtn;