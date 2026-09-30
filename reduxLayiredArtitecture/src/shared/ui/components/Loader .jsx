const Loader = () => {
  return (
    <span className="flex items-center justify-center gap-2">
      <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
      <span>Loading...</span>
    </span>
  );
};

export default Loader;