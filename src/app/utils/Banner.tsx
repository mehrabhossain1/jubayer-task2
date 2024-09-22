import Image from "next/image";

const Banner = () => {
  return (
    <Image
      src="https://graphicsfamily.com/wp-content/uploads/edd/2021/10/Business-Website-Banner-Design-scaled.jpg"
      alt="Banner"
      width={700}
      height={100}
      className="w-full"
      quality={100}
      unoptimized
    />
  );
};

export default Banner;
