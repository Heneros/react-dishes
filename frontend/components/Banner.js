import Image from 'next/image';
import BGImage from '../../tmp-img/bg-img-home.png';


export default function BannerHomePage() {
    return (
        <div style={{
            height: '484px', width: '100%', position: 'relative',
        }} className='bg-header' >
            <Image
                src={BGImage}
                alt="Bg image"
                // width={1440}
                // height={484}
                layout='fill'
                objectFit="cover"
            />
        </div >
    )
}