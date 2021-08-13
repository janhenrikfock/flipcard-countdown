import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import { animated, useSpring, config } from 'react-spring'

export default function Flipcard({ measure, time }) {
  const [cancelAnimation, setCancelAnimation] = useState(true)
  const [previousNumber, setPreviousNumber] = useState(time)

  useEffect(() => {
    setCancelAnimation(false)
    setPreviousNumber(time + 1)
  }, [time])

  const frontCardAnimation = useSpring({
    from: { transform: 'rotateX(0deg)' },
    to: { transform: 'rotateX(-180deg)' },
    cancel: cancelAnimation,
    delay: 1,
    config: config.slow,
    reset: true,
  })
  const backCardAnimation = useSpring({
    from: { transform: 'rotateX(180deg)' },
    to: { transform: 'rotateX(0deg)' },
    cancel: cancelAnimation,
    delay: 1,
    config: config.slow,
    reset: true,
  })

  return (
    <ContainerCard>
      <StaticCardTop>
        <span>{time}</span>
      </StaticCardTop>

      <StaticCardBottom>
        <span>{previousNumber}</span>
      </StaticCardBottom>

      <AnimatedCardFront style={frontCardAnimation}>
        <span>{previousNumber}</span>
      </AnimatedCardFront>

      <AnimatedCardBack style={backCardAnimation}>
        <span>{time}</span>
      </AnimatedCardBack>

      <Subtext>{measure}</Subtext>
    </ContainerCard>
  )
}

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
  border-radius: 5px;
  height: 100%;
  width: 100%;
  background-color: #27283b;
  grid-area: top;
  overflow: hidden;
  span {
    text-justify: center;
    font-size: 32px;
    color: #ff5578;
    transform: translateY(50%);
  }
`
const StaticCardBottom = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  background-color: #2d3044;
  grid-area: bottom;
  overflow: hidden;
  span {
    text-justify: center;
    font-size: 32px;
    color: #ff5578;
    transform: translateY(-50%);
  }
`
const AnimatedCardFront = styled(animated.div)`
  border-radius: 5px;
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
    text-justify: center;
    color: #ff5578;
    font-size: 32px;
    transform: translateY(50%);
  }
`
const AnimatedCardBack = styled(animated.div)`
  border-radius: 5px;
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
    text-justify: center;
    color: #ff5578;
    font-size: 32px;
    transform: translateY(-50%);
  }
`
const Subtext = styled.h3`
  font-size: 12px;
  color: #73738f;
`
