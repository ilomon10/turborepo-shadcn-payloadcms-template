// proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Intercept requests starting with /api/
  if (pathname.startsWith('/api/')) {
    const server = process.env.SERVER_URL;
    
    if (!server) {
      console.error('❌ Proxy Error: SERVER_URL environment variable is missing.');
      return NextResponse.next();
    }

    // Strip '/api' from the pathname to pass clean routes to the backend
    const remainingPath = pathname.replace(/^\/api/, '');
    const destinationUrl = `${server}${remainingPath}${search}`;

    // Dynamically forward traffic using runtime env
    return NextResponse.rewrite(new URL(destinationUrl, request.url));
  }
}

// Strictly target API routes for better performance
export const config = {
  matcher: '/api/:path*',
};
