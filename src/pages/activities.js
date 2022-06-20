import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useRef, useState } from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo"
import {
  Container,
  ActivitiesSection,
  DescriptionSection,
  Slider,
  Slide,
  ButtonContainer,
} from "../styles/ActivitiesStyles.js"
import { AnimatePresence, motion } from "framer-motion"
import arrow from "../images/left-arrow-svgrepo-com.svg"

const Activities = () => {
  const [current, setCurrent] = useState(0)
  const slide = useRef(null)
  const slider = useRef(null)

  useEffect(() => {
    const size = slide.current.getBoundingClientRect().width
    console.log(slider.current.style.transform)
    slider.current.style.transform = `translateX(-${current * size}px)`
  }, [current])

  const goNext = () => {
    if (current < 2) {
      setCurrent(prev => ++prev)
      return
    }
  }

  const goPrev = () => {
    if (current > 0) {
      setCurrent(prev => --prev)
      return
    }
  }

  return (
    <Layout>
      <Seo title="Activities" />
      <Container>
        <ActivitiesSection
          initial={{ width: "0", height: "100%" }}
          animate={{ width: "50%" }}
          transition={{
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 1,
            }}
          >
            <div style={{ width: "40%", height: "100%", overflow: "hidden" }}>
              <Slider ref={slider}>
                <Slide ref={slide}>
                  <StaticImage
                    className="bookCover"
                    src="../images/bookcover.jpg"
                    alt="fakhr-e-javid"
                  />
                </Slide>

                <Slide>
                  <StaticImage
                    className="bookCover"
                    src="../images/bookcover.jpg"
                    alt="fakhr-e-javid"
                  />
                </Slide>

                <Slide>
                  <StaticImage
                    className="bookCover"
                    src="../images/bookcover.jpg"
                    alt="fakhr-e-javid"
                  />
                </Slide>
              </Slider>
            </div>
            <ButtonContainer>
              <button onClick={goPrev}>
                <img src={arrow} alt={"arrow"} />
              </button>
              <button className="next" onClick={goNext}>
                <img src={arrow} alt={"arrow"} />
              </button>
            </ButtonContainer>
          </motion.div>
        </ActivitiesSection>
        <DescriptionSection>
          <AnimatePresence exitBeforeEnter>
            {current === 0 && (
              <motion.p
                key={"first"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 1,
                }}
                exit={{ opacity: 0, transition: "all 1s ease" }}
              >
                1.It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident.
              </motion.p>
            )}
            {current === 1 && (
              <motion.p
                key={"second"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 1,
                }}
                exit={{ opacity: 0, transition: "all 1s ease" }}
              >
                2.Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections .
              </motion.p>
            )}
            {current === 2 && (
              <motion.p
                key={"third"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 1,
                }}
                exit={{ opacity: 0, transition: "all 1s ease" }}
              >
                3.There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or randomised words which don't look
                even slightly believable. If you are going to use a passage of
                Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined chunks as
                necessary.
              </motion.p>
            )}
          </AnimatePresence>
        </DescriptionSection>
      </Container>
    </Layout>
  )
}

export default Activities
