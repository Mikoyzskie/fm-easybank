import styles from "@/app/styles/common.module.css"

import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className={`${styles.maxWidth} relative py-[170px]`}>
        <div className="max-w-[447px]">
          <h1 className="font-light text-[56px] leading-[64px] mb-6">Next generation digital banking</h1>
          <p className="text-[#9597A5] text-lg mb-9">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
          <Button />
        </div>
        <div className="absolute -top-[124px] -right-[118.25px] ">
          <Image
            src={"/image-mockups.png"}
            alt="Hero mockup"
            height={900.5}
            width={731.25}
            className="relative z-10"
          />
        </div>
        <Image
          src={"/bg-intro-desktop.svg"}
          alt="Hero mockup background"
          height={956}
          width={1371}
          className="absolute -top-[180px] -right-[571px] z-0"
        />
      </section>
    </main>
  );
}
