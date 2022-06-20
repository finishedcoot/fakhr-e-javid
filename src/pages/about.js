import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo"
import { Container, Description, LogoSection } from "../styles/AboutStyles.js"
import { AnimatePresence, motion } from "framer-motion"

const about = () => {
  return (
    <Layout>
      <Seo title="About" />

      <Container>
        <div style={{ width: "50%", height: "100%", zIndex: 100 }}>
          <AnimatePresence>
            <LogoSection
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              <Link to="/">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: 1,
                  }}
                >
                  <StaticImage
                    src="../images/logo.png"
                    className="logo"
                    alt="fakhr-e-javid logo"
                  />
                </motion.div>
              </Link>
            </LogoSection>
          </AnimatePresence>
        </div>
        <Description>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 1,
            }}
          >
            <p>
              Fakhr-e Javid publications has been established in 2014, in the
              north province of Mazandaran.
            </p>
            <p>
              As a cultural institution and with the aim of expansion of
              socio-cultural development, three steps were designed in making
              the policy of publishing:
              <span className="first">
                1- To specify the social and cultural needs of the society
              </span>
              <span>2- To search for the cultural and scientific talents </span>
              3- To compile the texts presented by the scholars and the young
              people interested in introducing their rich culture to the other
              societies.<span></span>
            </p>
            <p>
              In presenting the written culture of a society and publishing the
              manuscripts and books for the people and the governments,
              different specific periods may be mentioned throughout the
              history:
              <span className="first">
                a) The period that finding the manuscripts and the old forms of
                written texts was very difficult. Thus the scientific
                achievements were not available easily for everybody.
              </span>
              <span>
                b) The period that throughout the world, the printing books and
                articles were prevailed due the mechanical development of the
                printing industry. Thus reading the printed books was considered
                very interesting among the youths and the old people.
              </span>
              <span>
                c) And the period of the communication revolution that the paper
                form of the informing system is gradually disappeared. Now, the
                new electronic system is replacing the old informing system. The
                new electronic system provides many tools and devices which has
                made very easy the conveying of the information. Thus the latest
                information is available at any time for each group of the
                society, regarding their different capabilities and talents.
              </span>
            </p>

            <p>
              Therefore, with regard to the quick and continuous changes of the
              informing process, expanding the knowledge about the historical,
              cultural and scientific identity among the younger generation
              needs to be concerned seriously. Thus, the historical and social
              culture of the home country should be taken into consideration in
              planning the cultural programs as honorable values.
            </p>
            <p>
              Also, in order to increase the knowledge and understanding of the
              generation who will be responsible for future advancement of the
              country, the institutions of education and culture should
              recognize their capabilities in different fields and attempt to
              meet the cultural needs of the society.
            </p>
            <p>
              On the other hand, in line with the planned scientific and
              cultural activities throughout the country, the sector of
              supplying books should be developed according to the new evolution
              in the process of informing, to be able to meet the scientific
              needs of the society at the national and regional level.
            </p>

            <p>
              In fact an advanced scientific society may have serious impact on
              the other societies at the regional and international level, when
              it attempts to apply new systems and tools in introducing its
              cultural values.
            </p>
            <p>
              Nevertheless, along with the expansion of publication, with the
              main goal of the expansion and promotion of the culture and the
              history of thoughts, the Fakhr-e-Javid publications has attempted
              to select the texts that are concerned as{" "}
              <h3>
                the mirror of talents and interests of the different groups of
                the society
              </h3>
              . Therefore the presented books, indicates the particular
              interests 4 and desire of the educated youths and the scholars
              which may be led to the strengthening and developing the culture
              of this old land or realm.
            </p>
            <p>
              The high level of the education, also the professional and
              scientific capabilities of the youths in presenting their
              knowledge about development of the home land, at the national and
              international level, and also their specific role in the national
              development of the economy has made this publication more serious
              in paving this way towards{" "}
              <h3>
                the goal of introducing the youths talents, and their
                intellectual and scientific knowledge on the issue{" "}
              </h3>
              , using the recent introduced systems of information.
            </p>
            <p>
              In fact, today, the professional and artistic capabilities of the
              Iranian youths at the national and international level and{" "}
              <h3>their honorable and great victories</h3> may be concerned as
              the important steps towards the future advancement of the country
              in different fields that should be presented to the world, through
              new communications system.
            </p>
            <h2>Fakhr-e-Javid Publications</h2>
          </motion.div>
        </Description>
      </Container>
    </Layout>
  )
}

export default about
