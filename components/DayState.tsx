import Image from "next/image";

function DayState({day}: {day: boolean | undefined}) {
  let image: [string, string, number?] = ["/images/undefined.svg", "undefined", 12];

  if (day === true) image = ["/images/check.svg", "check", 24];
  if (day === false) image = ["/images/x.svg", "x mark", 24];

  const [src, alt, size] = image;
  return(<div className="flex items-center justify-center h-9">
    <Image src={src} width={size} height={12} alt={alt}/>
  </div>);
}

export default DayState