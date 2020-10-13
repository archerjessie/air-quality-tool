import React, { useEffect } from 'react';
import * as R from 'ramda';
import withState from '../../../utils/withState';
import PropTypes from 'prop-types';

const CityLocationButton = ({ uid, name, onClick, selected, setSelected }) => {
    const onButtonClicked = (event) => {
        setSelected(!selected)
    }

    useEffect(() => { onClick(uid, selected) }, [selected]);

    return (
        <button
            className={`pv2 ph3 flex-grow-0 flex-shrink-0 ba-0 tl w-100 border-box ${selected ? '' : 'b--white'}`}
            onClick={onButtonClicked}>
            {name}
        </button>
    )
}

CityLocationButton.propTypes = {
    uid: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    setSelected: PropTypes.func.isRequired
}

export default R.compose(
    withState('selected', 'setSelected', false),

)(CityLocationButton);