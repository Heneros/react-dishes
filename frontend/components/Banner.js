import Image from 'next/image';
import BGImage from '../../tmp-img/bg-img-home.png';


export default function BannerHomePage() {
    return (
        <>
            <Image
                src={BGImage}
                alt="Bg image"
                width={1440}
                height={484}
                priority
            />
        </>
    )
}