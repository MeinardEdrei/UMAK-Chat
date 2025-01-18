import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <section className="flex justify-center items-center w-full h-full">
        <div className="w-[30vw] space-y-16">
          <div className="flex flex-col justify-center items-center gap-4">
            <Image 
              src='/umak_logo.png'
              width={100}
              height={100}
              alt='Logo'
            />
            <div className="flex flex-col items-center gap-3">
              <h1 className="font-bold text-2xl">UMAK Chat</h1>
              <p className="">Connect with UMak Students</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <input 
              placeholder="Interests (Optional)"
              className="outline-none bg-white py-2 px-2 border border-black/20 rounded-md"
            />
            <button
              className="bg-blue-900 font-medium py-2 text-sm text-white rounded-md"
            >
              Start Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
