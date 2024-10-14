import Image from "next/image";
import Bounded from "./Bounded";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col justify-end">
      <Image
        src={
          "https://utfs.io/f/6nmS87uGbzIHrMmZYBLv9wKH1FUL0SopGmbjIEVtcMYTdO5e"
        }
        alt=""
        height={1080}
        width={1920}
        className="absolute left-0 top-0 -z-20 h-full md:object-cover"
      />

      <Bounded className=" text-white">
        <div className=" flex h-[232px] max-w-[1172px] gap-[38px] flex-col mb-[140px]">
          <h2 className="font-poppins text-[54px] font-medium  ">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="font-poppins text-[18px] max-w-[1028px] w-full  font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            enim, laudantium similique velit ad cum? Unde iure iste dicta
            voluptatem error, beatae voluptatibus officia laborum tempora
            dolores repellendus distinctio. Ducimus!
          </p>
        </div>
      </Bounded>
    </div>
  );
}
