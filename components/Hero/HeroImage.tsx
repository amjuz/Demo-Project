import Image from "next/image";

export default function HeroImage() {
  return (
    <Image
      src={"https://utfs.io/f/6nmS87uGbzIHrMmZYBLv9wKH1FUL0SopGmbjIEVtcMYTdO5e"}
      alt=""
      height={1080}
      width={1920}
      className="absolute left-0 top-0 -z-20 h-full w-full object-cover"
    />
  );
}
