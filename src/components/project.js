import React from "react"
import PropTypes from "prop-types"

const Project = (props) => (
    <>
        <a href={props.link}>
            <h3>{props.name}</h3>
        </a>
        <div>{props.description}</div>
    </>
)

Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
}

export default Project