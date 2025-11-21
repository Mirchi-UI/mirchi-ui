import { Button } from '@/components/ui/button';
import React from 'react';

const StackedGroupButton = () => {
    return (
   
       
        <div className="flex flex-col gap-2">
          <Button className="w-52">Accept & Continue</Button>
          <Button variant="outline" className="w-52 bg-transparent">
            Decline
          </Button>
        </div>
 
    );
};

export default StackedGroupButton;