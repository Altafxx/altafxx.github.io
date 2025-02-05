export default function Badge({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string; // Make it optional with a default value
}) {
    return (
        <div className={`rounded-xl bg-white text-black px-2 w-fit my-4 ${className}`}>
            <text className={`font-bold text-lg`}>{children}</text>
        </div>
    );
}
