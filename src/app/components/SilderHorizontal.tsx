interface SliderHorizontalProps {
  text?: string
  bg?: string
}

const SliderHorizontal: React.FC<SliderHorizontalProps> = ({
  text = 'Nuestros ingresantes demuestran nuestra calidad',
  bg = 'bg-blue-900'
}) => {
  return (
    <div className={`
      mt-3
      w-full
      h-[70px]
      ${bg}
      flex items-center
      justify-center
      sm:text-3xl
      md:text-4xl
      text-xl
      text-white
      text-center
      border-0
      rounded-xl
    `}>
      {text}
    </div >
  );
}

export default SliderHorizontal;