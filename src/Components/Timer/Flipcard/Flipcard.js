import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import { animated, useSpring, config } from 'react-spring'
import PropTypes from 'prop-types'

export default function Flipcard({ measure, time }) {
  const [displayedNumber, setDisplayedNumber] = useState(time)
  const [previousNumber, setPreviousNumber] = useState()
  const [cancelAnimation, setCancelAnimation] = useState(false)

  useEffect(() => {
    if (time === displayedNumber) {
      setCancelAnimation(false)
      setPreviousNumber(time)
    } else {
      setCancelAnimation(true)
      setDisplayedNumber(time)
    }
  }, [displayedNumber, time])

  useEffect(() => {
    setTimeout(setPreviousNumber(displayedNumber + 1), 700)
  }, [displayedNumber])

  const frontCardAnimation = useSpring({
    from: { transform: 'rotateX(0deg)' },
    to: { transform: 'rotateX(-180deg)' },
    delay: 0,
    config: config.slow,
    reset: cancelAnimation,
  })
  const backCardAnimation = useSpring({
    from: { transform: 'rotateX(180deg)' },
    to: { transform: 'rotateX(0deg)' },
    delay: 0,
    config: config.slow,
    reset: cancelAnimation,
  })

  return (
    <ContainerCard>
      <StaticCardTop>
        <span>{displayedNumber}</span>
      </StaticCardTop>

      <StaticCardBottom>
        <span>{previousNumber}</span>
      </StaticCardBottom>

      <AnimatedCardFront style={frontCardAnimation}>
        <span>{previousNumber}</span>
      </AnimatedCardFront>

      <AnimatedCardBack style={backCardAnimation}>
        <span>{displayedNumber}</span>
      </AnimatedCardBack>

      <Subtext>{measure}</Subtext>
      <CoilLeft></CoilLeft>
      <CoilRight></CoilRight>
    </ContainerCard>
  )
}
Flipcard.propTypes = {
  measure: PropTypes.string,
  time: PropTypes.number,
}
const CoilRight = styled.div`
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  position: absolute;
  top: 38px;
  right: 0px;
  height: 4px;
  width: 2px;
  background-color: #181a24;
  z-index: 10;
`
const CoilLeft = styled.div`
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  position: absolute;
  top: 38px;
  left: 0px;
  height: 4px;
  width: 2px;
  background-color: #181a24;
  z-index: 10;
`

const ContainerCard = styled.div`
  margin: 9px;
  display: grid;
  width: 80px;
  height: 80px;
  grid-template-columns: 80px;
  grid-template-rows: 40px 40px;
  grid-template-areas: 'top' 'bottom';
  perspective-origin: 50% 50%;
  perspective: 300px;
`
const StaticCardTop = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 100%;
  width: 100%;
  background-color: #27283b;
  grid-area: top;
  overflow: hidden;
  span {
    display: inline-flex;
    align-items: center;
    font-size: 38px;
    color: #dd4663;
    transform: translateY(50%);
  }
`
const StaticCardBottom = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 100%;
  width: 100%;
  background-color: #2d3044;
  grid-area: bottom;
  overflow: hidden;
  span {
    display: inline-flex;
    align-items: center;
    font-size: 38px;
    color: #ff5578;
    transform: translateY(-50%);
  }
`
const AnimatedCardFront = styled(animated.div)`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  position: absolute;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 40px;
  overflow: hidden;
  transform: rotateX(180deg);
  transform-origin: center bottom;
  backface-visibility: hidden;
  background-color: #27283b;
  span {
    display: inline-flex;
    align-items: center;
    color: #dd4663;
    font-size: 38px;
    transform: translateY(50%);
  }
`
const AnimatedCardBack = styled(animated.div)`
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  position: absolute;
  justify-content: center;
  top: 40px;
  left: 0;
  background-color: white;
  width: 100%;
  height: 40px;
  overflow: hidden;
  transform: rotateX(180deg);
  transform-origin: center top;
  backface-visibility: hidden;
  background-color: #2d3044;
  span {
    display: inline-flex;
    align-items: center;
    color: #ff5578;
    font-size: 38px;
    transform: translateY(-50%);
  }
`
const Subtext = styled.h3`
  font-size: 12px;
  color: #73738f;
`
