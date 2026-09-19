import {NextResponse} from 'next/server';
import type {NextResponse} from 'next/server';

export function middleware(request: NextRequest){
   
}

export const config = {
    matcher: {
        '/',
        '/profile',
        '/login',
        '/signup',
    }
}