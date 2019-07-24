import React from 'react'

const CircleOutlineSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={props.width}
    height={props.height}
  >
    <path
      fill={props.fill}
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z"
    />
  </svg>
)

export default CircleOutlineSvg
