import { cn } from "../../lib/cn";

export default function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-black",
        className
      )}
      {...props}
    />
  );
}
