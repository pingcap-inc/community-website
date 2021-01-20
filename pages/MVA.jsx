import React from 'react'
import styles from './MVA.module.scss'
import SEO from "components/SEO";


export async function getStaticProps(context) {
  
  // if (false) {
  //   return {
  //     notFound: true,
  //   }
  // }
  
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default function MVA({}) {
  
  return (
    <div className={styles.wrapper}>
      <SEO
        title="MVA"
        description="TiDB MOA（Most Outstanding  Advocate）、TiDB MVA （Most Valuable Advocate）是为 TUG 贡献高质量技术内容的 TiDB 用户，他们帮助他人充分了解 TiDB，是 TUG 社区认定的 TiDB 技术先驱者与技术领袖，享受极高的社区荣誉和权益。"
      />
      
      <main>
      
      </main>
    </div>
  )
}
