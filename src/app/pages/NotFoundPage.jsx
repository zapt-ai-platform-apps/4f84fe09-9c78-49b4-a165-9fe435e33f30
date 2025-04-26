import React from 'react';
import { Button } from '../../modules/core/components';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <img 
        src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=96&height=96" 
        alt="Produkti Logo" 
        className="h-24 w-24 mb-6"
      />
      <h1 className="text-4xl font-bold text-secondary-900 mb-2">Page Not Found</h1>
      <p className="text-xl text-secondary-600 mb-8">Sorry, we couldn't find the page you're looking for.</p>
      <Button onClick={() => window.location.href = '/'}>
        Return to Home
      </Button>
    </div>
  );
}