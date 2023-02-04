import Meta from 'components/meta'
import Container from "components/container"
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Accordion from 'components/accordion'
import Image from 'next/image'
import eyecatch from 'images/about.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function About() {
    return (
        <Container>
            <Meta 
                pageTitle="About" 
                pageDesc="About Development Activities" 
                pageImg={eyecatch.src}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
            />
            <Hero title="About" subtitle="About Development Activities" />

            <figure>
                <Image
                    src={eyecatch}
                    alt=""
                    layout="responsive"
                    sizes="(min-width: 1152px) 1152px, 100vw"
                    priority
                    placeholder="blur"
                />
            </figure>


            <TwoColumn>
                <TwoColumnMain>
                    <PostBody>

                            <h2>佐野 祐介　Sano Yusuke</h2>

                        <p>
                        <a target="_blank" href="https://twitter.com/Tippy_uscpa" rel="noreferrer">@ちっぴー</a><br></br>
                            中国生まれのWebエンジニア（フロントエンド、バックエンド）、Webデザイナーです。
                        </p>


                        <h3>スキル</h3>

                        <p>
                           React.js / Next.js（本サイトが採用しております）<br></br>
                           Vue.js / Nuxt.js<br></br>
                           PHP / Laravel / WordPress / SQL<br></br>
                           Linux / Nginx / Node.js / AWS<br></br>
                           Adobe Photoshop / Illustrator / Adobe XD / Figma<br></br>
                        </p>

                        

                        <h3>FAQ</h3>
                        <Accordion heading="プログラミングのポイントについて">
                        <p>
                            プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、そこに向かってさまざまな課題を設定していきながら、プログラムを作っていきます。
                        </p>
                        </Accordion>
                        <Accordion heading="古代語の解読について">
                        <p>
                            古代語を解読するのに必要なのは、書かれた文字そのものだけです。古代の世界観や思考方法。それらを読み取ってこそ古代の世界観が理解できてきます。
                        </p>
                        </Accordion>
                        <Accordion heading="公開リポジトリの活用について">
                        <p>
                            公開リポジトリを活用すると、全世界のどこからでもアクセスし、開発者が関連するプロジェクトのタスクを利用することができます。
                        </p>
                        </Accordion>

                    </PostBody>
                </TwoColumnMain>

                <TwoColumnSidebar>
                    <Contact />
                </TwoColumnSidebar>
            </TwoColumn>
        </Container>
    )
}