import * as React from 'react'

//
// Types
//

interface Config<P> {
  ElementType: React.ReactType<P>
}

interface EmptyProps {
}

interface Props {
  a?: string
}

type HProps = {
  configEmpty: Config<EmptyProps>,
  config: Config<Props>
}

//
// Component
//

const H: React.FC<HProps> = ({ config, configEmpty }) => {
  const A: React.ReactType<EmptyProps> = configEmpty.ElementType // assigned
  const B: React.ReactType<EmptyProps> = 'div' // assigned

  const C: React.ReactType<Props> = config.ElementType // assigned
  const D: React.ReactType<Props> = 'div' // in this case assignment failed

  return (
    <div>
      <A/> {/* TS2604: JSX element type 'A' does not have any construct or call signatures. */}
      <B/>

      <C/>
      <D/>
    </div>
  )
}

export default H
