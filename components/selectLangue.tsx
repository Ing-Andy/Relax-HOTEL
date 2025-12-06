// components/selectLangue.tsx
"use client"
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export default function SelectLangue() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <Select value={locale} onValueChange={changeLocale}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Langue" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="fr">Français</SelectItem>
        {/* Ajoute d'autres langues selon ta config */}
      </SelectContent>
    </Select>
  );
}