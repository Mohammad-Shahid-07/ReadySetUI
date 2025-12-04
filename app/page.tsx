import Link from "next/link";

export default function Home() {
  const sites = [
    {
      id: "site-a",
      name: "Site A - Modern Startup",
      description: "A clean, modern landing page for startups.",
      subdomain: "site-a",
    },
    {
      id: "site-b",
      name: "Site B - Portfolio",
      description: "A creative portfolio template.",
      subdomain: "site-b",
    },
    {
      id: "puppy-tech",
      name: "Puppy Tech",
      description: "Modern, tech-focused puppy food startup.",
      subdomain: "puppy-tech",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Ready Set UI</h1>
        <p className="text-xl text-gray-600">
          The Marketplace for Premium Landing Pages.
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sites.map((site) => (
          <div
            key={site.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
              {site.name} Preview
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {site.name}
              </h2>
              <p className="text-gray-600 mb-6">{site.description}</p>
              <div className="flex flex-col gap-3">
                {/* 
                  In production, this would link to https://site-a.readysetui.vercel.app 
                  For local testing, we can link to /site/site-a
                */}
                <a
                  href={`http://${site.subdomain}.localhost:3000`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Visit Subdomain (Localhost Config Required)
                </a>
                <Link
                  href={`/site/${site.subdomain}`}
                  className="block w-full text-center bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Preview (Direct Route)
                </Link>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
