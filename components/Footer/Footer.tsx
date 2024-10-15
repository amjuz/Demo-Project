import Bounded from "../Bounded";

export default function Footer() {
  return (
    <div className="relative flex min-h-[450px] items-center justify-center text-white hidden">
      <div className="absolute -z-10 h-full w-full bg-[#002A3A]">

      </div>
      <Bounded className="flex flex-col">
        <div className=""></div>
        <div className="flex ">
            <div className="basis-[35%] border-4">hey</div>
            <div className="basis-[30%] border-4">hey</div>
            <div className="basis-[35%] border-4">hey</div>
        </div>
        <div className=""></div>
      </Bounded>
    </div>
  )
}
