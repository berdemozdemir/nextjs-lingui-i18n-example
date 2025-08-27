import { HomePageButton } from '@/components/HomePageButton';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;

  showHomeButton?: boolean;
};

export const Container = ({ children, showHomeButton = false }: Props) => {
  return (
    <div className="rounded-2xl border border-white/60 bg-white/70 shadow-lg">
      <div className="relative space-y-2 px-6 py-5 sm:px-8 sm:py-6">
        {showHomeButton && <HomePageButton />}

        {children}
      </div>
    </div>
  );
};
