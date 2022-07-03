import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { AnimatePresence, motion } from "framer-motion"
import logo from "../images/logo.png"

import {
  Container,
  OverContainer,
  PoemContainer,
  WelcomeText,
  HistoryDesc,
  InfoSectionContainer,
  TimelineMenu,
  TimelineItemContainer,
} from "../styles/HomePageStyles"

import data from "../data/homepage.json"

const Poem = ({ poet, vers1, vers2, vers3, vers4 }) => {
  const motionVariants = {
    fadeIn: { opacity: 1 },
  }
  return (
    <PoemContainer exit={{ opacity: 0 }} key={poet}>
      <motion.h3
        initial={{ opacity: 0 }}
        variants={motionVariants}
        animate={"fadeIn"}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="first-line"
      >
        {vers1}
      </motion.h3>
      <motion.h3
        initial={{ opacity: 0 }}
        variants={motionVariants}
        animate={"fadeIn"}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="second-line"
      >
        {vers2}
      </motion.h3>
      <motion.h3
        initial={{ opacity: 0 }}
        variants={motionVariants}
        animate={"fadeIn"}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="first-line"
      >
        {vers3}
      </motion.h3>
      <motion.h3
        initial={{ opacity: 0 }}
        variants={motionVariants}
        animate={"fadeIn"}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="second-line"
      >
        {vers4}
      </motion.h3>
      <motion.h4
        initial={{ opacity: 0 }}
        variants={motionVariants}
        animate={"fadeIn"}
        transition={{
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96],
          delay: 1,
        }}
      >
        {poet}
      </motion.h4>
    </PoemContainer>
  )
}

const HistoricalDescription = ({ description, title }) => {
  const motionVariants = {
    fadeIn: { opacity: 1 },
  }
  return (
    <HistoryDesc exit={{ opacity: 0 }} key={"history"}>
      <motion.h3>{title}</motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        variants={motionVariants}
        animate={"fadeIn"}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {description}
      </motion.p>
    </HistoryDesc>
  )
}

const TimelineItem = ({
  date,
  time,
  handlingChange,
  dataSubject,
  dataGuid,
  guid,
}) => {
  return (
    <TimelineItemContainer>
      <h3>
        <span className="date">{date}</span>
        <button
          aria-label="Change subject"
          className={`button ${dataGuid === guid && "active"}`}
          onClick={handlingChange}
          data-guid={dataGuid}
          data-subject={dataSubject}
        ></button>
        <span className="time">{time}</span>
      </h3>
      {/* <span className="title">{title}</span> */}
    </TimelineItemContainer>
  )
}

const IndexPage = () => {
  const [current, setCurrent] = React.useState({})
  const [subject, setSubject] = React.useState("historical")
  const [guid, setGuid] = React.useState("apadana")
  const motionVariants = {
    fadeIn: { opacity: 1 },
  }

  const handleClick = e => {
    if (e.target.dataset.subject === "historical") {
      setSubject("historical")
      setGuid(e.target.dataset.guid)
      return
    }
    if (e.target.dataset.subject === "cultural") {
      setSubject("cultural")
      setGuid(e.target.dataset.guid)
      return
    }
  }

  React.useEffect(() => {
    const active = data.filter(subject => subject.guid === guid)
    setCurrent(active[0])
  }, [guid])

  return (
    <Layout>
      <Seo title=" " />
      <Container>
        <motion.div className="imageContainer">
          <AnimatePresence exitBeforeEnter>
            {guid === "apadana" && (
              <motion.div
                key={"first"}
                style={{ height: "100%" }}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ opacity: 0, transition: "all 1s ease" }}
                transition={{
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 2,
                }}
              >
                <StaticImage
                  src="../images/4.jpg"
                  alt="perspolis"
                  placeholder="blurred"
                  className="image"
                />
              </motion.div>
            )}

            {guid === "saadi" && (
              <motion.div
                key={"second"}
                style={{ height: "100%" }}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ opacity: 0, transition: "all 1s ease" }}
                transition={{
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 2,
                }}
              >
                <StaticImage
                  src="../images/sadie2.jpg"
                  alt="saadie"
                  placeholder="blurred"
                  className="image"
                />
              </motion.div>
            )}
            {guid === "espahbod" && (
              <motion.div
                key={"third"}
                style={{ height: "100%" }}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ opacity: 0, transition: "all 1s ease" }}
                transition={{
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 2,
                }}
              >
                <StaticImage
                  src="../images/espahbod.jpg"
                  alt="espahbod cave"
                  placeholder="blurred"
                  className="image"
                />
              </motion.div>
            )}
            {guid === "nima" && (
              <motion.div
                key={"fourth"}
                style={{ height: "100%" }}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ opacity: 0, transition: "all 1s ease" }}
                transition={{
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 2,
                }}
              >
                <StaticImage
                  src="../images/nima.jpg"
                  alt="nima youshij"
                  placeholder="blurred"
                  className="image"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <InfoSectionContainer>
          <TimelineMenu>
            {data.map(subject => (
              <TimelineItem
                key={subject.id}
                date={subject.year}
                time={subject.era}
                handlingChange={handleClick}
                dataGuid={subject.guid}
                guid={guid}
                dataSubject={subject.type}
              />
            ))}
          </TimelineMenu>
          <OverContainer>
            <WelcomeText>
              <motion.img
                initial={{ opacity: 0 }}
                variants={motionVariants}
                animate={"fadeIn"}
                transition={{
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 1.5,
                }}
                src={logo}
                alt="perspolis"
                placeholder="blurred"
              />
              <motion.h2
                initial={{ opacity: 0 }}
                variants={motionVariants}
                animate={"fadeIn"}
                transition={{
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 1.5,
                }}
              >
                FAKHR E JAVID PUBLICATIONS
              </motion.h2>
            </WelcomeText>
            <AnimatePresence exitBeforeEnter>
              {subject === "cultural" && (
                <Poem
                  poet={current.poet}
                  vers1={current.vers1}
                  vers2={current.vers2}
                  vers3={current.vers3}
                  vers4={current.vers4}
                />
              )}
              {subject === "historical" && (
                <HistoricalDescription
                  description={current.description}
                  title={current.title}
                />
              )}
            </AnimatePresence>
          </OverContainer>
        </InfoSectionContainer>
      </Container>
    </Layout>
  )
}

export default IndexPage
