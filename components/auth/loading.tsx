import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/logo.png"
        alt="Logo"
        width={150}
        height={150}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
