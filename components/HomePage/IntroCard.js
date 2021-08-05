import cls from "./IntroCard.module.css";
import Image from "next/image";
import BgImage from "../../public/images/intro-card/bg_blended.png";
import Card from "../../public/images/intro-card/card_crop.png";
import Link from "next/link";

export default function IntroCard() {
  return (
    <>
      <div className={cls.IntroCard}>
        <div className={cls.image}>
          <Image src={BgImage} alt="Background" layout="fill"></Image>
        </div>
        <div className={[cls.effect2]}>
          <Image alt="Mountains" src={Card} layout="fill"></Image>

          <div className={`${cls.container} ${cls.cardOverlay}`}>
            <nav className={cls.listElements}>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
                <li>
                  <Link href="/">Support</Link>
                </li>
                <li>
                  <Link href="/">About Me</Link>
                </li>
              </ul>
            </nav>
            <div className={cls.middle}>
              <div>Project</div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis fugit odio nam aliquam harum velit beatae aspernatur
                dolores repellat corrupti.
              </p>
            </div>

            {/* Filler div for justify-content space-between */}
            <div></div>
            <div></div>
           
          </div>
        </div>
      </div>
    </>
  );
}
