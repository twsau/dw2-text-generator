import { NavLink } from "@/components/Navlink";

export const Header = () => (
  <header className="fixed w-full border-b p-3 flex justify-between gap-3 items-center bg-background z-10">
    <NavLink href="/" text="create" />
    <NavLink href="/saved" text="saved" />
    <div className="ml-auto flex gap-3">
      <a
        className="hover:underline"
        href="https://store.steampowered.com/app/667530/Drunken_Wrestlers_2/"
        target="_blank"
      >
        dw2
      </a>
      <a
        className="hover:underline"
        href="https://x.com/_twsau"
        target="_blank"
      >
        twsau
      </a>
    </div>
  </header>
);
