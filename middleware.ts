import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest, res: NextResponse) {
    if (
        req.nextUrl.pathname.startsWith('/_next') ||
        req.nextUrl.pathname.includes('/api/') ||
        PUBLIC_FILE.test(req.nextUrl.pathname)
    ) {
        return;
    }
    if (req.nextUrl.locale === 'am') {
        const locale = req.cookies.get('NEXT_LOCALE') || 'am'

        return NextResponse.rewrite(new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url))
    }
}