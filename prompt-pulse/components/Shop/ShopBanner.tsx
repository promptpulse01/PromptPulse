import Image from "next/image";
import { styles } from "@/utils/styles";

const ShopBanner = ({title}: any) => {
    return (
        <div className="w-full h-full flex items-center justify-center relative">
          <div>
            <Image
              src={
                "https://pixner.net/aikeu/assets/images/banner/cmn-thumb-left.png"
              }
              width={180}
              height={180}
              alt=""
              className="absolute top-1 left-10"
            />
          </div>
          <h4
            className={`${styles.heading} font-Monserrat xl:text-6xl 2xl:text-7xl`}
          >
            {title}
          </h4>
          <div>
            <Image
              src={
                "https://pixner.net/aikeu/assets/images/banner/cmn-thumb-right.png"
              }
              width={180}
              height={180}
              alt=""
              className="absolute right-10"
            />
          </div>
        </div>
      );
}

export default ShopBanner