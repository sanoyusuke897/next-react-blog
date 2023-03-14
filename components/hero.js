import styles from 'styles/hero.module.css'
import Image from 'next/image'
import cube from 'images/top.png'

export default function Hero({ title, subtitle, imageOn = false}) {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.text}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            {imageOn && (
                <figure className={styles.image}>
                    <Image src={cube}
                            alt=""
                            layout='responsive'
                            sizes="(min-width: 1152px) 576px, (min-width:768px) 50vw, 100vw"
                            priority
                            placeholder='blur'
                    />
                </figure>
            )}
        </div>
    )
}
