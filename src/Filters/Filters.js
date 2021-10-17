import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import FiltersRoot from './Filters.styles'

const Filters = ({regions, onChange}) => {
    const _regions = regions.map(r => ({label: r.name, ...r}))
    return(
        <FiltersRoot>
            <Autocomplete
                disablePortal
                id={'regions-autocomplete'}
                options={_regions}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label={'Regions'} />}
                onChange={onChange}
            />
        </FiltersRoot>        
    )
};

Filters.defaultProps = {
    regions: [],
    onChange: () => {}
}

Filters.propTypes = {
    onChange: PropTypes.func,
    regions: PropTypes.arrayOf(PropTypes.shape({
        iso: PropTypes.string,
        name: PropTypes.string
    }))
}

export default Filters;
