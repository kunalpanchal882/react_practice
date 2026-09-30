const DashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-black text-white animate-pulse">

      {/* ================= NAVBAR ================= */}
      <nav className="h-16 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-6">

        {/* Logo skeleton */}
        <div className="h-7 w-28 bg-zinc-800 rounded-lg"></div>

        {/* Nav links skeleton */}
        <div className="hidden md:flex items-center gap-8">
          <div className="h-4 w-20 bg-zinc-800 rounded"></div>
          <div className="h-4 w-20 bg-zinc-800 rounded"></div>
          <div className="h-4 w-16 bg-zinc-800 rounded"></div>
          <div className="h-4 w-20 bg-zinc-800 rounded"></div>
        </div>

        {/* Logout skeleton */}
        <div className="h-9 w-20 bg-zinc-800 rounded-lg"></div>

      </nav>


      {/* ================= MAIN ================= */}
      <main className="p-6 md:p-8">

        {/* Heading */}
        <div className="mb-8">

          <div className="h-4 w-24 bg-zinc-800 rounded mb-3"></div>

          <div className="h-9 w-64 bg-zinc-800 rounded-lg"></div>

          <div className="h-4 w-80 bg-zinc-800 rounded mt-3"></div>

        </div>


        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

          {/* BIG CARD */}
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            {/* Card heading */}
            <div className="flex justify-between items-center mb-6">

              <div>
                <div className="h-6 w-32 bg-zinc-800 rounded"></div>
                <div className="h-3 w-44 bg-zinc-800 rounded mt-2"></div>
              </div>

              <div className="h-9 w-20 bg-zinc-800 rounded-lg"></div>

            </div>


            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <div className="bg-black border border-zinc-800 rounded-xl p-4">
                <div className="h-3 w-16 bg-zinc-800 rounded"></div>
                <div className="h-7 w-12 bg-zinc-800 rounded mt-3"></div>
              </div>

              <div className="bg-black border border-zinc-800 rounded-xl p-4">
                <div className="h-3 w-16 bg-zinc-800 rounded"></div>
                <div className="h-7 w-12 bg-zinc-800 rounded mt-3"></div>
              </div>

              <div className="bg-black border border-zinc-800 rounded-xl p-4">
                <div className="h-3 w-16 bg-zinc-800 rounded"></div>
                <div className="h-7 w-12 bg-zinc-800 rounded mt-3"></div>
              </div>

              <div className="bg-black border border-zinc-800 rounded-xl p-4">
                <div className="h-3 w-16 bg-zinc-800 rounded"></div>
                <div className="h-7 w-12 bg-zinc-800 rounded mt-3"></div>
              </div>

            </div>

          </div>


          {/* ORANGE CARD */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <div className="h-4 w-24 bg-zinc-800 rounded"></div>

            <div className="h-7 w-48 bg-zinc-800 rounded mt-3"></div>

            <div className="h-3 w-full bg-zinc-800 rounded mt-4"></div>
            <div className="h-3 w-3/4 bg-zinc-800 rounded mt-2"></div>

            <div className="h-10 w-32 bg-zinc-800 rounded-xl mt-6"></div>

          </div>

        </div>


        {/* ================= BOTTOM SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* RECENT ORDERS */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <div className="flex justify-between items-center mb-6">

              <div className="h-6 w-36 bg-zinc-800 rounded"></div>

              <div className="h-4 w-14 bg-zinc-800 rounded"></div>

            </div>


            <div className="space-y-4">

              <div className="bg-black rounded-xl p-4 flex justify-between">
                <div>
                  <div className="h-4 w-28 bg-zinc-800 rounded"></div>
                  <div className="h-3 w-16 bg-zinc-800 rounded mt-2"></div>
                </div>

                <div className="h-4 w-16 bg-zinc-800 rounded"></div>
              </div>


              <div className="bg-black rounded-xl p-4 flex justify-between">
                <div>
                  <div className="h-4 w-28 bg-zinc-800 rounded"></div>
                  <div className="h-3 w-16 bg-zinc-800 rounded mt-2"></div>
                </div>

                <div className="h-4 w-16 bg-zinc-800 rounded"></div>
              </div>


              <div className="bg-black rounded-xl p-4 flex justify-between">
                <div>
                  <div className="h-4 w-28 bg-zinc-800 rounded"></div>
                  <div className="h-3 w-16 bg-zinc-800 rounded mt-2"></div>
                </div>

                <div className="h-4 w-16 bg-zinc-800 rounded"></div>
              </div>

            </div>

          </div>


          {/* PROFILE */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <div className="h-6 w-24 bg-zinc-800 rounded"></div>

            <div className="flex items-center gap-4 mt-6">

              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-zinc-800"></div>

              <div>
                <div className="h-4 w-24 bg-zinc-800 rounded"></div>
                <div className="h-3 w-36 bg-zinc-800 rounded mt-2"></div>
              </div>

            </div>

            <div className="h-11 w-full bg-zinc-800 rounded-xl mt-6"></div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default DashboardSkeleton;