import styles from "@/app/styles/common.module.css"
import Image from "next/image"
import Button from "./Button"

export default function Header() {

    const links = ["Home", "About", "Contact", "Blog", "Careers"]

    return (
        <div className="bg-white relative z-20">
            <header className={`${styles.maxWidth} py-[18px] flex justify-between items-center `}>
                <Image
                    src={"logo.svg"}
                    height={20}
                    width={129}
                    alt="Header Logo"
                />
                <ul className="flex gap-[30px]">
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index} className="text-[#9597A5] text-sm">{link}</li>
                            )
                        })
                    }
                </ul>
                <Button />
            </header>
        </div>
    )
}
