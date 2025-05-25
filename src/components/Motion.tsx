import { easeIn, motion, type easeInOut } from 'framer-motion';
import React, { type FC, type ReactNode, type TransitionFunction } from 'react'

interface Props {
    timing?: typeof easeInOut;
    duration: number;
    children: ReactNode
}
const ComponentMotion: FC<Props> = ({ timing = easeIn, duration, children }) => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: duration, ease: timing }}>
            {children}
        </motion.div>
    )
}

export default ComponentMotion