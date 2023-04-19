import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ['/', '/library', '/playlist'];

export default function middleware(req: NextRequest) {
    
    if (protectedRoutes.find((p) => p === req.nextUrl.pathname)) {
        
        const token = req.cookies.get('TRAX_ACCESS_TOKEN');

        if (!token) {
            let signInUrl = new URL('/signup', req.url)
            return NextResponse.redirect(signInUrl);
        }
    }
}