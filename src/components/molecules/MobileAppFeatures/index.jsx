import React from 'react'
import classes from './MobileAppFeatures.module.css'
import clsx from 'clsx'
import Image from 'next/image'
import { imageUrl } from '@/resources/utils/helper'

const MobileAppFeatures = ({data}) => {
  console.log(data)
  return (
    <div className={classes.mobileAppFeatures} style={{backgroundColor: data?.backgroundColor}}>
        <div className={classes.mobileAppFeaturesImage}>
            <Image src={imageUrl(data?.image) || data?.image} alt="mobile app" fill />
        </div>
        <div className={classes.mobileAppFeaturesContent}>
            <h3 className={clsx(classes.title, 'fs20 fw400')} style={{color: data?.textColor}}>{data?.title}</h3>
            <p className={clsx(classes.description, 'fs17 fw400')} style={{color: data?.descriptionColor}}>{data?.description}</p>
        </div>
    </div>
  )
}

export default MobileAppFeatures