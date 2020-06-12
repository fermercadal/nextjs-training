import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Dark Lord of the Sith, Supreme Commander of the Imperial Military.</p>
        <p>Former Member of the Jedi High Council and Jedi General in the Grand Army of the Republic.</p>
      </section>
    </Layout>
  )
}