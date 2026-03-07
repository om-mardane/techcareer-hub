import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath = path === '/auth' || path.startsWith('/api/auth') || path.startsWith('/_next') || path === '/favicon.ico' || path.startsWith('/admin') || path.startsWith('/api/admin');

  // Get the token from the cookies
  const token = request.cookies.get('hello_auth_token')?.value || '';

  let isAuthenticated = false;

  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback_secret');
      await jwtVerify(token, secret);
      isAuthenticated = true;
    } catch (error) {
      // Token is invalid or expired
      isAuthenticated = false;
    }
  }

  // Redirect to auth page if trying to access a protected route without being authenticated
  if (!isPublicPath && !isAuthenticated) {
    return NextResponse.redirect(new URL('/auth', request.nextUrl));
  }

  // Redirect to home if trying to access auth page while already authenticated
  if (path === '/auth' && isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
