import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', name: 'english' },
  { code: 'ru', name: 'russian' },
  { code: 'fr', name: 'french' },
  { code: 'es', name: 'spanish' },
  { code: 'ja', name: 'japanese' },
  { code: 'zh', name: 'chinese' },
  { code: 'tr', name: 'turkish' },
  { code: 'it', name: 'italian' },
  { code: 'cs', name: 'czech' },
  { code: 'ko', name: 'korean' },
];

export const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const currentLangCode = i18n.language;
  const currentLang = languages.find(lang => lang.code === currentLangCode) || languages[0];
  const [open, setOpen] = useState(false);

  return (
    <div className="px-2 py-1.5">
      <DropdownMenuLabel className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
        {t('profile.language')}
      </DropdownMenuLabel>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="w-full justify-between h-8 text-xs">
            <div className="flex items-center">
              <Globe className="mr-2 h-3 w-3" />
              {t(`profile.${currentLang.name}`)}
            </div>
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48 max-h-60 overflow-y-auto">
          {languages.map(({ code, name }) => (
            <DropdownMenuItem
              key={code}
              onClick={() => i18n.changeLanguage(code)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                <Globe className="mr-2 h-3 w-3" />
                <span>{t(`profile.${name}`)}</span>
              </div>
              {currentLangCode === code && <span className="text-xs">✓</span>}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}; 