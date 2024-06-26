import { Key } from "react";
import Link from "next/link";
import Image from "next/image";
  
  export default function Product(props: {id: Key; img: string; title: string, description: string, options: string, href: string }) {
    return (
        <div
        key={props.id}
        className="relative flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg group"
      >
        <div className="bg-gray-200 aspect-w-3 aspect-h-4 group-hover:opacity-75 sm:aspect-none sm:h-96">
          <Image
            src={props.img}
            alt={props.title}
            className="object-cover object-center w-full h-[256px] sm:w-full sm:h-full"
            height={1028}
            width={1028}
          />
        </div>
        <div className="flex flex-col flex-1 p-4 space-y-2">
          <h3 className="text-sm font-medium text-gray-900">
            <Link href={props.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {props.title}
            </Link>
          </h3>
          <p className="text-sm text-gray-500">{props.description}</p>
          <div className="flex flex-col justify-end flex-1">
            <p className="text-sm italic text-gray-500">{props.options}</p>
          </div>
        </div>
      </div>
    )
  }
  