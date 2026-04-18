export function EmptyDashboard({
  icon,
  title = "No data available",
  description = "Start by creating your first entry.",
  action,
}: any) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 rounded-xl border border-dashed border-neutral-300 bg-neutral-50">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 mb-4">
        {icon}
      </div>

      <h3 className="font-semibold text-neutral-800">{title}</h3>

      <p className="text-sm text-neutral-500 mt-1 max-w-sm text-center">
        {description}
      </p>

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
