
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n, type Locale } from '@/i18n-config';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const flags: Record<Locale, string> = {
  en: '🇬🇧',
  id: '🇮🇩'
};

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    const currentLocale = i18n.locales.find(loc => segments[1] === loc);
    
    if (currentLocale) {
      segments[1] = locale;
      return segments.join('/');
    }
    
    // Handle case where default locale is not in the path
    if (segments[1] === '') {
        return `/${locale}`;
    }
    return `/${locale}${pathName}`;
  };

  const getCurrentLocale = (): Locale => {
    if (!pathName) return i18n.defaultLocale;
    const segments = pathName.split('/');
    const locale = segments[1];
    if (i18n.locales.includes(locale as Locale)) {
      return locale as Locale;
    }
    return i18n.defaultLocale;
  };

  const currentLocale = getCurrentLocale();
  const otherLocales = i18n.locales.filter((locale) => locale !== currentLocale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <span>{flags[currentLocale]}</span>
          <span className="ml-2 font-semibold">{currentLocale.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {otherLocales.map((locale) => {
          return (
            <DropdownMenuItem key={locale} asChild>
              <Link href={redirectedPathName(locale)}>
                <span>{flags[locale]}</span>
                <span className="ml-2">{locale.toUpperCase()}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
