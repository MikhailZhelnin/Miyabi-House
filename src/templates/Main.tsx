import type { ReactNode } from 'react'
import {Kaushan_Script} from "@next/font/google";

import Header from "@/layout/Header/Header";

import styles from './Main.module.scss'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const kaushanScript = Kaushan_Script({
  weight: '400',
  subsets: ['latin'],
})

const Main = (props: IMainProps) => {
  return (
    <div className={`${styles.main} ${kaushanScript.className}`}>
      {props.meta}

      <Header />

      <main>{props.children}</main>

    </div>
  )
}

export { Main }
