import cls from "./IntroCard.module.css";
import Image from "next/image";
import BgImage from "../../public/images/intro-card/bg_blended.png";
import Card from "../../public/images/intro-card/card_crop.png";

export default function IntroCard() {
  return (
    <div className={cls.IntroCard}>
      <div className={cls.image}>
        <Image src={BgImage} alt="Background" layout="fill"></Image>
      </div>

      <div className={[cls.effect2]}>
        <Image alt="Mountains" src={Card} width={900} height={500}></Image>
      </div>
    </div>
  );
}
