export const StyleButton = ({ active, label, onToggle, style }) => {
      return (
            <button
                  type="button"
                  className={`px-1 py-1  rounded hover:bg-gray-200 transition-colors ${active ? "bg-blue-500 text-white border-blue-600" : "text-gray-700"
                        }`}
                  onMouseDown={(e) => {
                        e.preventDefault();
                        onToggle(style);
                  }}
                  aria-pressed={active}
            >
                  {label}
            </button>
      );
};