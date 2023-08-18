import {NextResponse} from "next/server"
export function middleware(req){
  
    // console.log("hello")

    return NextResponse.redirect(new URL("/",req.url))
//   if(req.nextUrl.pathname !="/")
//   {
//     return NextResponse.redirect(new URL("/",req.url))
//   }

}

export const config={
    matcher:"/about/:path*"
}



