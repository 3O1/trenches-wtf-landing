export default function Home() {
  const tweetContent = encodeURIComponent(
    'fuck it, I enlisted. See you in the trenches mfer 🫡\nhttps://x.com/trenchesdotwtf/status/1831822920064393645'
  );
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${tweetContent}`;

  return (
    <div className="w-full h-screen flex pt-24 md:pt-0 md:items-center justify-center">
      <div>
        <div className="w-full items-center flex justify-center pb-8">
          <div className="space-y-4">
            <img src="/img/logo.svg" alt="" />
            <h2 className="text-black text-center">coming to solana.</h2>
          </div>
        </div>

        <div className="relative md:w-full max-w-3xl border border-appStroke p-1 md:mx-0 mx-4">
          {/* <div className="aspect-w-16 aspect-h-9"> */}
          <div className="md:w-[640px] md:h-[360px] w-full h-[300px]">
            {/* You can adjust these values as needed */}
            <video
              src="/vid/trenches-video.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <div>
            <a
              href={twitterShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-20 text-black border-black border font-bold font-arial"
            >
              share on x
            </a>

            <div className="flex items-center justify-center mt-4">
              <img src="/img/box.svg" alt="" />
              <h2 className="text-sm text-black px-2">
                share to get early access
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
