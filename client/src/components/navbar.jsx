import MaxWidthWrapper from "./maxWidthWrapper";
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { Button } from "./ui/button";
import logo from "../../public/island.png"


export default function Navbar () {
    const [search, setSearch] = useState("")

      const handleSearch = () => {
        console.log(search)
      }
    return (
        <div className="bg-oasis-green">
            <MaxWidthWrapper className="sticky px-10">
                <div className="flex justify-start pt-8">
                    <a href="#">
                        <img
                            src={logo}
                            className="h-20 w-20"
                            style={{ marginTop: "-25px" }}
                        ></img>
                    </a>
                    <div class="">
                        <ul class="mt-2.5 flex">
                            <li>
                                <a
                                    href="#"
                                    class="whitespace-nowrap p-2 text-gray-900"
                                >
                                    Shows
                                </a>
                            </li>
                            <li>
                                <a href="#" class="p-2 text-gray-900">
                                    Movies
                                </a>
                            </li>
                        </ul>
                    </div>
                    <form className="mx-auto w-full">
                        <label
                            for="default-search"
                            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Search
                        </label>
                        <div class="relative">
                            <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                <svg
                                    class="h-4 w-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <Input
                                type="search"
                                id="default-search"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 "
                                placeholder="Search Anime"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Button
                                type="submit"
                                class="absolute bottom-1.5 end-2 rounded-lg bg-blue-700 px-4 py-1 text-sm font-medium text-white hover:bg-blue-800"
                                onClick={handleSearch}
                            >
                                search
                            </Button>
                        </div>
                    </form>
                    <a className="ml-5 ml-auto mt-2.5 whitespace-nowrap">
                        Sign up
                    </a>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}