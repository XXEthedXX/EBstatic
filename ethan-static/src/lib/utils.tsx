// Easily combine class names aka cn, when trying to write many classes without making a blob
import { clsx } from 'clsx';
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};