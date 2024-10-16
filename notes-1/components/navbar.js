import Link from "next/link";

export default function Navbar() {
  return (
    <div>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/about/us">about us</Link>
        <Link href="/about/someone">about someone else</Link>
        <Link href="/listofpost">posts</Link>
    </div>
  )
}

//layout page is already insstalled in the new version
//just add <Navbar/> above {children}
//is not added make a layout page as studied
