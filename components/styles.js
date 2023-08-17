const styles = {
  h1: "text-heading_color font-[500] text-xl md:text-3xl",
  h2: "text-heading_color font-semibold text-2xl",
  h3: "text-heading_color font-semibold text-xl",
  h4: "text-heading_color font-[500] text-base xl:text-xl",

  heroHeading: `text-heading_color font-semibold text-xl sm:text-3xl md:text-4xl`,

  paddingX: "px-4 md:px-6",

  btn_primary: `bg-primary_btn_bg text-primary_btn_text rounded-tr-2xl rounded-bl-2xl uppercase font-semibold hover:rounded-none transition-all duration-300 hover:bg-primary_btn_bg_hover hover:text-primary_btn_text_hover hover:rounded-br-2xl hover:rounded-tl-2xl text-[10px] sm:text-xs px-3 py-2 sm:px-4 sm:py-2 md:py-2 md:px-6 md:text-sm`,

  btn_secondary: `px-6 py-2 bg-secondary_btn_bg text-secondary_btn_text rounded-tr-2xl rounded-bl-2xl uppercase font-semibold text-sm hover:rounded-none transition-all duration-300 hover:bg-primary_btn_bg_hover hover:text-primary_btn_text_hover hover:rounded-br-2xl hover:rounded-tl-2xl`,

  btn_rounded_secondary: `px-6 py-2 bg-secondary_btn_bg text-secondary_btn_text rounded-2xl uppercase font-semibold text-sm hover:rounded-none transition-all duration-300 hover:bg-secondary_btn_bg_hover hover:text-secondary_btn_text_hover`,

  dropContainer: `overflow-hidden absolute top-[150%] transition-all duration-300 shadow-md z-30 bg-white`,

  // filter

  filterHeading: `mb-3 lg:text-heading_color cursor-pointer text-base uppercase font-[500] lg:text-lg flex justify-between items-center lg:cursor-default`,
  filterLevel: `flex capitalize items-center justify-between cursor-pointer mt-2`,
  inputContainer: `relative min-w-[16px] min-h-[16px] h-[12px] border peer-checked:border-primary rounded-full border-heading_color border-solid text-secondary`,
  filterInput: `appearance-none peer`,
  filterChecked: `w-full h-full absolute top-0 left-0 invisible peer-checked:visible`,
  inputText: "ml-3 line-clamp-1 white-space-nowrap",

  // laoder
  loaderLine: "bg-gray-200 animate-pulse rounded-[99px]",
  loaderBox: "bg-gray-200 animate-pulse rounded",

  // global input label styles
  input: `w-full border py-1 px-4 outline-none focus-within:border-black`,
  label: `title min-w-[150px] block mb-2 text-heading_color font-[500]`,
  inputErrorText: "text-red-500 text-sm mt-2",
  inputErrorBorder: "border border-red-500",

  shadow: `shadow-[0_3px_11px_0px_0] shadow-gray-200`,
};

export default styles;
