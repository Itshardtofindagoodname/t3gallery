import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/a16af2c8-8266-4faa-b770-b4c52f61d4cf-2hu7kj.jpg",
  "https://utfs.io/f/3e883d6d-aca1-434e-a6c0-d11419a65091-wwgqun.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        [...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))
      }</div>
    </main>
  );
}
