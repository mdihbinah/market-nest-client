
// components/Navbar.tsx
import Link from "next/link";
import { ShoppingCart, Heart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          MarketNest
        </Link>

        {/* Navigation Links */}
        <div className="hidden gap-6 md:flex">
          <Link href="/" className="hover:text-green-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-green-600">
            Products
          </Link>
          <Link href="/categories" className="hover:text-green-600">
            Categories
          </Link>
          <Link href="/vendors" className="hover:text-green-600">
            Vendors
          </Link>
          <Link href="/deals" className="hover:text-green-600">
            Deals
          </Link>
        </div>

        {/* Search */}
        <div className="hidden items-center rounded-lg border px-3 py-2 md:flex">
          <Search size={18} className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <Link href="/wishlist">
            <Heart className="cursor-pointer hover:text-green-600" />
          </Link>

          <Link href="/cart">
            <ShoppingCart className="cursor-pointer hover:text-green-600" />
          </Link>

          <Link href="/login">
            <User className="cursor-pointer hover:text-green-600" />
          </Link>
        </div>
      </div>
    </nav>
  );
}