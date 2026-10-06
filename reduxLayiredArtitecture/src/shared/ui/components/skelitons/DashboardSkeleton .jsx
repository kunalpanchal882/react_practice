const SkeletonBox = ({ className = "" }) => {
  return (
    <div
      className={`
        relative overflow-hidden
        bg-zinc-800/70
        rounded-lg
        before:absolute
        before:inset-0
        before:-translate-x-full
        before:animate-[shimmer_1.8s_infinite]
        before:bg-gradient-to-r
        before:from-transparent
        before:via-zinc-600/20
        before:to-transparent
        ${className}
      `}
    />
  );
};

const DashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="h-16 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500/30 to-orange-500/5 border border-orange-500/20 relative overflow-hidden">
            <div className="absolute inset-2 rounded-lg bg-orange-500/20" />
          </div>

          <SkeletonBox className="h-6 w-28" />
        </div>

        {/* Nav */}
        <div className="hidden md:flex items-center gap-8">
          <SkeletonBox className="h-4 w-16" />
          <SkeletonBox className="h-4 w-20" />
          <SkeletonBox className="h-4 w-16" />
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <SkeletonBox className="w-9 h-9 rounded-full" />
          <SkeletonBox className="h-9 w-20 rounded-lg" />
        </div>

      </nav>


      {/* ================= MAIN ================= */}
      <main className="p-6 md:p-8 max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="mb-8">

          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-orange-500/40 animate-pulse" />
            <SkeletonBox className="h-3 w-24" />
          </div>

          <SkeletonBox className="h-9 w-72 rounded-xl" />

          <SkeletonBox className="h-4 w-96 max-w-full mt-3" />

        </div>


        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="
                relative overflow-hidden
                bg-zinc-900/70
                border border-zinc-800
                rounded-2xl
                p-5
                backdrop-blur-xl
              "
            >

              {/* orange glow */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-orange-500/5 blur-2xl rounded-full" />

              <div className="flex items-center justify-between mb-5">

                <SkeletonBox className="h-3 w-20" />

                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/10" />

              </div>

              <SkeletonBox className="h-8 w-20 rounded-lg" />

              <div className="flex items-center gap-2 mt-3">
                <SkeletonBox className="h-3 w-12" />
                <SkeletonBox className="h-3 w-16" />
              </div>

            </div>
          ))}

        </div>


        {/* ================= TOP CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">


          {/* ================= ANALYTICS ================= */}
          <div
            className="
              lg:col-span-2
              bg-zinc-900/70
              border border-zinc-800
              rounded-2xl
              p-6
              relative overflow-hidden
              backdrop-blur-xl
            "
          >

            {/* glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-orange-500/5 blur-3xl rounded-full" />

            {/* Header */}
            <div className="relative flex justify-between items-start mb-8">

              <div>
                <SkeletonBox className="h-6 w-36" />
                <SkeletonBox className="h-3 w-48 mt-3" />
              </div>

              <SkeletonBox className="h-9 w-24 rounded-lg" />

            </div>


            {/* Chart */}
            <div className="relative h-56 flex items-end gap-3 px-2">

              {[35, 55, 42, 70, 48, 82, 62, 90, 58, 75, 65, 88].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 h-full flex items-end"
                  >
                    <div
                      style={{ height: `${height}%` }}
                      className="
                        w-full
                        rounded-t-lg
                        bg-gradient-to-t
                        from-zinc-800
                        via-zinc-700
                        to-orange-500/10
                        relative overflow-hidden
                      "
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-orange-500/5" />
                    </div>
                  </div>
                )
              )}

            </div>


            {/* Chart bottom */}
            <div className="flex justify-between mt-4 px-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <SkeletonBox
                  key={item}
                  className="h-2 w-10 rounded"
                />
              ))}
            </div>

          </div>


          {/* ================= QUICK ACTION ================= */}
          <div
            className="
              bg-gradient-to-br
              from-orange-500/10
              via-zinc-900
              to-zinc-950
              border border-orange-500/10
              rounded-2xl
              p-6
              relative overflow-hidden
            "
          >

            {/* Glow */}
            <div className="absolute -right-16 -top-16 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full" />

            <div className="relative">

              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 mb-5" />

              <SkeletonBox className="h-4 w-24" />

              <SkeletonBox className="h-7 w-48 mt-3" />

              <SkeletonBox className="h-3 w-full mt-5" />
              <SkeletonBox className="h-3 w-4/5 mt-2" />

              <SkeletonBox className="h-11 w-full rounded-xl mt-7" />

            </div>

          </div>

        </div>


        {/* ================= BOTTOM ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


          {/* ================= RECENT ORDERS ================= */}
          <div
            className="
              lg:col-span-2
              bg-zinc-900/70
              border border-zinc-800
              rounded-2xl
              p-6
              backdrop-blur-xl
            "
          >

            {/* Header */}
            <div className="flex items-center justify-between mb-6">

              <div>
                <SkeletonBox className="h-6 w-36" />
                <SkeletonBox className="h-3 w-28 mt-2" />
              </div>

              <SkeletonBox className="h-8 w-16 rounded-lg" />

            </div>


            {/* Orders */}
            <div className="space-y-3">

              {[1, 2, 3, 4].map((item) => (

                <div
                  key={item}
                  className="
                    flex items-center justify-between
                    p-4
                    rounded-xl
                    bg-black/50
                    border border-zinc-800/70
                    hover:border-zinc-700
                  "
                >

                  <div className="flex items-center gap-4">

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/80 flex-shrink-0" />

                    <div>
                      <SkeletonBox className="h-4 w-28" />
                      <SkeletonBox className="h-3 w-20 mt-2" />
                    </div>

                  </div>


                  <div className="flex items-center gap-4">

                    <SkeletonBox className="hidden sm:block h-3 w-16" />

                    <SkeletonBox className="h-6 w-16 rounded-full" />

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* ================= PROFILE ================= */}
          <div
            className="
              bg-zinc-900/70
              border border-zinc-800
              rounded-2xl
              p-6
              backdrop-blur-xl
              relative overflow-hidden
            "
          >

            {/* orange glow */}
            <div className="absolute -right-16 -bottom-16 w-40 h-40 bg-orange-500/5 blur-3xl rounded-full" />

            <SkeletonBox className="h-6 w-24" />


            {/* User */}
            <div className="flex items-center gap-4 mt-7">

              <div className="relative">

                <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-zinc-700" />

                <div className="
                  absolute
                  bottom-0
                  right-0
                  w-4
                  h-4
                  rounded-full
                  bg-orange-500/40
                  border-2
                  border-zinc-900
                " />

              </div>


              <div className="flex-1">
                <SkeletonBox className="h-4 w-28" />
                <SkeletonBox className="h-3 w-40 mt-2" />
              </div>

            </div>


            {/* Profile info */}
            <div className="mt-7 space-y-3">

              <div className="flex justify-between">
                <SkeletonBox className="h-3 w-16" />
                <SkeletonBox className="h-3 w-24" />
              </div>

              <div className="flex justify-between">
                <SkeletonBox className="h-3 w-16" />
                <SkeletonBox className="h-3 w-20" />
              </div>

              <div className="flex justify-between">
                <SkeletonBox className="h-3 w-16" />
                <SkeletonBox className="h-3 w-28" />
              </div>

            </div>


            <SkeletonBox className="h-11 w-full rounded-xl mt-7" />

          </div>

        </div>

      </main>


      {/* ================= SHIMMER CSS ================= */}
      <style>
        {`
          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>

    </div>
  );
};

export default DashboardSkeleton;