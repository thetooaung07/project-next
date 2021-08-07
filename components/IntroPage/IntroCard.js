import cls from "./IntroCard.module.css";
import Image from "next/image";
import BgImage from "../../public/images/intro-card/bg_blended.png";
import Card from "../../public/images/intro-card/card_crop.png";
import Link from "next/link";

import IntroNavigation from "./IntroNavigation";
import IntroBody from "./IntroBody";

export default function IntroCard() {
  return (
    <>
      <div className={cls.IntroCard}>
        <div className={cls.image}>
          <Image src={BgImage} alt="Background" layout="fill"></Image>
        </div>

        <div className={cls.effect2}>
          <Image alt="Mountains" src={Card} layout="fill" priority></Image>

          <div className={`${cls.container} ${cls.cardOverlay}`}>
            <IntroNavigation></IntroNavigation>
            <IntroBody></IntroBody>

            {/* Filler div for justify-content space-between */}

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
