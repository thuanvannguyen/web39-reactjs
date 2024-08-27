import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <div className='container mx-auto'>
      <h1>Toi uu hoa hinh anh NextJS</h1>
      <Image
        width={400}
        height={400}
        alt='ao thu dong'
        src='/aothudong.jpg'
        priority
      />

      <h2>Them hinh anh CDN tu URL khac!</h2>
      <Image
        width={400}
        height={400}
        alt='ao thu dong'
        src='https://down-vn.img.susercontent.com/file/1a29392af64aa39e5e87b2f5be76fe33'
        priority
      />
      <Image
        width={400}
        height={400}
        alt='ao thu dong'
        src='https://thanhnien.mediacdn.vn/Uploaded/dieutrang-qc/2022_08_01/kido-s-bakery-1-3688.jpg'
        priority
      />
    </div>
  )
}

export default HomePage