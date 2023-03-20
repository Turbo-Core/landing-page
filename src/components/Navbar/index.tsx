import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import { Button, ConfigProvider, theme } from 'antd'
import { getMediaQueryPreference, isMobile } from '@/util'
import { FaStar, FaGithub } from 'react-icons/fa'

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [mobile, setMobile] = useState<boolean | undefined>(false);

    useEffect(() => {
        setDarkMode(getMediaQueryPreference(window) == "dark");
        setMobile(isMobile(window));
    }, []);
  return (
    <div className={style.navbar}>
      <div className={style.navbarLogo}>
          <Link href="/">
              <Image src="/logo.svg" alt="TurboCore" width={178} height={25}/>
          </Link>
      </div>
      <ConfigProvider
                  theme={{
                      algorithm: darkMode
                          ? theme.defaultAlgorithm
                          : theme.darkAlgorithm,
                  }}
              >
                  <Button size="middle" shape="round" icon={mobile ? <FaGithub /> : <FaStar />} href="https://github.com/Turbo-Core/TurboCore">
                      {mobile ? "Github" : "Star on GitHub!"}
                  </Button>
      </ConfigProvider>
  </div>
  )
}
