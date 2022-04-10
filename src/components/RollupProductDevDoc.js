// Libraries
import React from "react"
import styled from "styled-components"

// Components
import Link from "./Link"
import Translation from "./Translation"

// Data
import rollups from "../data/layer-2/layer-2.json"

// Styles
const H4 = styled.h4`
  margin: 1rem 0;
`

const ProductCard = styled.div`
  margin: 1rem 0;
  background: ${(props) => props.theme.colors.rollupDevDocList};
  display: flex;
  flex-direction: row;
`

const Content = styled.div`
  padding: 1rem 1rem 0 1rem;
`

const RollupProductDevDoc = ({ rollupType }) => {
  return (
    <div>
      {rollups[rollupType].map(
        ({ name, noteKey, website, developerDocs, l2beat }) => {
          return (
            <ProductCard>
              <Content>
                <div>
                  <H4>{name}</H4>
                  {noteKey.length > 0 && (
                    <p>
                      * <Translation id={noteKey} />
                    </p>
                  )}
                  <ul>
                    <li>
                      <Link to={website}>
                        <Translation id="rollup-component-website" />
                      </Link>
                    </li>
                    <li>
                      <Link to={developerDocs}>
                        <Translation id="rollup-component-developer-docs" />
                      </Link>
                    </li>
                    <li>
                      <Link to={l2beat}>
                        <Translation id="rollup-component-technology-and-risk-summary" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Content>
            </ProductCard>
          )
        }
      )}
    </div>
  )
}

export default RollupProductDevDoc
