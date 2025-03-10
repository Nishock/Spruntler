export function ActionButton({ label }: { label: string }) {
  return (
    <button
      className={
        "relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#1e00ff] shadow-[0px_0px_12px_rgb(77, 64, 239)]"
      }
    >
      <div className={"absolute inset-0 rounded-lg"}>
        <div
          className={
            "absolute inset-0 border rounded-lg border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          }
        />
        <div
          className={
            "absolute inset-0 border rounded-lg border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"
          }
        />
        <div
          className={
            "absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(77, 64, 239)_inset]"
          }
        />
      </div>
      <span>{label}</span>
    </button>
  );
}
