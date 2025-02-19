interface InputProps {
    variant?: "default" | "email" | "password";
    placeholder?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const Input: React.FC<InputProps> = ({ placeholder, variant = "default" }) => {
    const baseStyles = "transition-all duration-300";
    const variants = {
        default: " max-w-sm peer font-mono py-3 pe-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600",
        email: "bg-[#FEF9E1] font-mono text-white",
        password: "bg-[#FEF9E1] font-mono text-white",
    };

    if (variant === "email") {
        return (
            <div className="max-w-sm space-y-3 text-white">
                <div className="relative">
                    <input
                        type={variant === "email" ? "email" : variant} // Add logic for 'email' type
                        className={`${baseStyles} ${variants[variant]} peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-white text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-[#C14600] dark:text-neutral-100 dark:placeholder-neutral-100 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600`}
                        placeholder={placeholder}
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                        <svg className="shrink-0 size-4 text-white dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }

    if (variant === "password") {
        return (
            <div className="max-w-sm space-y-3 text-white">
                <div className="relative">
                    <input
                        type={variant === "password" ? "password" : variant}
                        className={`${baseStyles} ${variants[variant]} peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-[#C14600] text-sm text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-[#C14600] dark:text-neutral-100 dark:placeholder-neutral-100 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600`}
                        placeholder={placeholder}
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                        <svg className="shrink-0 size-4 text-white dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
                            <circle cx="16.5" cy="7.5" r=".5"></circle>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <input
            type={variant}
            className={`${baseStyles} ${variants[variant]}`}
            placeholder={placeholder} // Set placeholder to show text inside the input
        />
    );
}

export { Input };
