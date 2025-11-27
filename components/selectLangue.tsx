"use client"
import { useChangeLocale, useCurrentLocale } from "@/locales/clients";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export default function SelectLangue() {
    const locale = useCurrentLocale();
    const setValue = useChangeLocale();
    
    return (
        <Select value={locale} onValueChange={(value: "fr" | "en") => setValue(value)}>
            <SelectTrigger className="min-w-30 ">
                <SelectValue />
            </SelectTrigger>
            <SelectContent content="w-max">
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="en">English</SelectItem>
            </SelectContent>
        </Select>
    )
}