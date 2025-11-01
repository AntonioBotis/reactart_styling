export default function Input({ label, invalid, ...props }) {
    let label2 = 'block mb-2 text-xs font-bold tracking-wide uppercase';
    let inputClasses = 'w-full px-3 py-2 leading-tight border rounded shadow';

    if (invalid) {
        label2 += ' text-red-400';
        inputClasses += ' text-red-600 bg-red-100 border border-red-300';
    } else {
        label2 += ' text-stone-300';
        inputClasses += ' text-gray-700';
    }

    return (
        <p>
            <label className={label2}>{label}</label>
            <input className={inputClasses} {...props} />
        </p>
    );
}
