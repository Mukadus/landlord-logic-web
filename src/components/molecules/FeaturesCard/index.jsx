import React from 'react'
import classes from './FeaturesCard.module.css'
import Image from 'next/image'
import { imageUrl } from '@/resources/utils/helper'
import clsx from 'clsx'


const FeaturesCard = ({data}) => {
  return (
    <div>
        <div className={classes.featuresCard}>
            <div className={classes.featuresCardImage}>
                <div className={classes.featuresCardImageIcon}>
                    <Image src={imageUrl(data?.icon) || data?.icon} alt={data?.title} fill />
                </div>
            </div>
            <div className={classes.featuresCardContent}>
                <h3 className={clsx(classes.featuresCardTitle, 'fs20 fw600')}>{data?.title}</h3>
                <p className={clsx(classes.featuresCardDescription, 'fs14 fw500')}>{data?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default FeaturesCard