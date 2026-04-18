export function EmptyError({
  icon,
  title = "Something went wrong",
  description = "We couldn’t load the data.",
  action,
}: any) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-xl border border-red-100 bg-red-50">
      <div className="mb-4 text-red-500">{icon}</div>

      <h3 className="text-base font-semibold text-red-700">{title}</h3>

      <p className="text-sm text-red-500 mt-1 max-w-sm">{description}</p>

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
