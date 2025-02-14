export const buttonStyles = {
  primary: "flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-xl ring-1 ring-inset ring-blue-500/20 hover:ring-blue-500/30 transition-all group",
  secondary: "flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300 rounded-xl ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all group",
};

export const cardStyles = {
  glass: "bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 ring-1 ring-inset ring-zinc-800",
  hover: "hover:ring-zinc-700 transition-all",
};

export const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}; 