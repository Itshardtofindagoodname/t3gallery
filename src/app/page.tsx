import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/a16af2c8-8266-4faa-b770-b4c52f61d4cf-2hu7kj.jpg",
  "https://utfs.io/f/3e883d6d-aca1-434e-a6c0-d11419a65091-wwgqun.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      {posts.map((post) => (
        <div key={post.id} className="w-48">
          {post.name}
        </div>
      ))}
      <div className="flex flex-wrap gap-4">{
        [...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + '-'+ index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))
      }</div>
    </main>
  );
}
