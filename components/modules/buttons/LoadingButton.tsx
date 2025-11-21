import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import React from 'react';

const LoadingButton = () => {
    return (
      <div className="flex flex-col gap-3 p-6 bg-card rounded-lg border border-border w-60">
        <Button variant="secondary">
          <Loader2 className="size-4 animate-spin" />
          Processing
        </Button>
      </div>
    );
};

export default LoadingButton;