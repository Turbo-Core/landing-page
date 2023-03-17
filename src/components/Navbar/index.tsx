import Link from 'next/link'
import Image from 'next/image'
import React, { PureComponent } from 'react'
import style from './index.module.css'

export class Navbar extends PureComponent {
  render() {
    return (
      <div className={style.navbar}>
		<div className={style.navbarLogo}>
			<Link href="/">
				<Image src="/logo.svg" alt="TurboCore" width={178} height={25}/>
			</Link>
		</div>
		<div className={style.navbarLinks}>
			<a href='https://github.com/Turbo-Core/TurboCore'>GitHub</a>
		</div>
	</div>
    )
  }
}

export default Navbar