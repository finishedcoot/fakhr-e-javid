import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo"
import {
  Container,
  Section,
  FormSection,
  ContactInformation,
  InfoContainer,
  TitleContainer,
  Info,
} from "../styles/ContactStyles.js"
import { motion } from "framer-motion"

const contact = () => {
  const motionVariants = {
    fadeIn: { opacity: 1 },
    fullWidth: { width: "100%" },
  }
  return (
    <Layout>
      <Seo title="Contact" />
      <Container>
        <Section>
          <FormSection>
            <motion.label
              initial={{ opacity: 0 }}
              variants={motionVariants}
              animate={"fadeIn"}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 0.5,
              }}
              htmlFor="name"
            >
              Name
            </motion.label>
            <motion.input
              initial={{ width: 0 }}
              variants={motionVariants}
              animate={"fullWidth"}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 1,
              }}
              name="name"
              type="text"
            />
            <motion.label
              initial={{ opacity: 0 }}
              variants={motionVariants}
              animate={"fadeIn"}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 0.5,
              }}
              htmlFor="email"
            >
              Email
            </motion.label>
            <motion.input
              initial={{ width: 0 }}
              variants={motionVariants}
              animate={"fullWidth"}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 1,
              }}
              name="email"
              type="email"
            />
            <motion.label
              initial={{ opacity: 0 }}
              variants={motionVariants}
              animate={"fadeIn"}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 0.5,
              }}
              htmlFor="message"
            >
              Message
            </motion.label>
            <motion.textarea
              initial={{ opacity: 0 }}
              variants={motionVariants}
              animate={"fadeIn"}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 1,
              }}
              name="message"
            />
            <motion.input
              initial={{ opacity: 0 }}
              variants={motionVariants}
              animate={"fadeIn"}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 0.5,
              }}
              type="submit"
              className="submit"
              value={"Submit"}
            />
          </FormSection>
        </Section>
        <Section>
          <ContactInformation>
            <InfoContainer>
              <TitleContainer>
                <motion.span
                  initial={{ top: "-100%" }}
                  animate={{ top: "0" }}
                  transition={{
                    duration: 1,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: 1,
                  }}
                >
                  Address:
                </motion.span>
              </TitleContainer>
              <Info>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: 1.5,
                  }}
                >
                  NOOR, MAZANDARAN, IRAN
                </motion.p>
              </Info>
            </InfoContainer>
            <InfoContainer>
              <TitleContainer>
                <motion.span
                  initial={{ top: "-100%" }}
                  animate={{ top: "0" }}
                  transition={{
                    duration: 1,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: 1,
                  }}
                >
                  Tel:
                </motion.span>
              </TitleContainer>
              <Info>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: 1.5,
                  }}
                >
                  +98 910 211 3471
                </motion.p>
              </Info>
            </InfoContainer>
            <InfoContainer>
              <TitleContainer>
                <motion.span
                  initial={{ top: "-100%" }}
                  animate={{ top: "0" }}
                  transition={{
                    duration: 1,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: 1,
                  }}
                >
                  Email:
                </motion.span>
              </TitleContainer>
              <Info>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: 1.5,
                  }}
                >
                  fakhrjavid@gmail.com
                </motion.p>
              </Info>
            </InfoContainer>
          </ContactInformation>
        </Section>
      </Container>
    </Layout>
  )
}

export default contact
